
exports.min = function min (array) {
  let k;

  if (!Array.isArray(array)) {
    k = 0;
  } else if(array.length === 0) {
    k = 0;
  } else {
    k = array.sort((a,b) => a-b).shift();
  }
  return k;
}

exports.max = function max (array) {
  let k;

  if (!Array.isArray(array)) {
    k = 0;
  } else if(array.length === 0) {
    k = 0;
  } else {
    k = array.sort((a,b) => a-b).pop();
  }
  return k; 
}

exports.avg = function avg (array) {
  let k;

  if (!Array.isArray(array)) {
    k = 0; 
  } else if(array.length === 0) {
    k = 0;
  } else {
    k = array.reduce((acc, item) => acc + item, 0);
    k /= array.length;
  }
  return k;  
}
