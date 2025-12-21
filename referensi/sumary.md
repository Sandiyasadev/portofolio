1. Implementasi Arsitektur Hybrid di AstroKarena kamu menggunakan Astro, jangan biarkan kode React tersebut menjadi satu file raksasa. Kita akan memecahnya menggunakan Astro Island Architecture.Static Components: Header, Hero Text, dan Footer harus dirender sebagai HTML murni (Zero JS).Hydrated Components: Bagian seperti Mobile Menu atau Bento Grid yang memiliki interaksi kompleks gunakan direktif client:visible atau client:load.Server-side Logic: Gunakan output: 'hybrid' di astro.config.mjs untuk menangani form kontak atau fetching data dari "The Archive" secara dinamis.

2. Engineering Content: "The Knowledge Grid"Agar pengunjung (terutama CTO atau Tech Lead) terkesan, konten di Bento Grid harus menunjukkan kedalaman teknis. Jangan gunakan teks placeholder. Gunakan skenario nyata:SectionKonteks Engineering yang Harus DitonjolkanAutomation (n8n)"Event-driven architecture: Menghubungkan Webhooks, AI agents, dan Database tanpa bottleneck."Defense in Depth"Hardening Linux Kernel, implementasi Fail2Ban otomatis, dan manajemen SSL via Let's Encrypt di level Docker."Technical Stack"Mengapa Astro + Go? Analisis performa TTFB (Time to First Byte) di bawah 100ms."System MetricsTampilkan grafik uptime asli menggunakan API dari layanan monitoring (seperti UptimeRobot) yang di-fetch via SSR.

3. Micro-Interactions & "Visual Engineering"Desain minimalis butuh detail kecil agar terasa "mahal". Tambahkan elemen berikut:View Transitions API: Gunakan fitur bawaan Astro untuk transisi antar halaman yang mulus seperti aplikasi mobile (SPA feel).Framer Motion (Minimal): Berikan efek reveal pada teks Merriweather saat di-scroll.Custom Cursor: Sebuah titik kecil yang berubah menjadi lingkaran saat menyentuh elemen hover:text-[#003B5C].The "Invisible" Reveal: Gunakan efek masking pada Hero Section; saat kursor bergerak, ia seolah-olah menjadi senter yang mengungkap kode-kode sistem di balik latar belakang gelap

4. Performa: Skor Lighthouse 100Seorang expert tidak boleh punya portofolio yang lambat. Dengan desain ini, kita mengincar:Typography Loading: Gunakan font-display: swap dan hosting font secara lokal di folder /public untuk menghindari Layout Shift.Image Optimization: Gunakan komponen <Image /> dari Astro untuk mengubah background pattern dan asset menjadi format AVIF.Code Splitting: Pastikan Lucide Icons hanya di-import yang digunakan saja (Tree Shaking) agar bundle JS tidak membengkak.

5. Fitur "Easter Egg" untuk DeveloperBerikan kejutan kecil yang hanya diketahui oleh sesama developer:Console Greeting: Saat pengunjung membuka Inspect Element, tampilkan pesan tersembunyi dan link ke file humans.txt.CLI Mode: Tambahkan key listener. Jika user menekan tombol ~, munculkan terminal overlay kecil untuk navigasi website via command line.Struktur Folder yang Disarankan (Astro)Plaintext/src
  /collections
    /manifesto.ts    <-- Type-safety untuk tulisanmu
    /projects.ts
  /components
    /ui              <-- Komponen statis (Astro)
    /interactive     <-- Komponen React (client:visible)
  /layouts
    Layout.astro     <-- Font & Base CSS
  /pages
    index.astro      <-- Main Landing Page
    /api
      contact.ts     <-- SSR Route untuk form
