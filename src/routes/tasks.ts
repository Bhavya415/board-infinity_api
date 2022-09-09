import { Router } from "express";
import addTaskController from "../controllers/addTaskController";
import getTaskListController from "../controllers/getTaskListController";
import requestBodyValidation from "../middlewares/requestBodyValidation";

const taskRouter = Router();

taskRouter.get("/list", async (req, res) => {
  await getTaskListController(req, res);
});

taskRouter.post("/add", requestBodyValidation, async (req, res) => {
  console.log(req.body);
  await addTaskController(req, res);
});

export default taskRouter;
