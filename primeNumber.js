function prime(number) {
  if (number == 0 || number == 1) {
    console.log(`Given "${number}" is not a prime number`);
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        console.log(`Given "${number}" is not a prime number`);
        break;
      } else {
        console.log(`Given "${number}" is a prime number`);
        break;
      }
    }
  }
}
prime(11);
prime(18);
prime(0);
