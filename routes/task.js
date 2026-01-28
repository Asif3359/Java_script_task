// task.js
var express = require("express");
var router = express.Router();

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

router.get("/", function (req, res) {
  const x = req.query.x;
  const y = req.query.y;

  if (
    !x ||
    !y ||
    isNaN(x) ||
    isNaN(y) ||
    Number(x) <= 0 ||
    Number(y) <= 0 ||
    !Number.isInteger(Number(x)) ||
    !Number.isInteger(Number(y))
  ) {
    res.send("NaN");
    return;
  }

  const result = lcm(Number(x), Number(y));
  res.send(result.toString());
});

module.exports = router;
