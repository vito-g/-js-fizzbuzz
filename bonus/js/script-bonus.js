var array = [];
var numbersString = document.getElementById('output');
for ( var x=1; x <= 100; x++) {

  if ((x % 3 == 0) && (x % 5 != 0)) {
    console.log('Fizz');
    array.push('Fizz');
  }
  if ((x % 3 != 0) && (x % 5 == 0)) {
    console.log('Buzz');
    array.push('Buzz');
  }
  else if ((x % 3 == 0) && (x % 5 == 0)) {
    console.log('FizzBuzz');
    array.push('FizzBuzz');
  }
  else if ((x % 3 != 0) && (x % 5 != 0)){
    console.log(x);
    array.push(x);
  }
}

console.log(array);
