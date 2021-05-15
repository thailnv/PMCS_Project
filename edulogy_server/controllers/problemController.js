const { Problem } = require("../models/problemModel");
const { Comment, validate } = require("../models/commentModel");
const base = require("./baseController");

exports.getOne = base.getOne(Problem);
exports.getAll = base.getAll(Problem);
exports.addOne = base.addOne(Problem);
exports.reply = async (req, res, next) => {
  try {
    let problem = await Problem.findById(req.params.id);
    if (!problem) {
      res.status(404).json({
        status: "fail",
        message: "No document found with that id !",
      });
      return;
    }

    let comment = new Comment(req.body);

    await comment.save();

    problem.comments.push(comment._id);

    await problem.save();

    res.status(200).json({
      status: "success",
      doc: problem,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter !",
    });
    return;
  }
};
