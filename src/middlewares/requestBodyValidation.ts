import Ajv from "ajv";

export default async function requestBodyValidation(
  req: any,
  res: any,
  next: any
) {
  const ajv = new Ajv();
  const schema = {
    type: "object",
    properties: {
      name: { type: "string" },
      description: { type: "string" },
      creator: { type: "string" },
      createdAt: { type: "string" },
      duration: { type: "integer" },
    },
    required: ["name", "description", "creator", "createdAt", "duration"],
    additionalProperties: false,
  };
  let validate = ajv.compile(schema);
  let isvalid = validate(req.body);

  // if  the body contains all the required properties only then it will go the controller

  if (!isvalid) {
    res.status(400).send({
      error: true,
      message: "Bad Request",
    });
  } else {
    next();
  }
}
