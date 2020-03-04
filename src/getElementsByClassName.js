// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {    //Should return arr-like obj of all elements with className;
  // your code here
  var eleClass = [];

  //find class list > how? > ele.classList;
  var findClass = function(ele) {
    //if classlist has className, add > how? > use node.contains;
    if (ele.classList && ele.classList.contains(className)) {
      eleClass.push(ele);
    }

    //if has childnode, recursive into nodes to find class > how? > ele.childnode > func for childnode? > forloop
    if(ele.hasChildNodes) {
      let children = ele.childNodes;
      for (var i = 0; i < children.length; i++) {
        findClass(children[i]);
      }
    }
  }
  //recursive search doc.body; > how? > need func for find class > recursive with new func
  findClass(document.body);
  //return eleClass;
  return eleClass;
};