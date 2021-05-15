const { Comment } = require("../models/commentModel");
const base = require("./baseController");

exports.addOne = base.addOne(Comment);
exports.getOne = base.getOne(Comment);
exports.getAll = base.getAll(Comment);
exports.updateOne = base.updateOne(Comment);
exports.reply = async (req, res, next) => {
  try {
    let comment = await Comment.findById(req.params.id);

    if (!comment) {
      res.status(404).json({
        status: "fail",
        message: "No document found with that id",
      });
      return;
    }

    let subComment = new Comment(req.body);
    await subComment.save();

    comment.subComments.push(subComment._id);

    await comment.save();
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter !",
    });
  }
};
