// index.js: sequelize 관련 설정 코드를 기입합니다.

const Sequelize = require("sequelize"); // sequelize 패키지를 불러옴
const config = require(__dirname + "/../config/config.json")["development"]; // db 연결 정보
const db = {}; // 빈 객체

const sequelize = new Sequelize(config.database, config.username, config.password, config); // sequelize 객체

const todo = require("./Todo")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.todo = todo;

module.exports = db;
