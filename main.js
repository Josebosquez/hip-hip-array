/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked 
// to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];
for (const item of students){
  console.log(item);
}

console.log("\nChallenge 2\n" )
// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
for (let i = grades.length -1; i > -1; i--) {
  console.log(grades[i])
}

console.log("\nChallenge 3\n" )
// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

for (let i = 0; i < positiveNumbers.length; i++){
    if (positiveNumbers[i] % 2 === 0){
      console.log(positiveNumbers[i])
    }   
}


console.log("\nChallenge 4\n" )
// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING 
//the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
for (let i = 0; i < mixedSignNumbers.length; i++){
if (mixedSignNumbers[i] % 2 === 0){
    console.log(mixedSignNumbers[i])
}
}

console.log("\nChallenge 5\n" )
// Challenge 5
// Remove two values from the beginning and one value from the end of
// the following array, simply by deleting them in the following line.
// Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
symmetricalCapitals.pop(symmetricalCapitals.length -1)
symmetricalCapitals.splice (0, 2)
for (let i = 0; i < symmetricalCapitals.length; i++){
console.log(symmetricalCapitals[i])
}
console.log("\nChallenge 6\n" )
// Challenge 6
// Add a value (your choice!) to the start of the following array and 
//two values (of your choice) to the end simply by adding them in the 
//following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.push(5,5) 
fibonacciNumbers.unshift(5)
for (let i = 0; i < fibonacciNumbers.length; i++){
console.log(fibonacciNumbers[i])
}

console.log("\nChallenge 7\n" )
// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax 
// as the array creation from the previous 6 challenges; that is, every 
// value should be placed within the square brackets.  Now console.log 
// out each value individually.
const arr1 = [0, 1, 2, 3, 4];
for (let i = 0; i < arr1.length; i++){
console.log(arr1[i])
}

console.log("\nChallenge 8\n" )
// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using
// BOTH .push AND .unshift, and then console.log out each value individually.
const arr = [];
arr.push(2, 1, 2);
arr.unshift(0, 0)
for (let i = 0; i < arr.length; i++){
  console.log(arr[i])
}

console.log("\nChallenge 9\n" )
// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 
// and ending at index 10 (INCLUSIVE), logging out each value individually.
for (let i = 0; i < students.length; i++){
  if (i >= 3 && i <= 10){
      console.log(students[i])
  }
}

console.log("\nChallenge 10\n" )
// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the
// array, starting at index 3 and ending at index 10 (INCLUSIVE). This is 
// very similar to string building; create a new array, loop through the old
// one, and put values from the original in the new one. Then log out each 
// value of the copy individually.
const newArr = [];
for (let i = 0; i < students.length; i++){
  if (i >= 3 && i <= 10){
    newArr.push(students[i]);
  }
}

for (let i = 0; i < newArr.length; i++){
  console.log(newArr[i])
}

console.log("\nChallenge 11\n" )
// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and
// ending at index 10 (INCLUSIVE), then log out each value of the copy 
// individually. THEN log out each value of the original array. Notice that the
// original array didn't get any values taken out of it, because `slice` does NOT
// modify the original array.
const newArr1 = students.slice(3, 10);
for (let i = 0; i < newArr1.length; i++){
  console.log(newArr1[i])
}

console.log("\nChallenge 12\n" )
// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using 
// .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. 
// Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 
'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
const newDino = dinosaurs.splice(3, 3);
console.log(newDino)
for (let i = 0; i < dinosaurs.length; i++){
  console.log(dinosaurs[i])
}

console.log("\nChallenge 13\n" )
// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string
// with a '*' string as the "separator". Then console.log out that string.
console.log(newDino.join("*"))


console.log("\nChallenge 14\n" )
// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array.
// .reverse DOES change the original array.
newDino.reverse()
console.log(newDino)

console.log("\nChallenge 15\n" )
// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make 
// (.concat RETURNS an array). Then console.log out each value of that new array 
// individually. Now console.log both the primaries and secondaries arrays, noting
// that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
const third = primaries.concat(secondaries);
console.log(third)
console.log(primaries)
console.log(secondaries)