function WriteOut(){
	const numbers = [1,2,3,4,5];
	let sum = 0; 

	for(let num of numbers){
		sum += num;
	} 
	console.log(sum);
} 

WriteOut();

//write a summing function for an array of contiguous elements between 1 and num
//Find mid point, enumerate up and down, sum the two?
//Sum = n(n+1)/2
function SumContigousNumbers(arrayToSum){
	let arrayLength = arrayToSum.length;
	let sum = arrayLength * (arrayLength+1)/2;
	console.log("sum is " + sum);
	return sum;
}

SumContigousNumbers([1,2,3]);
SumContigousNumbers([1,2,3,4,5]);
//How to use ECMA Script 6 with node?

//Can you establish whether an array has duplicates.
let hasDuplicates = function(arrayToEvaluate){
	for(let value in arrayToEvaluate){

	}
}