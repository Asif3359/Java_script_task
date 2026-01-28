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
  let x = req.query.x;
  let y = req.query.y;

  if (!x || !y) {
    res.send("NaN");
    return;
  }

  // 🔥 REMOVE { }
  x = x.replace(/[{}]/g, "");
  y = y.replace(/[{}]/g, "");

  const nx = Number(x);
  const ny = Number(y);

  if (
    isNaN(nx) ||
    isNaN(ny) ||
    nx <= 0 ||
    ny <= 0 ||
    !Number.isInteger(nx) ||
    !Number.isInteger(ny)
  ) {
    res.send("NaN");
    return;
  }

  const result = lcm(nx, ny);
  res.send(result.toString());
});

module.exports = router;
