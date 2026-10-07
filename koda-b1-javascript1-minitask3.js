const pilihan = 'fizzbuzz'; // fizzbuzz, odd-even, multiplication

switch (pilihan) {
  case 'fizzbuzz':
    for (let i = 1; i <= 20; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        console.log('FizzBuzz');
      } else {
        console.log(i);
      }
    }

    break;
  case 'odd-even':
    for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
        console.log(`${i}. Genap`);
      } else {
        console.log(`${i}. Ganjil`);
      }
    }

    break;
  case 'multiplication':
    for (let i = 1; i <= 10; i++) {
      console.log(`1 + ${i} = ${1 + i}`);
    }

    break;
  default:
    console.log('Pilian tidak ditemukan');
    break;
}
