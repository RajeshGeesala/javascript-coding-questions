// Reverse A String ;
const normalString = "Normal String"
console.log(normalString)
// method -1
function reverseString() {
    let reversed = ""
    for (let i = normalString.length - 1; i >= 0; i--) {
        reversed = reversed + normalString[i]

    }
    return reversed
}

console.log(reverseString())
// method 2 ;
// inbuilt js methods ;
const reveredString = normalString.split("").reverse().join("");
console.log(reveredString);

//return longest word in the sentence ;

const sentence = "HI I AM RAJESH GEESALA" ;

let arrayWithWOrds = sentence.split(" ") ;
console.log(arrayWithWOrds) ;
let longestWord = ""
for ( i = 0 ; i < arrayWithWOrds.length ; i++) {
   if (arrayWithWOrds[i].length > longestWord.length){
    longestWord = arrayWithWOrds[i]
   }
}

console.log(longestWord)  ;;

 /// write a function and check wether strings are anagrams or not ;
 
 function anagrams (string1, string2) {
    let stringA = string1.split("").sort().join()
    let stringB = string2.split("").sort().join() ;
    return stringA == stringB
 }

 console.log(anagrams("listen" , "silent")) ;

 // write a function and check wether string is palindrome or not ;

function checkingPalindrome ( string1 ) {
  const isPalindrome = string1.split("").reverse().join("")
  console.log(isPalindrome)
  return isPalindrome === string1
}
console.log(checkingPalindrome("rotor" )) ;


function isAnagram2 (string1 ,string2) {

  const st1 =  string1.split("").sort().join("") ;
  console.log(st1)
  const st2 =  string2.split("").sort().join("")  ;
  console.log(st2)
  return st1 == st2
} ;

console.log(isAnagram2("They see" , "The eyes")) ;

const eye = "eye" ;
const nose  = "nose" ;


//write function find the longest word in an the sentence ;

let sent = "this is the function for longestest word" ;

function longestWord2 (sent) {
   let s = sent.split(" ") ;
   console.log(s)
   let longestWord = ""
   for ( i = 0 ; i < s.length ; i++) {
     if ( longestWord.length <  s[i].length   ){
        longestWord = s[i] ; 
     }
    
   }
  return longestWord ;
} ;

console.log(longestWord2( "this is the function for longest word"))



























