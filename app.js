const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello world from the server");
});

app.get("/about", (request, response) => {
  response.send("Hello world from about page the server");
});

app.get("/contact", (request, response) => {
  response.send("Hello world from contact page the server");
});

app.get("/Signin", (request, response) => {
  response.send("Hello world from Signin page of the server");
});

app.get("/Signup", (request, response) => {
  response.send("Hello world from Signup page of the server");
});

app.listen(3000, () => {
  console.log("server is running at 3000");
});
