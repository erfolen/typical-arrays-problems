
exports.min = function min (array) {
  return min.sort((a,b) => a-b).shift();
}

exports.max = function max (array) {
  return min.sort((a,b) => a-b).pop();
}

exports.avg = function avg (array) {
  let k = min.reduce((acc, item) => acc + item, 0)
  return k/min.length;
}
