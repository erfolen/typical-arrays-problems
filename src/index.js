
exports.min = function min (array) {
  let k;

  if (Array.isArray(min) & min.length !== 0) {
    k = min.sort((a,b) => a-b).shift();
  } else {
    k = 0;
  }
  return k;
}

exports.max = function max (array) {
  let k;

  if (Array.isArray(min) & min.length !== 0) {
    k = min.sort((a,b) => a-b).pop();
  } else {
    k = 0;
  }
  return k; 
}

exports.avg = function avg (array) {
  let k;

  if (Array.isArray(min) & min.length !== 0) {
    k = min.reduce((acc, item) => acc + item, 0);
    k /= min.length 
  } else {
    k = 0;
  }
  return k;  
}
