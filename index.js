function sumItems(array) {
  let sum =0;

  for(items of array){
    if(Array.isArray(items)){
      sum+= (sumItems(items));
    } else {
      sum += items;
    }
  }
  return sum;
}

console.log(sumItems([1,2,[1,2,3]]));

module.exports = sumItems;