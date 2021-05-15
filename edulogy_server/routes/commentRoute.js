const router = require("express").Router();
const { validate } = require("../models/commentModel");
const validator = require("../middleware/validate");
const auth = require("../middleware/auth");
const controller = require("../controllers/commentController");

router.get("/", controller.getAll);

router.use(auth.protect);

router.post("/reply/:id", validator(validate), controller.reply);

module.exports = router;
