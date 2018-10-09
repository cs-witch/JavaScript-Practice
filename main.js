//Javascript Assignment 1

/*1. Write the function printInt(n) taking one parameter n
 and print all natural numbers from 1 to n in console. */

function printInt(n) {
	for (var i = n; i < 101; i++) {
		console.log(i);
	}
}

printInt(101);


/* 2. Write the function printIntRev(n) taking one parameter n and  print 
all natural numbers in reverse in console (from n to 1).
*/

   function PrintRev(n){
       var i=n;
       while(i>=1){
           
        console.log(i);
        i--;
       }
   }
   PrintRev(15);

/* 3. Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; 
return the string ‘string’ if x is a string; and return boolean if x is a boolean. Otherwise returns -1.
Examples:

       checkInput(5) ====> ‘number’

       checkInput(‘hello’)======> ‘string’

       checkInput(‘5’) ======> ‘string’

       checkInput(true)=====> boolean

       checkInput([1,2,3,4]) =====> -1 */

  function CheckInput(x){

    if(typeof x==='number')
    {
     return "number";
    }
    else if(typeof x==='string'){
     return "string";
    }
    else if(typeof x==='boolean'){
     return "boolean";
    }
    else{
     return -1;

    }
}
        
CheckInput('5');


/* 4. Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num.
        Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)

               simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)

               simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)

                  simpleEvenAdding(1) ======> 0

               simpleEvenAdding(0) =======> 0  
               */
function SimpleEvenAdding(n){
    var sum=0;
    for(var i=1;i<=n;i++){
        if (i%2==0){
            sum=sum+i;
            
        }
    }
    console.log(sum);
}

          
/* 5. Write the function letterCapitalize(str) taking a 
string and capitalize the first letter of each word. 
The given words will be separated by only one space.
        Examples:

                letterCapitalize(“hello world”) ===========> “Hello Word”

letterCapitalize(“you cannot find the answer online”) =====>  “You Cannot Find The Answer Online”

Hint: There is a built-in function in javaScript that 
change string into uppercase. There is also a 
function to separate string into an array of characters. */
function letterCapitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }

    return splitStr.join(' '); 
 }
 
 document.write(letterCapitalize("hi! my name is Andisa"));

/* 6. Write the function simpleReverse(str) taking a string and return the string in reversed order.
        Examples:

                // simpleReverse(‘hello’) ======> ‘olleh’

                // simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’
Hint: Think of how you can loop through a string or array of characters backwards to produce a new string */

function simpleReverse(s){
    return s.split('').reverse().join('');
  }

  document.write(simpleReverse('Andisa Likes JavaScript '));


/* 7. Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the 
maximum number and the minimum number (max - min).
        Examples:

        findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)

        findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)

        findDiff([1, 1, 1, 1, 1]) =======> 0

findDiff([1]) ======> 0;

findDiff([]) =======> 0; */
function findDiff(arr){
    var min=arr[0];
    var max=arr[0];
    
    
    for (var i=0;i<arr.length;i++){
    
        if (arr[i]<min){
            min=arr[i];
    
        }else if(arr[i]>max){
            max=arr[i];
           
        }   
    }
    var diff=max-min;
        console.log(diff);
    }
     var arry=[12,4,8,1,5];
     findDiff(arry);


/* 8. Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
        Example:

                timeConvert(61) ======> 1:1

                timeConvert(63) =======> 1:3

                timeConvert(120)======> 2:0

                timeConvert(59)=======> 0:59

            Hints: Dividing and modulo the number 60.*/
function timeConvert(n){
      
   var m=n%60;
   var h=(n-m)/60;

   console.log(h+':'+m);
   }

   timeConvert(130);

/* 9. Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.
Example:

        findStr(“hi”, “dasdhidasdahidashi”) =======> 3

        findStr(“o”, “daodo”) =======> 2

        findStr(“ha”,”abcde”)=======> 0

        findStr(“h”, “hihelloho”)======> 3 */
function findStr(str,long){
    var n=0;
    for(var i=0;i<=long.length - str.length;i++){
        if (long.slice(i, i+str.length)===str){
            n++;
        }
    }
    return n;
    
}
console.log(findStr("ha","hahahihohahaha"));


/* 10. Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between
them, including the bounds.


Hint: A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number because 128 % 1 ==0, 128 % 2 == 0 and 128 % 8 == 0.
functionself

Examples:

        selfDividingNumbers(1, 22) ========> [1,2,3,4,5,6,7,8,9,11,12,15,22]

        selfDividingNumbers(1, 10) =======> [1,2,3,4,5,6,7,8,9]

selfDividingNumbers(12, 21) =======> [12, 15]*/

function selfDividingNumbers(left, right) {
    var selfDiv = [], result;
    for(left; left < right +1; left++) {
    for(var i=0; i<left.toString().length; i++) {
    if(left % left.toString().charAt(i) === 0 && left.toString().charAt(i) !== 0 ) {
    result = true;
    }
    else {
    result = false;
    break;
    }
    }
    if(result == true)
    selfDiv.push(left);
    }
    return selfDiv;
    }
    
    console.log(selfDividingNumbers(12,21));

/* 11. Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements.  For example:

moveZeros([0,1,0,3,12]) ======> [1,3,12,0,0]

moveZeros([1,2,0,0,2,312,33,0,0]) ======> [1,2,2,312,33,0,0,0,0]

moveZeros([0,0,0]) ======> [0,0,0]

moveZeros([1,2,312,11,2]) =======> [1,2,312,11,2] */
function moveZeros(nums){
    var result=[];
    var counter=0;
    for(var i=0;i<nums.length;i++){

        if(nums[i]===0){
            counter++;

        }else{
            result.push(nums[i]);
        }

    }

    while(counter>0){
        result.push(0);
        counter--;
    }
    return result;

}
console.log(moveZeros([1,3,5,0,6,0,4,0,2,0,5]));

/* 12. Create an average() function that calculates the 
average of an array of numbers.

Examples:

        average([2, 6]) =====> 4

        average([2, 3, 3, 5, 7, 10]) ======> 5

average([7, 1432, 12, 13, 100]) ======> 312.8

average([]) ======> 0

*/

function average(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i];

    }
    return sum/ arr.length;


}
console.log(average([4,6,8,2,5]));
