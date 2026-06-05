// Konfigurasi Utama Template Pernikahan Digital

export const weddingConfig = {
  // 👰 Informasi Pasangan
  bride: {
    name: 'Siti Nurhaliza',
    nickname: 'Siti',
    initials: 'SN'
  },
  groom: {
    name: 'Reza Rahadian',
    nickname: 'Reza',
    initials: 'RR'
  },

  // 📅 Tanggal & Waktu Acara
  weddingDate: new Date('2024-12-25T15:00:00').getTime(), // Format: YYYY-MM-DD HH:MM:SS
  timezone: 'Asia/Jakarta',

  // 🎨 Warna Tema (Modern Elegant)
  colors: {
    primary: '#D4AF37',      // Gold
    secondary: '#F0E6D2',    // Rose
    accent: '#2D5016',       // Emerald
    light: '#E8B4B8',        // Blush
    dark: '#1a1a1a',         // Dark
    neutral: '#E5E4E2',      // Platinum
  },

  // 🏠 Lokasi Acara
  venue: {
    ceremony: {
      name: 'Grand Ballroom Mewah',
      address: 'Jl. Raja No. 123, Jakarta Selatan',
      maps: 'https://maps.google.com/?q=Grand+Ballroom+Mewah',
      time: '15:00 - 16:30',
      googleMapsEmbed: 'https://www.google.com/maps/embed?pb='
    },
    reception: {
      name: 'Bali Resort & Spa',
      address: 'Jl. Pantai Kuta, Bali',
      maps: 'https://maps.google.com/?q=Bali+Resort',
      time: '18:00 - 23:00'
    }
  },

  // 🎵 Musik Background
  music: {
    url: '/assets/music/wedding-background.mp3',
    volume: 0.3,
    autoPlay: false,
    loop: true,
    title: 'Wedding Background Music'
  },

  // ⏰ Timeline Acara
  timeline: [
    {
      time: '14:00',
      title: 'Pembukaan & Konsultasi',
      description: 'Para tamu tiba dan berkumpul di area lobi',
      icon: 'door-open'
    },
    {
      time: '15:00',
      title: 'Upacara Pernikahan',
      description: 'Prosesi ijab qabul dan pernikahan resmi',
      icon: 'ring'
    },
    {
      time: '16:00',
      title: 'Foto Bersama',
      description: 'Sesi foto keluarga besar',
      icon: 'camera'
    },
    {
      time: '18:00',
      title: 'Resepsi',
      description: 'Makan malam, ucapan & hiburan',
      icon: 'wine-glass-alt'
    },
    {
      time: '20:00',
      title: 'Tari Pengantin',
      description: 'Pertunjukan & tari dari sepasang pengantin',
      icon: 'music'
    },
    {
      time: '22:00',
      title: 'Penutupan',
      description: 'Berkat & terima kasih kepada tamu',
      icon: 'heart'
    }
  ],

  // 🖼️ Galeri Foto Animatif (Versi Animasi SVG)
  gallery: {
    title: 'Momen Indah Kami',
    subtitle: 'Perjalanan cinta dalam animasi digital',
    items: [
      {
        id: 1,
        title: 'Pertama Kali Bertemu',
        animationType: 'hearts-collision',
        colors: ['#D4AF37', '#E8B4B8']
      },
      {
        id: 2,
        title: 'Jatuh Cinta',
        animationType: 'floating-hearts',
        colors: ['#E8B4B8', '#D4AF37']
      },
      {
        id: 3,
        title: 'Lamaran',
        animationType: 'ring-sparkle',
        colors: ['#D4AF37', '#E5E4E2']
      },
      {
        id: 4,
        title: 'Persiapan',
        animationType: 'dress-animation',
        colors: ['#F0E6D2', '#2D5016']
      },
      {
        id: 5,
        title: 'Hari Istimewa',
        animationType: 'couple-dance',
        colors: ['#D4AF37', '#E8B4B8']
      },
      {
        id: 6,
        title: 'Selamanya',
        animationType: 'infinity-loop',
        colors: ['#2D5016', '#D4AF37']
      }
    ]
  },

  // 💬 Pesan Sambutan
  greetings: {
    main: 'Assalamu\'alaikum Warahmatullahi Wabarakatuh',
    subtitle: 'Dengan senang hati kami mengundang Anda untuk merayakan momen istimewa kami',
    description: 'Kami memohon doa dan restu dari Anda untuk pelaksanaan acara pernikahan kami, semoga menjadi hari yang penuh berkah dan kebahagiaan.'
  },

  // 📝 Buku Tamu
  guestBook: {
    enabled: true,
    firebaseConfig: {
      apiKey: 'YOUR_FIREBASE_API_KEY',
      authDomain: 'your-project.firebaseapp.com',
      projectId: 'your-project-id',
      storageBucket: 'your-project.appspot.com',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
      appId: 'YOUR_APP_ID'
    },
    maxChars: 300,
    moderationRequired: true
  },

  // 🎆 Efek Partikel
  particles: {
    enabled: true,
    type: 'confetti', // 'confetti', 'flowers', 'sparkles', 'stars'
    intensity: 'medium', // 'low', 'medium', 'high'
    triggerEvents: ['countdown-complete', 'scroll-to-gallery']
  },

  // 📱 Pengaturan Umum
  settings: {
    language: 'id', // 'id' untuk Indonesia, 'en' untuk English
    darkMode: false,
    animations: true,
    soundEffects: true,
    confetti: true,
    scrollAnimations: true
  },

  // 📞 Kontak & RSVP
  contact: {
    email: 'contact@digitalwedding.com',
    phone: '+62 812 3456 7890',
    whatsapp: 'https://wa.me/62812345678'
  },

  // 🔗 Media Sosial
  social: {
    instagram: 'https://instagram.com/yourprofile',
    facebook: 'https://facebook.com/yourprofile',
    tiktok: 'https://tiktok.com/@yourprofile',
    youtube: 'https://youtube.com/channel/yourprofile'
  }
}

// Ekspor konfigurasi
export default weddingConfig
