//-----------------------------------------------------------------------
//A more efficient method is to use a function (only works with contigous numbers)
//ASSUMPTION : Numbers are contiguous
//Sum function is n(n+1)/2
//This function is in O(1). The number of elements in the array does not
//alter the complexity
//-----------------------------------------------------------------------
function SumContigousNumbers(arrayToSum){
	console.log("-------------------------------------")
	console.log("Summing contiguous numbers without loop	")
	console.log("-------------------------------------")
	let arrayLength = arrayToSum.length;
	let numberOfIterations=1;
	let sum=0;

	sum = arrayLength * (arrayLength+1)/2;
	console.log("Sum of sequence " + sum);
	console.log("Number of iterations was " + numberOfIterations)

	return;
}

SumContigousNumbers([1,2,3,4,5]);
