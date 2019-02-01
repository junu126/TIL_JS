const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize =new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

// 1:N 상황
db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });

/* 1:1 상황 - 프로젝트와 상관 없음.

 * 사용자 정보를 담고 있는 가상의 Info 모델.
 * db.User.hasOne(db.Info, { foreignKey: 'user_id', sourceKey: 'id });
 * db.Info.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' });
 * 
 */

/* N:M 상황 - 프로젝트와 상관 없음.

 * 게시글 정보를 담고 있는 가상의 Post 모델.
 * 해시태그 정보를 담고 있는 가상의 Hashtag 모델.
 * db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
 * db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
 * 
 * async (req, res, next) => {
 *  const tag = await Hashtag.find({where: {title: '노드'}});
 *  cosnt posts = await tag.getPosts(); // getPosts()메서드는 get + 모델 이름의 복수형
 * }
 */

module.exports = db;
