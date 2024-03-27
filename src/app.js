// import express
const express = require("express");

// initialize express
const app = express();

// attaching homepage route
app.get("/homepage", (req, res) => {
  res.send("you have hit the homepage");
});

//
app.get("/test", (request, response) => {
  response.status(200).json({ message: "you have hit the test page" });
});

app.listen(3000, () => {
  console.log("server is running");
});
