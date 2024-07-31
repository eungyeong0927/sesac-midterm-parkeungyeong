// 컨트롤러 코드를 정의하는 파일입니다.

const { Todo } = require("../models/index");

exports.postTodo = async (req, res) => {
    try {
        console.log(req.body);
        const { title, done } = req.body;
        const newTodo = await Todo.create({
            title,
            done,
        });
        res.json(newTodo);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.getTodos = async (req, res) => {
    try {
        const todo = await Todo.findAll();
        res.json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.getTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findOne({
            where: { id }, //
        });

        res.json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.patchTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.update(
            { done }, // 무엇을 바꾸는데?
            { where: { id } } // 누구를 바꿔야하는데?
        );
        res.json(updatedTodo);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const isDeleted = await Todo.destroy({
            where: { id },
        });
        if (isDeleted) {
            return res.send(true);
        } else {
            return res.send(false);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};