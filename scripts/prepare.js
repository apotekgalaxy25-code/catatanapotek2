// Menyalin library Excel (SheetJS) ke folder www agar aplikasi jalan tanpa internet.
const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'node_modules', 'xlsx', 'dist', 'xlsx.full.min.js');
const dst = path.join(__dirname, '..', 'www', 'xlsx.min.js');
fs.copyFileSync(src, dst);
console.log('xlsx.min.js disalin ke www/');
