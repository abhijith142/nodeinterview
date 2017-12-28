/*
  A JavaScript module which performs a bubble sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function(input) {
  //  complete the function
  for(var j=1;j<input.length;j++){
    for(var i=0;i<input.length-j;i++){
      if(input[i]>input[i+1]){
        var temp = input[i];
        input[i]=input[i+1];
        input[i+1]=temp;
      }
    }
  }
  return input;
};
