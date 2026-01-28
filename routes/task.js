var express = require("express");
var router = express.Router();

function gcdBigInt(a, b) {
  while (b !== 0n) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcmBigInt(a, b) {
  return (a / gcdBigInt(a, b)) * b;
}

router.get("/", function (req, res) {
  res.type("text/plain");

  let x = req.query.x;
  let y = req.query.y;

  if (!x || !y) {
    res.send("NaN");
    return;
  }

  x = x.replace(/[{}]/g, "");
  y = y.replace(/[{}]/g, "");

  const natRegex = /^[0-9]+$/;
  if (!natRegex.test(x) || !natRegex.test(y)) {
    res.send("NaN");
    return;
  }

  if (x === "0" || y === "0") {
    res.send("NaN");
    return;
  }

  const nx = BigInt(x);
  const ny = BigInt(y);

  const result = lcmBigInt(nx, ny);

  res.send(result.toString());
});

module.exports = router;
