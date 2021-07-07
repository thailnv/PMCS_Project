const { Test } = require("../models/testModel");
const { Question } = require("../models/questionModel");
const { User } = require("../models/userModel");

exports.homePage = async (req, res, next) => {
  try {
    let level1 = await Test.find({ level: "250-500" })
      .select("name time level img")
      .limit(5);
    let level2 = await Test.find({ level: "500-750" })
      .select("name time level img")
      .limit(5);
    let level3 = await Test.find({ level: "750-990" })
      .select("name time level img")
      .limit(5);

    res.status(200).json({
      status: "success",
      level1,
      level2,
      level3,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter",
    });
  }
};

exports.adminPage = async (req, res, next) => {
  try {
    const tests = await Test.find({})
      .select("-type")
      .populate("questions")
      .lean();
    const questions = await Question.find({}).lean();
    const users = await User.find({}).lean();
    res.status(200).json({
      status: "success",
      tests,
      questions: questions.length,
      users: users.length,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong please try again latter!",
    });
  }
};
