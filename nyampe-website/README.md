# NYAMPE Website

Homepage responsif untuk konsep NYAMPE, panduan perjalanan perkotaan yang membantu pengguna baru memahami opsi perjalanan di Medan.

## Fitur
- Homepage mobile-first mengikuti referensi desain NYAMPE.
- Form lokasi awal dan tujuan dengan contoh saran lokasi.
- Tombol tukar lokasi dan kartu lokasi populer yang dapat mengisi form.
- Hasil rekomendasi rute simulasi.
- Layout responsif, label form, focus state keyboard, dan alt text.

## Teknologi
HTML5, CSS3, vanilla JavaScript, dan Plus Jakarta Sans dari Google Fonts (perlu koneksi internet, dengan fallback font).

## Menjalankan secara lokal
1. Ekstrak folder project.
2. Buka `index.html` di browser, atau gunakan ekstensi Live Server di VS Code.
3. Pastikan folder `assets/images` tetap berada di lokasi yang sama dengan `index.html`.

Tidak diperlukan instalasi package atau proses build.

## Mengganti logo dan foto
Ganti file di `assets/images/` dengan aset baru menggunakan nama yang sama, atau ubah path `src` yang sesuai di `index.html`. Pertahankan rasio asli logo.

## Data simulasi dan batasan
Biaya, waktu, tahapan, dan transportasi adalah data contoh untuk demonstrasi UI. Website belum menggunakan GPS, peta real-time, API transportasi, backend, atau perhitungan rute nyata. Lokasi pada datalist merupakan contoh, bukan database lokasi terverifikasi. Verifikasi rute dan tarif sebelum digunakan untuk perjalanan nyata.

## Status
Prototype homepage front-end untuk pengujian visual dan interaksi awal. Belum terhubung dengan layanan transportasi real-time.
