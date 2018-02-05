// ========= Quick Sort ==========
//
// Compelexity: Best case : O(n log n), Worst case : O(n^2)
// Comments :
// Divide and conquer algorithm, uses partioning based on a pivot value.
// The algorithm is not constant, since the pivot value is random (for example last element in list)
// and partitioning based on pivot can be disadvantage.
// Worst case occurs when sorting an already sorted list, or when the pivot
// is the smallest or largest number in the list. Sorted a pre sorted list results in n - 1 iterations
// Pivot choices, choose last element or

let iterations = 0;

function quickSort(elementsToSort){
  var numbersLargerThanPivot = [];
  var numbersLessThanPivot = [];

  if (elementsToSort.length < 2){
    return elementsToSort;
  }

  var pivotPosition = elementsToSort.length - 1;
  var pivot = elementsToSort[pivotPosition];

  //the concat here is only required is the pivot is not the last element
  //elementsToSort = elementsToSort.slice(0, pivotPosition).concat(elementsToSort.slice(pivotPosition + 1));
  elementsToSort = elementsToSort.slice(0, pivotPosition);

  for (var counter = 0; counter < elementsToSort.length; counter++){
    var current = elementsToSort[counter];
    if (current < pivot){
      numbersLessThanPivot.push(current);
    }
    else {
      numbersLargerThanPivot.push(current);
    }
  }
  iterations++;
  return quickSort(numbersLessThanPivot).concat([pivot], quickSort(numbersLargerThanPivot));
}
var numbersToSort = [32, 64, 1, 14, 58, 41, 29, 18, 61, 10, 17, 37];

var result = quickSort(numbersToSort);

console.log("Unsorted is  : " + numbersToSort);
console.log("Sorted is    : " + result);
console.log("Iterations : " + iterations);

console.log();
console.log("==========================")
iterations = 0;
console.log("Pre sorted resorted list is    : " + quickSort(result));
console.log("Iterations : " + iterations);
