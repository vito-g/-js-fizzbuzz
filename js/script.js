for ( var x=1; x <= 100; x++) {
  console.log(x);
  if (x % 3 == 0)  {
    console.log('Fizz');
  }
  if (x % 5 == 0) {
    console.log('Buzz');
  }
  else if ((x % 3 == 0) && (x % 5 == 0)) {
    console.log('FizzBuzz');
  }
}
