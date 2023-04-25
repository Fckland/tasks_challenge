const { Router } = require("express");
const { check } = require("express-validator");
const validation = require("../middlewares/validation");
const {
  getTasks,
  getTaskId,
  postTasks,
  putTasks,
  deleteTasks,
} = require("../controllers/tasks");
const jwt_validator = require("../middlewares/jwt_validation");
const {taskExists} = require("../middlewares/custom_check");

const router = Router();

router.get("/tasks", [], getTasks);


router.post(
  "/tasks",
  [
    check("name", "Name required").not().isEmpty(),
    // Validar que solo se cree una sola tarea por nombre
    taskExists,
    validation,
  ],
  postTasks
);

router.get(
  "/tasks/:id",
  [
    jwt_validator,
    check("id", "ID required").not().isEmpty(),
    check("id", "ID not valid").isMongoId(),
    validation,
  ],
  getTaskId
);

router.put(
  "/tasks/:id",
  [
    jwt_validator,
    check("id", "ID required").not().isEmpty(),
    check("id", "ID not valid").isMongoId(),
    validation,
  ],
  putTasks
);

router.delete(
  "/tasks/:id",
  [
    jwt_validator,
    check("id", "ID required").not().isEmpty(),
    check("id", "ID not valid").isMongoId(),
    validation,
  ],
  deleteTasks
);

module.exports = router;
