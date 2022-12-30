function prime(number) {
  var isPrime = true;
  if (number <= 1) {
    console.log(`Given number ${number} is not prime number`);
  } else {
    for (let i = 2; i < number; i++) {
      if (number % 2 == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(`Given number ${number} is prime number`);
    } else {
      console.log(`Given number ${number} is not prime number`);
    }
  }
}
prime(11);
prime(18);
prime(2);
prime(0);
