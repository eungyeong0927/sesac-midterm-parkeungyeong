// 라우터를 정의하는 파일입니다.
const express = require("express");
const router = express.Router();
const controller = require("../controller/Ctodo");

// 기본 요청 경로: localhost:PORT/todos

router.get("/", controller.getTodos);
router.post("/", controller.postTodo);
router.get("/:id", controller.getTodo);
router.patch("/:id", controller.patchTodo);
router.delete("/:id", controller.deleteTodo);

module.exports = router;
