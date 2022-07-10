// First Factorial
/*Have the function FirstFactorial(num) take the num parameter 
being passed and return the factorial of it. 
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. 
For the test cases, the range will be between 1 and 18 and the input will always be an integer.*/

function FirstFactorial(num) { 

    // code goes here  
    let result=1;
    for(let x = 1;x<=num;x++){
      result*=x;
    } 
    return result; 
  
  }
     
  // keep this function call here 
  console.log(FirstFactorial(readline()));


  /*Run Length
Have the function RunLength(str) take the str parameter being passed 
and return a compressed version of the string using the Run-length encoding algorithm. 
This algorithm works by taking the occurrence of each repeating character and outputting 
that number along with a single character of the repeating sequence. 
For example: "wwwggopp" would return 3w2g1o2p. 
The string will not contain any numbers, punctuation, or symbols. */

// Input: "aabbcde"
// Output: 2a2b1c1d1e

function RunLength(str) { 

    // code goes here 
    let count={};

    for (let x=0;x<str.length;x++){
        let keys=Object.keys(count);
        if(keys.includes(str[x])){
            let key=str[x];
            count[key]+=1;
        }else{
            let key=str[x];
            count[key]=1;
        }
    }
    let keys=Object.keys(count);
    let result="";
    keys.forEach(key=>{
        result+=count[key].toString()+key;
    })
    return result;
  
  }
     
  // keep this function call here 
  console.log(RunLength(readline()));