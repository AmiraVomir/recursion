// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var eleClass = [];

  var findClass = function(ele) {
    if (ele.classList && ele.classList.contains(className)) {
      eleClass.push(ele);
    }
    if (ele.hasChildNodes) {
      let children = ele.childNodes;
      for (var i = 0; i < children.length; i++) {
        findClass(children[i]);
      }
    }
  }
  findClass(document.body);
  return eleClass;
};