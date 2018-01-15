/*
The city of Königsberg in Prussia (now Kaliningrad, Russia) was set on both sides of the Pregel River, and included two large islands which were connected to each other and the mainland by seven bridges. The problem was to devise a walk through the city that would cross each bridge once and only once, with the provisos that: the islands could only be reached by the bridges and every bridge once accessed must be crossed to its other end. The starting and ending points of the walk need not be the same.

Look this up.
*/

/*Notes :

//cross each bridge X 7, only passing each bridge once
//The islands are the nodes and the bridges the vertex

Difference between a simple path and a Euler path, is that every vertex will be visited with a simple path, where as a Euler path will only visit each vertex once and only once
*/
let graph = function(){

  function addNode(node){

  }

  return {
    addNode : addNode
  };
}

var firstNode = Node("North Bank", [{"West Island", 5}, {"West Island", 3}, {"East Island", 2}]};
var secondNode = Node("South Bank", [{"West Island", 4}, {"West Island", 6}, {"East Island", 3}]);
var thirdNode = Node("East Island", [{"West Island", 6}]);

let graph = graph();
graph.addNode()
