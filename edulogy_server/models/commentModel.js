const mongoose = require("mongoose");
const joi = require("joi");

const commentSchema = mongoose.Schema({
  content: String,
  user: { type: mongoose.Types.ObjectId, ref: "user" },
  like: { type: Number, default: 0 },
  imgs: [String],
  subComments: [{ type: mongoose.Types.ObjectId, ref: "comment" }],
});

const validate = (comment) => {
  const schema = joi.object({
    content: joi.string().required(),
    user: joi.string().required(),
    like: joi.number(),
    imgs: joi.array().items(joi.string()),
    subComments: joi.array().items(joi.string()),
  });

  return schema.validate(comment);
};

const Comment = mongoose.model("comment", commentSchema);

module.exports = {
  Comment,
  validate,
};
