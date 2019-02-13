/**
 * @api {post} /token Request JWT Token
 * @apiName JWT-Token
 * @apiGroup Token
 *
 * @apiSuccess {Number} code  return status code.
 * @apiSuccess {String} message  return message.
 * @apiSuccess {String} token return JWT token.
 * @apiSuccessExample {json}  Success-Response
 *     {
 *       "code": 200,
 *       "message": "토큰이 발급되었습니다.",
 *       "token": token,
 *     }
 * @apiError (Error401) {Number} code  return status code.
 * @apiError (Error401) {String} message  return message.
 * @apiErrorExample {json}  Error-Response
  *     {
 *       "code": 401,
 *       "message": "등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요.",
 *     }
 * @apiError (Error5xx) {Number} code  return status code.
 * @apiError (Error5xx) {String} message  return message.
 * @apiErrorExample {json}  Error-Response
  *     {
 *       "code": 5xx,
 *       "message": "서버 에러",
 *     }
 * 
 */

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const morgan = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();

const { sequelize } = require('./models');
const passportConfig = require('./passport');

const authRouter = require('./routes/auth');
const indexRouter = require('./routes');
const v1 = require('./routes/v1');
const v2 = require('./routes/v2');

const app = express();
sequelize.sync();
passportConfig(passport);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8002);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/v1', v1);
app.use('/v2', v2);
app.use('/auth', authRouter);
app.use('/', indexRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err: {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
