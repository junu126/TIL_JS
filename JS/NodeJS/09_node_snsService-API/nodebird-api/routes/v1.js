const express = require("express");
const jwt = require("jsonwebtoken");

const { verifyToken } = require("./middlewares");
const { Domain, User, Post, Hashtag } = require("../models");

const router = express.Router();

router.post("/token", async (req, res) => {
  const { clientSecret } = req.body;

  try {
    const domain = await Domain.find({
      where: { clientSecret },
      include: {
        model: User,
        attribute: ["nick", "id"]
      }
    });

    // sign 메서드를 통해 토큰 생성.
    // 첫 번째 인자는 토큰의 내용
    // 두번 째 인자는 비밀 키
    // 세 번째 인자는 토큰의 설정
    const token = jwt.sign(
      {
        id: domain.user.id,
        nick: domain.user.nick
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1m",
        issuer: "nodebird"
      }
    );

    if (!domain) {
      return res.status(401).json({
        code: 401,
        message: "등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요."
      });
    }
    return res.json({
      code: 200,
      message: "토큰이 발급되었습니다.",
      token
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      message: "서버 에러"
    });
  }
});

router.get("/test", verifyToken, (req, res) => {
  res.json(req.decoded);
});

module.exports = router;
