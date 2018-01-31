// Quick Sort
//
// Compelexity
// Comments

function quickSort(elementsToSort){
  var numbersLargerThanPivot = [];
  var numbersLessThanPivot = [];

  if (elementsToSort.length < 2){
    return elementsToSort;
  }

  var pivotPosition = elementsToSort.length - 1;
  var pivot = elementsToSort[pivotPosition];
  console.log(pivotPosition);
  console.log(pivot);

  elementsToSort = elementsToSort.slice(0, pivotPosition).concat(elementsToSort.slice(pivotPosition + 1));

  for (var counter = 0; counter < elementsToSort.length; counter++){
    var current = elementsToSort[counter];
    if (current < pivot){
      numbersLessThanPivot.push(current);
    }
    else {
      numbersLargerThanPivot.push(current);
    }
  }
  //return quickSort(numbersLessThanPivot).concat([pivot], quickSort(numbersLargerThanPivot));
  return quickSort(numbersLargerThanPivot).concat([pivot], quickSort(numbersLessThanPivot));
}
var numbersToSort = [32, 64, 1, 14, 58, 41];

console.log(numbersToSort);
console.log(quickSort(numbersToSort));
