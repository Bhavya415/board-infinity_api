import { Request, Response } from "express";
import taskModel from "../models/taskSchema";
import addMinutes from "../utils/addMinutes";

interface addTaskRequestType extends Request {
  body: {
    name: string;
    description: string;
    creator: string;
    createdAt: string;
    duration: number;
  };
}

export default async function addTaskController(
  req: addTaskRequestType,
  res: Response
) {
  const { name, description, creator, createdAt, duration } = req.body;

  const expireAt = addMinutes(duration, new Date(createdAt));

  try {
    const new_task = new taskModel({
      name: name,
      description: description,
      createdAt: createdAt,
      creator: creator,
      duration: duration,
      expireAt: expireAt,
    });

    const result = await new_task.save();

    res.send({
      success: true,
      message: "task data added to the database successfully",
      data: result,
    });
  } catch (err: any) {
    // Internal Server Error
    res.status(500).send({
      error: true,
      message: "Failed to add task data",
    });
  }
}
