# Michael Portfolio

Website portofolio pribadi berbasis React untuk menampilkan proyek web, pengalaman QA, dan kontak profesional.

## Teknologi

- React
- Vite
- Tailwind CSS

## Fitur

- Struktur komponen React yang lebih mudah dikembangkan
- Styling berbasis Tailwind CSS
- Dark mode dan light mode dengan preferensi tersimpan
- Sticky navigation dengan smooth scroll antar section
- Reveal animation saat section masuk viewport
- Photo slider interaktif dengan auto-play
- Layout responsif untuk desktop dan mobile
- Portfolio AI Assistant dengan endpoint server-side Vercel dan Google Gemini API

## Struktur Folder

- `src/App.jsx` - struktur utama halaman portfolio
- `src/components/PortfolioAssistant.jsx` - UI chat assistant
- `src/data/portfolioKnowledge.js` - sumber informasi assistant
- `src/main.jsx` - entry point React
- `src/styles.css` - seluruh styling aplikasi
- `api/portfolio-chat.js` - serverless endpoint untuk Google Gemini API
- `assets/` - gambar portfolio

## Environment Variables

Buat file `.env.local` untuk development atau tambahkan environment variable di Vercel:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-3.5-flash
```

`GEMINI_API_KEY` wajib ada dan hanya dipakai oleh endpoint server-side. Jangan memakai prefix `VITE_` untuk API key.

Untuk mendapatkan API key:

1. Buka Google AI Studio: https://aistudio.google.com/app/apikey
2. Login dengan akun Google.
3. Buat API key untuk project yang aktif.
4. Simpan key hanya di `.env.local` atau Environment Variables Vercel.

## Menjalankan Project

1. Install dependency:

```bash
npm install
```

2. Jalankan mode development frontend:

```bash
npm run dev
```

3. Jalankan local development dengan endpoint Vercel:

```bash
vercel dev
```

4. Build production:

```bash
npm run build
```

## Deploy ke Vercel

1. Push repository ke GitHub.
2. Import project di Vercel sebagai Vite project.
3. Tambahkan `GEMINI_API_KEY` di Project Settings > Environment Variables.
4. Opsional: tambahkan `GEMINI_MODEL=gemini-3.5-flash`.
5. Deploy. Vercel akan build React app dan menjalankan `api/portfolio-chat.js` sebagai serverless function.

## Verifikasi Chatbot

1. Isi `.env.local` dengan `GEMINI_API_KEY` yang valid.
2. Jalankan `npm run dev`.
3. Buka portfolio, klik tombol `Ask`, lalu kirim `Tell me about Michael.`
4. Respons harus berupa ringkasan tentang Michael berdasarkan `src/data/portfolioKnowledge.js`.
5. Jika gagal, endpoint tetap mengembalikan JSON dengan pesan error yang bermakna.

## Catatan Biaya

- Prompt assistant menggunakan satu knowledge base pendek dan `max_output_tokens` rendah.
- UI hanya mengirim beberapa pesan history terakhir.
- Endpoint membatasi panjang pesan, ukuran request, dan jumlah request per menit.
- Untuk biaya lebih rendah di masa depan, bandingkan harga model Gemini terbaru dan ubah `GEMINI_MODEL` tanpa mengubah client.

## Tentang

Michael Garets Kon - Web Developer & QA Professional.
