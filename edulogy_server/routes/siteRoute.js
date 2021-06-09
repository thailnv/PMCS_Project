const router = require("express").Router();

const controller = require("../controllers/siteController");

router.get("/home", controller.homePage);

module.exports = router;
