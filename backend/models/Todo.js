// Todo.js: 해당 프로젝트는 단일 테이블(Todo)를 사용합니다.
// 해당 파일은 Todo 테이블에 연결할 Todo 모델을 정의하는 파일입니다.

const todo = (sequelize, DataTypes) => {
    const todo = sequelize.define("todo", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        done: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    });
    return todo;
};

module.exports = todo;
