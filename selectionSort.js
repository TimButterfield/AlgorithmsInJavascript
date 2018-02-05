// ========= Quick Sort ==========
//
// Compelexity: Best case : O(1), Worst case : O(n^2)
// Comments :
//

function selectionSort(itemsToSort) {
  //enumerate list, in search of smallest value
  //move items
  var iterations = 0;
  for (var outerCounter=0; outerCounter < itemsToSort.length - 1; outerCounter++){

      var indexOfMinimumValue = outerCounter;

      for (var innerCounter=outerCounter+1; innerCounter < itemsToSort.length; innerCounter++){
        if (itemsToSort[innerCounter] < itemsToSort[indexOfMinimumValue]){
          indexOfMinimumValue = innerCounter;
        }
        iterations++;
      }

      iterations++;

      //has the index changed at all
      if (indexOfMinimumValue != outerCounter){
        var currentValue = itemsToSort[outerCounter];
        itemsToSort[outerCounter] = itemsToSort[indexOfMinimumValue];
        itemsToSort[indexOfMinimumValue] = currentValue;
      }
  }

  console.log(iterations);
  return itemsToSort;
}

//var list = [32, 64, 1, 14, 58, 41]
var list = [1, 14, 32, 41, 58, 64]
console.log(selectionSort(list));
