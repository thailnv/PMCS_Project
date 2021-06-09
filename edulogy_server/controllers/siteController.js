const { Test } = require("../models/testModel");

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
