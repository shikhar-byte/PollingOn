const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const poll = require("./routes/poll");
app.use("/poll", poll);
// Set public folder
app.use(express.static(path.join(__dirname, "public")));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable cors
app.use(cors());

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
