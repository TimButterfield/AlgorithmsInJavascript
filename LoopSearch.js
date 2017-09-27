//Search Algorithms :

//Can you find out if a sequence has duplicates?
//---------------------------------------------
//In terms of complexity it's O(n^2). Inefficient
//and inelegant. Scales badly as the volume of
//scales

//Assumption : Array is sorted!!
//---------------------------------------------
let sortedArray = [4,5,6,8,15];
let numberOfIterations = 0;

function sequenceHasDuplicates(arrayToSearch){
    for (let number of arrayToSearch){
      let occurrences = 0
      for (let secondNumber of arrayToSearch){

        numberOfIterations = numberOfIterations + 1;

        if (number === secondNumber){
          occurrences+=1;
        }

        if (occurrences > 1){
          return {
            hasDuplicates: true,
            logStatement: "has duplicates"
          }
        }
      }
    }

    return {
      hasDuplicates: false,
      logStatement: "does not have duplicates"
    }
  };


let result = sequenceHasDuplicates(sortedArray);
console.log("The array " + result.logStatement);
console.log("Iterated " + numberOfIterations + " times");
