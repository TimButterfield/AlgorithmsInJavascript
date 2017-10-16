
function linkedList() {

    let  rootItem = null;
    let itemCount = 0;

    function add(itemToAdd){
      itemToAdd.next = null;

      if (rootItem === null){
        rootItem = itemToAdd;
        itemCount++;
      }
      else {
        if (rootItem.next === null){
          rootItem.next = itemToAdd;
          itemCount++;
        }
        else {
          //current node already points to next node
          //so we need to navigate to that value,
          //then recurse until we find end list
          addToEnd(rootItem.next, itemToAdd);
        }
      }
    }

    function findAllWhereAgedEqualOrAbove(minAge){
      //this should be smarter, take a property name, examine each value on the object
      let matches = [];
      if (rootItem !== null){
        if (rootItem.age >= minAge){
           matches.push(rootItem.name);
        }

        if (rootItem.next != null){
          findAllNodesEqualOrAbove(rootItem.next, minAge, matches);
        }
      }
    }

    function findAllNodesEqualOrAbove(node, minAge, matches){
      if (node != null) {
        if (node.age >= minAge){
          matches.push(node.name);
        }
      }

      if (node.next != null){
        //console.log(node.name + " : aged " + node.age + " min age" + minAge);
        findAllNodesEqualOrAbove(node.next, minAge, matches);
      }

      return matches;
    }

    function addToEnd(itemInList, itemToAdd){
      console.log(itemInList.name);
        if (itemInList.next === null){
          itemInList.next = itemToAdd;
          itemCount++;
        }
        else{

          add(itemInList.next, itemToAdd);
        }
    }

    function count(){
      return itemCount;
    }

    return {
      count: count,
      add: add,
      findAllWhereAgedEqualOrAbove: findAllWhereAgedEqualOrAbove
    };
}

let john = {
  name:"john",
  age:21
};

let ruby = {
  name:"ruby",
  age:48
};

let phil = {
  name:"phil",
  age:35
}

let store = linkedList();
store.add(john);
store.add(ruby);
store.add(phil);
console.log("count : " + store.count());

let results = store.findAllWhereAgedEqualOrAbove(20);
for (let result of results){
  console.log("Result : " + result);
}
