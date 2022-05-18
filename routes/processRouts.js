const express = require("express");
const router = express.Router();
const {
  getAllProcess,
  createProcess,
  deleteProcess,
  updateProcess,
} = require("../controller/routeController");

router.route("/").get(getAllProcess).post(createProcess);
router.route("/:id").delete(deleteProcess).patch(updateProcess);

module.exports = router;

// , getTask, createTask, deleteTask, updateTask
