// import express
const express = require("express");
const HttpStatus = require("http-status-codes");

// initialize express
const app = express();

// parse json objects
app.use(express.json());

// attaching homepage route
app.get("/homepage", (req, res) => {
  res.send("you have hit the homepage");
});

// attaching test route
app.get("/test", (request, response) => {
  response.status(200).json({ message: "you have hit the test page" });
});

app.post("/posting-somethig", (request, response) => {
  //   console.log(request);
  //   console.log(response);

  const payload = request.body;
  console.log(payload);
  response.status(HttpStatus.StatusCodes.OK).json(payload);
});

// starting the express server
app.listen(3000, () => {
  console.log("server is running");
});
