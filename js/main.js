// function minMax(arr) {
//  let arr2=[]
//    arr2.push(Math.min(...arr),Math.max(...arr))
//        return arr2
//     }

//     console.log(minMax([14, 35, 6, 1, 34, 54]));





// function calcAge(age) {
// 	return age*365
// }



// function canNest(arr1, arr2) {
// 	return Math.min(...arr1)>Math.min(...arr2)&&Math.max(...arr1)<Math.max(...arr2)
// }





// function seriesResistance(arr) {
//     let a=arr.reduce((a,b)=>a+b)
//     return a<=1?a+" ohm":a+" ohms"
//     }





// function numberSplit(n) {
// 	let arrnew=[]
// arrnew.push(Math.floor(n/2),Math.ceil(n/2)
// )
// return arrnew
// }




// function filterArray(arr) {
// 	return arr.filter(word => typeof word=="number");
// }




// function sortByLength(arr) {
//     return	arr.sort((a, b) => a.length - b.length)
//     }



//     function sortWord(word) {
//         return word.split("").sort().join("")
//         }



// function totalAmountAdjectives(obj) {
// 	return Object.values(obj).length
// }





// function sumOfCubes(nums) {
// 	return nums==""? 0 :nums.map(a => Math.pow(a,3)).reduce((a,b) => a+b)
// }






// function getOnlyEvens(nums) {
// 	return nums.filter((a,b)=>a%2==0&&b%2==0 )
// }





// function sortByLength(arr) {
// 	return arr.sort((a,b)=>a.length-b.length)
// }





// function calculateDifference(obj, limit) {
//     return	Object.values(obj).reduce((a,b)=>a+b)-limit
//     }







// function getVoteCount(votes) {
// 	return votes.upvotes-votes.downvotes
// }





// function preventChanges(obj) {
//     // write your code here
//       // don't use a return statement
      
      
//     // DON'T CHANGE OR REMOVE THE LINES BELOW
//     obj.noChanges = true;
//     return obj;
//   }






// function volumeOfBox(sizes) {
// 	let sum=1;
// 	for(a in sizes){
// 		sum=sum*sizes[a]
// 	}
// 	return sum
// }





// function fiftyThirtyTwenty(ati) {
// 	let obj={
// 		"Needs": Math.floor(ati/100*50), "Wants": Math.floor(ati/100*30), "Savings":  Math.floor(ati/100*20)
		
// 	}
// 	return obj
// }





// writeyourcodehere =[first,second,third,...other]= [1, 2, 3, 4, 5, 6, 7, 8]






// function determineLever(arr) {
// 	return arr[0]=="e"&&arr[1]=="f"&&arr[2]=="l"?"first class lever":arr[0]=="e"&&arr[1]=="l"&&arr[2]=="f"?"second class lever":"third class lever"
// }