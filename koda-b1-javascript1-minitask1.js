// Program hitung luas, keliling lingkaran dan luas persegi

const pilihan = 'luas-lingkaran'; // luas-lingkaran, keliling-lingkaran, luas-persegi

if (pilihan === 'luas-lingkaran' || pilihan === 'keliling-lingkaran') {
  const r = 7; // jari-jari
  const phi = 3.14;

  if (pilihan === 'luas-lingkaran') {
    const luasLingkaran = phi * r * r;
    console.log(`Hasil luas lingkaran = ${luasLingkaran}`);
  } else if (pilihan === 'keliling-lingkaran') {
    const keliling = 2 * phi * r;
    console.log(`Hasil keliling lingkaran = ${keliling}`);
  } else {
    console.log('Pilihan tidak ditemukan');
  }
} else if (pilihan === 'luas-persegi') {
  const s = 6; // sisi

  const luasPersegi = s * s;
  console.log(`Hasil luas persegi = ${luasPersegi}`);
} else {
  console.log('Pilihan tidak ditemukan');
}
