//Linear operations
//Can you sum the values in the array (simplest implementation)
//What's the algorithms complexity
//-----------------------------------------------------------------------
//Linear operations are in O(n)
//The algorithm scales linearly with the number of elements in sequence
//-----------------------------------------------------------------------
function SumNumbers(numbers){
	console.log("-------------------------------------")
	console.log("Summing via simple loop")
	console.log("-------------------------------------")
	let sum = 0;
	let numberOfIterations=0;
	for(let num of numbers){
		sum += num;
		numberOfIterations+=1;
	}

	console.log("Sum of sequence is " + sum);
	console.log("Number of iterations was " + numberOfIterations)
	return;
}

SumNumbers([1,2,3,4,5]);
