// Program hitung luas dan keliling lingkaran
const r = 7;
const phi = 3.14;
const isLuas = false;

if (isLuas) {
  const luas = phi * r * r;
  console.log(`Hasil luas lingkaran = ${luas}`);
} else {
  const keliling = 2 * phi * r;
  console.log(`Hasil keliling lingkaran = ${keliling}`);
}
