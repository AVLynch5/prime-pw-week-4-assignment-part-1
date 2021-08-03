console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('All Powerful Grader'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;// return firstNumber + secondNumber;
}
console.log('The sum is', addNumbers(1,2));//Test with 1 & 2, expected return = 3

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  return num1*num2*num3;
}
console.log('The product is', multiplyThree(1, 2, 3));//Test with 1, 2, and 3, expected return = 6

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
console.log(isPositive(6));//test with number=6
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length == 0){
    return undefined;//Unsure if I should be using the object undefined or the string 'undefined'
  } else {
    return array[array.length-1];
  }
}
console.log('The last item in the array is:', getLast([1, 2, 3, 4, 5]));//test with array [1, 2, 3, 4, 5]. Expected return = 5
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  let x;//Attempting to use a global variable. 'Return' breaks loop & returns value for function.
  for (i=0;i<array.length;i++) {
    if (array[i]==value) {
      x = true;
      break;//We need to determine if a value is in an array. If it's found, there's no need to iterate through every index.
    } else {
      x = false;
    }
  }
  return x;//Before, the function returned true if (array[i]==value) else returned false.
  //However, unless 'value' was the first item in 'array', the function always returned false b/c 'return' broke the for loop.
  //Using a global variable outside the for loop allows us to iterate through each index in array (if necessary).
  //Could 'continue' be used to stay w/in the loop and move to the next iteration?
}
console.log('The value is in the array:', find(5, [2, 5, 1]));// Test to see if 5 is in [2, 5, 1]. Expect true.
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0]==letter) {
    return true;
  } else {
    return false;
  }
}//Strings act like arrays in terms of indexing!
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let x of array) {
    sum += x;
  }
  return sum;
}
console.log('The sum of the numbers in the array is:', sumAll([1, 2, 3, 4]));//Example array [1,2,3,4] should yield sum=10.
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function arrayPos(array) {
  let newArr = [];//Defines a new, empty array
  for (i=0; i<array.length; i++)//Iterates through all indices of the input array
    if (array[i]>0) {
      newArr.push(array[i]);//If an element of the input array is positive, it's added to newArr
    }
  return newArr;
}
console.log('Here is a new array of only positive numbers:', arrayPos([-2, -1, 0, 1, 2, -3]));//Expected output [1, 2]


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
//Triangular Number Sequence (Edabit, medium):
//"The triangular number sequence is generated from a pattern of dots that form a triangle."
//"The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15." So the 1st triangle has 1 dot, the 2nd has 3, the 3rd has 6, etc.
//Design a function to return the number of dots making up the input triangle number.
function triangle(num) {
  let numMinus=num-1;
  //f(1)=1, f(2)=3,f(3)=6, f(4)=10...i.e f(4)=4+f(3), f(3)=3+f(2), f(2)=2+f(1), f(1)=1+f(0). Model: f(n)=n+f(n-1)
  if (numMinus >= 0) {
  //We designate numMinus (aka n-1) as 0 because f(0)=0, our 'base case'
    num+=triangle(numMinus);
  //Here is the part where the function becomes recursive. Starting with an input num(n), we iteratively add
  //numMinus (n-1) until n-1<0, at which point our recursive loop ends. AKA, for an input num=4:
  //f(4)=4+f(3)=4+3+f(2)=4+3+2+f(1)=4+3+2+1+f(0)=4+3+2+1+0=10.
  }
  return num;
}
console.log('Number of dots:', triangle(1));//Example using triangle number = 1. Expected result is 1
console.log('Number of dots:', triangle(6));//Example using triangle number = 6. Expected result is 21
console.log('Number of dots:', triangle(215));//Example using triangle number = 215. Expected result is 23220
