// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here
  var stringify = ''
  if (typeof(obj) === 'boolean' || typeof(obj) === 'number') {
    return stringify += obj;
  };
  if (typeof(obj) === 'string') {
    return stringify += '"' + obj + '"';
  };
  if(obj === undefined) {
    return stringify += '';
  };
  if(obj === null) {
    return 'null';
  }
  if (Array.isArray(obj)) {
    var arr = [];
    obj.forEach(element => { arr.push(stringifyJSON(element));
    });
    return stringify += '[' + arr.join(',') + ']';
  }
  if (typeof(obj) === 'object'){
    for (var key in obj) {
      if (obj[key] !== undefined && typeof(obj[key]) !== 'function') {
        stringify += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
        if (key === Object.keys(obj).pop()) {
          break;
        }
        stringify += ','
      }
    }
    return '{' + stringify.slice(0, stringify.length) + '}'
  }
  return stringify;
};
console.log(stringifyJSON(true), typeof(stringifyJSON(true)));
console.log(stringifyJSON(null), typeof(stringifyJSON(null)));
console.log(stringifyJSON(undefined), typeof(stringifyJSON(undefined)));
console.log(stringifyJSON(1234), typeof(stringifyJSON(1234)));
console.log(stringifyJSON('string'), typeof(stringifyJSON('string')));
console.log(stringifyJSON([1,2,3,4]), typeof(stringifyJSON([1,2,3,4])));
console.log(stringifyJSON({a:1, b:'string'}), typeof(stringifyJSON({a:1, b:2})));