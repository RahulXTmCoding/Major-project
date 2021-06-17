const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.post("/data", (req, res, next) => {
  request(
    {
      url: "https://frengly.com/frengly/data/translateREST",
      method: "POST",
      json: true, // <--Very important!!!
      body: req.body,
    },
    function (error, response, body) {
      res.send(body.translation);
    }
  );
});
const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`From port ${port}`);
});
