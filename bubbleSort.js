/*
Sort the ages of a group of people in ascending or descending orderCriteria

:Note due to loop nested in recursive function it's O(n ^ 2) algorithm, so inefficient. 
*/

let group = [
  {"name":"Tom", "age":26},
  {"name":"Lucy", "age":32},
  {"name":"Jess", "age":28},
  {"name":"Brad", "age":30},
  {"name":"Ace", "age":35},
  {"name":"Brad", "age":21}]

let swithPositions = function(itemsToSort, position, firstElement, secondElement){
  itemsToSort[position + 1] = firstElement;
  itemsToSort[position] = secondElement;
}

let sortByAge = function(itemsToSort, orderCriteria){

  let loopLimit = itemsToSort.length;
  let recurse = false;

  for(var position=0;position < loopLimit; position++){

    if (position + 1 < loopLimit) {
      currentPerson = itemsToSort[position];
      let ageOfCurrentPerson = currentPerson.age;

      let personInNextPosition = itemsToSort[position + 1];
      let ageOfNextPerson = personInNextPosition.age;

      if (orderCriteria.ascending){
        if (ageOfNextPerson < ageOfCurrentPerson) {
          swithPositions(itemsToSort, position, currentPerson, personInNextPosition);
          recurse = true;
        }
      }
      else {
        if (ageOfNextPerson > ageOfCurrentPerson) {
          swithPositions(itemsToSort, position, currentPerson, personInNextPosition);
          recurse = true;
        }
      }
    }
  }

  if (recurse) {
    sortByAge(itemsToSort, orderCriteria);
  }
};


let orderCriteria = {
  "ascending":true
}
sortByAge(group, orderCriteria);
console.log(group);
