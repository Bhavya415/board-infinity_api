import { Request, Response } from "express";
import taskModel from "../models/taskSchema";

export default async function getTaskListController(
  req: Request,
  res: Response
) {
  try {
    const docs = await taskModel.find();
    res.send(docs);
  } catch (err: any) {
    res.status(500).send({
      error: true,
      message: "Failed to fetch the task data",
    });
  }
}
