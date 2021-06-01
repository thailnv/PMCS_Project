const { Comment } = require("../models/commentModel");
const base = require("./baseController");

exports.addOne = base.addOne(Comment);
exports.getOne = async (req, res, next) => {
  try {
    let comment = await Comment.findById(req.params.id).populate("subComments");
    if (!comment) {
      res.status(404).json({
        status: "fail",
        message: "No document found with that id",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      doc: comment,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter",
    });
  }
};
exports.getAll = async (req, res, next) => {
  try {
    let comments = await Comment.find({});
    if (!comments.length) {
      res.status(404).json({
        status: "fail",
        message: "No document found with that id",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      doc: comments,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter!",
    });
  }
};
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

    this.getOne(req, res, next);
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter !",
    });
  }
};
