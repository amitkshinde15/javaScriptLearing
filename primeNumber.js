function prime(number) {
  var isPrime = true;
  if (number < 0) {
    console.log(`Given number ${number} is not valid number`);
  } else if (number > 1) {
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
  } else {
    console.log(`given number ${number} is neither prime nor composite number`);
  }
}
prime(11);
prime(18);
prime(2);
prime(0);
prime(-1);
