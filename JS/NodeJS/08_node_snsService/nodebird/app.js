const express = require("express");
const sesstion = require("express-session");
const cookieParser = require('cookie-parser');
const morgan = require("morgan");
const path = require("path");
const flash = require("connect-flash");
const passport = require('passport');
require("dotenv").config();

const pageRouter = require("./routes/page");
const AuthRouter = require("./routes/auth");
const PostRouter = require('./routes/post');
const UserRouter = require('./routes/user');
const { sequelize } = require('./models');
const passportConfig = require('./passport');

const app = express();
sequelize.sync();
passportConfig(passport);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.set("port", process.env.PORT || 8001);

// MiddleWare
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use('/img', express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  sesstion({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false
    }
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Router
app.use("/", pageRouter);
app.use('/auth', AuthRouter);
app.use('/post', PostRouter);
app.use('/user', UserRouter);

// Error MiddleWare
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error Message
app.use((err, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}번 포트에서 대기 중`);
});
