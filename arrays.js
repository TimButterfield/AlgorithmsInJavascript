//Linear operations
//Can you sum the values in the array
//and express the algorithms complexity
//-----------------------------------------------------------------------
//Linear operations are in O(n)
//The algorithm scales linearly with the number of elements in sequence
//-----------------------------------------------------------------------
function SumNumbers(){
	console.log("-------------------------------------")
	console.log("Summing via simple loop")
	console.log("-------------------------------------")
	const numbers = [1,2,3,4,5];
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

SumNumbers();
console.log();
//-----------------------------------------------------------------------
//A more efficient method is to use a function
//Assumption : Numbers are contiguous
//Sum = n(n+1)/2
//This function is in O(1). The number of elements in the array does not
//alter the complexity
//-----------------------------------------------------------------------
function SumContigousNumbers(arrayToSum){
	console.log("-------------------------------------")
	console.log("Summing contiguous numbers without loop	")
	console.log("-------------------------------------")
	let arrayLength = arrayToSum.length;
	let numberOfIterations=1;
	let sum = 0;

	sum = arrayLength * (arrayLength+1)/2;
	console.log("Sum of sequence " + sum);
	console.log("Number of iterations was " + numberOfIterations)

	return;
}

SumContigousNumbers([1,2,3,4,5]);
