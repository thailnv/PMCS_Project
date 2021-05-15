const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const path = require("path");
var multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
const cors = require("cors");

const func = require("./helpers/testHelper");
const userRoutes = require("./routes/userRoute");
const questionRoutes = require("./routes/questionRoute");
const testRoutes = require("./routes/testRoute");
const problemRoutes = require("./routes/problemRoute");
const commentRoutes = require("./routes/commentRoute");
const db = require("./config/database");

const app = express();

//set env config path
dotenv.config({
  path: "./config.env",
});

//connect to db
db.connect();

//static files
app.use(express.static(path.join(__dirname, "/shared")));

//set security http header
app.use(helmet());

//cors policy
app.use(cors());

//body parser
app.use(express.json());
app.use(express.raw());
app.use(express.urlencoded({ extended: true }));
//routes
app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/comments", commentRoutes);
app.get("/", (req, res) => {
  res.send(`
      <h2>With <code>"express"</code> npm package</h2>
      <form action="/api/upload" enctype="multipart/form-data" method="post">
        <div>Text field title: <input type="text" name="title" /></div>
        <div>File: <input type="file" name="file" multiple="multiple" /></div>
        <input type="submit" value="Upload" />
      </form>
    `);
});

app.post("/api/upload", upload.single("file"), async (req, res) => {
  console.log(req.body.title);
  await func(req.file.buffer);
  res.json({
    message: "OK",
  });
});

app.use("*", (req, res) => {
  res.status(400).send("Undefined route !");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listen at port ${port}`);
});
