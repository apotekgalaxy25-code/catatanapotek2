# Keuangan Apotek (Android)

Cara membuat file APK tanpa menginstal apa pun di komputer (gratis, lewat GitHub):

1. Buat akun di https://github.com lalu buat repository baru (boleh Private), misalnya `keuangan-apotek`.
2. Ekstrak ZIP ini, lalu unggah SEMUA isinya ke repository tersebut
   (Add file > Upload files). Pastikan folder `.github` ikut terunggah.
   Jika folder tersembunyi tidak terlihat, aktifkan "Show hidden files" di komputer Anda.
3. Buka tab **Actions**. Proses "Build APK" berjalan otomatis (sekitar 5-8 menit).
   Jika tidak berjalan: pilih "Build APK" > **Run workflow**.
4. Setelah centang hijau, buka proses tersebut, lalu unduh **Keuangan-Apotek-APK** di bagian Artifacts (berupa ZIP berisi `app-debug.apk`).
5. Kirim `app-debug.apk` ke ponsel, buka, lalu izinkan "Instal dari sumber tidak dikenal" bila diminta.

Catatan:
- Aplikasi bekerja tanpa internet. Data tersimpan di ponsel.
- Gunakan "Cadangkan data" di tab Catat secara berkala. Data hilang jika aplikasi dihapus.
- Laporan Excel dibuat lewat menu bagikan Android (simpan ke File/Drive atau kirim lewat WhatsApp).
- Ikon aplikasi memakai logo Apotek Galaxy (resources/res).
