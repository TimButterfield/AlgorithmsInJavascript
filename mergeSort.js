//====== MergeSort ===========
/*
  Efficiency achieved through divide and conquer.
  It's a O(n log n) operation, since it's a O(n) operation to review each item
  and divide and conquer operations are typically O(log n).
*/

//perform a split, then a merge.

let numbers = [35,21,12,67];

let split = function(items){

  if (items.length <= 1){
    return items;
  }
  //console.log(items);

  let centrePoint = items.length/2;
  let leftItems = items.slice(0, centrePoint);
  let rightItems = items.slice(centrePoint, items.length);

  merge(split(leftItems), split(rightItems));
}

let merge = function(firstItems, secondItems){
  if (firstItems !== undefined || secondItems !== undefined){
    console.log(firstItems);
    console.log(secondItems);
  }
}

split(numbers);
