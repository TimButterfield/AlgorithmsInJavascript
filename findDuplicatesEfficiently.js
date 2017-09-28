//Search Algorithms :

//Can you find out if a sequence has duplicates?
//---------------------------------------------
//In terms of complexity it's O(n).
//Since we have to iterate the array in full once

//Assumption : Array is sorted and numbers are contingous
//---------------------------------------------

const findDuplicates = function(arrayToSearch){

  let actualSum = 0;
  //this is a o(n) operation, scales linearly
  arrayToSearch.forEach(x => actualSum += x);

  let lastNumberInArray = arrayToSearch[arrayToSearch.length-1];

  //this is a O(1). Always one operation in spite of array size
  let expectedSum = lastNumberInArray * (lastNumberInArray+1)/2

  let duplicateValue = actualSum - expectedSum;

  return {
    hasDuplicates : duplicateValue > 0,
    duplicateValue : duplicateValue
  };
}

let result = findDuplicates([1,2,3,3,4,5]);
console.log("duplicate value is " + result.duplicateValue);
