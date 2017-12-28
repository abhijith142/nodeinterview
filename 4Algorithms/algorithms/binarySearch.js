/*
  A JavaScript module which performs a binary search on an array of numbers ordered low to high.  If the specified value is found its index in the input array is returned.  If the specified value is not found -1 is returned.
*/
module.exports = exports = function binarySearch(input, value) {
  var bottom = 0, top = input.length - 1, index = null;
  var found = false;

  while(bottom<top){
    var middle = parseInt((bottom+top)/2);
    if(value<input[middle]){
      top = middle-1;
    }else if(value>input[middle]){
      bottom = middle +1;
    }else{
      found = true;
      index = middle;
    }
  }
  console.log(index);
  if(found === true)return index;
  return -1;
//  complete the function
};
