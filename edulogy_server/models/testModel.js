const mongoose = require("mongoose");
const joi = require("joi");
const testSchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    enum: ["full", "mini", "part1", "part2", "part5", "part6", "part7"],
  },
  time: Number,
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "question" }],
});

const validate = (test) => {
  const schema = joi.object({
    name: joi.string().min(4).required(),
    type: joi.string().required(),
    time: joi.number(),
    questions: joi.array().min(1).required(),
  });
  return schema.validate(test);
};

const Test = mongoose.model("test", testSchema);

module.exports = {
  Test,
  validate,
};
