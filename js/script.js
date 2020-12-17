for ( var x=1; x <= 100; x++) {

  if ((x % 3 == 0) && (x % 5 != 0)) {
    console.log('Fizz');
  }
  if ((x % 3 != 0) && (x % 5 == 0)) {
    console.log('Buzz');
  }
  else if ((x % 3 == 0) && (x % 5 == 0)) {
    console.log('FizzBuzz');
  }
  else if ((x % 3 != 0) && (x % 5 != 0)){
    console.log(x);
  }

}


// MEGLIO così:

// for (var i = 1; i <= 100; i++) {
//   var x3 = i % 3 == 0;
//   var x5 = i % 5 == 0;
//   console.log(x3 ? x5 ? "FizzBuzz" : "Fizz" : x5 ? "Buzz" : i);
// }
