For: Roman Numerals

Test: "It should return "I" when the input number is 1"
Code:
function romanNumeral(input) {
  if (input === 1) {
    return "I"
  }
  return false
}
romanNumeral(1)
Expected Return: "I"
````````
````````
Test: "It should return "V" when the input number is 5"
Code:
function romanNumeral(input) {
  if (input === 1) {
    return "I"
  } else if (input === 5){
    return "V"
  }
  return false
}
romanNumeral(5)
Expected Result :"V"
`````
`````
Test:If input number is "2" the output is "II"
Code:
function ones(input) {
const ones = "I" ;
 return ones.repeat(input);
}
ones(2);
Expected Result: "II"
`````
`````
Test: If number is "4" the output is "IV"
Code:
function ones(input) {
const ones = "I"
if (input <= 3) {
  return ones.repeat(input);
}
}




Co-authored-by: Chynna Lew <chynnalew@yahoo.com>
Co-authored-by: Kevin Funez <kevin.funez315@gmail.com>


have a const for roman numerals
convert values into roman numerals
user should only be able to put in numbers
convert numbered string into integers
if number has (x) indexes, it will point to appropriate function

2305=input
functionCount = "thhis function determins how many indexes are in the number"
if there are 3 indexes, it calls function1000 and passes the number through that function
if there are 2 index, calls function100
if 1 calls function10
if 0 calls function1

function1000 = "this function finds out how many times 1000 goes into the nubmer evenly and shows us the remainder. 2 remainder of 305
  converts the "2" to the letter M and repeats it 2x
  then takes the remainder and pushes it through functionCount.

  is number >=500?
  if true /500
  if false /100
  
  2305
  loop backwards:
  index.length-1 >=5 return v 
  else, v + index%5
  if index%5 === 0 ignore
  if index% > 0 concat( "I" repeated )
