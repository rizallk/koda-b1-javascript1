## Flowchart Luas dan Keliling Lingkaran

```mermaid
flowchart TD
  start((Start)) -->

  pilihan[/Masukkan pilihan/] -->

  if1{Hitung luas atau keliling lingkaran?}
  if1 --> |Ya| if2{Hitung luas?}
  if2 --> |Ya| 5[Luas = 3,14 * r * r]
  if2 --> |Tidak| 6[Keliling = 2 * 3,14 * r]

  if1 --> |Tidak| lp[Luas persegi = s * s]
  lp --> printLp[/Tampilkan hasil luas persegi/]

  5 --> 7[/Tampilkan Hasil Luas/]
  6 --> 8[/Tampilkan Hasil Keliling/]

  7 --> finish(((End)))
  8 --> finish(((End)))
  printLp --> finish(((End)))
```
