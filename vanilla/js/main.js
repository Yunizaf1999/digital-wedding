// ==========================================
// Konfigurasi & Inisialisasi
// ==========================================

const config = {
    weddingDate: new Date('2024-12-25T15:00:00').getTime(),
    bride: 'Siti Nurhaliza',
    groom: 'Reza Rahadian',
    theme: {
        gold: '#D4AF37',
        rose: '#F0E6D2',
        emerald: '#2D5016',
        blush: '#E8B4B8',
    },
    timeline: [
        { time: '14:00', title: 'Pembukaan & Konsultasi', description: 'Para tamu tiba dan berkumpul di area lobi' },
        { time: '15:00', title: 'Upacara Pernikahan', description: 'Prosesi ijab qabul dan pernikahan resmi' },
        { time: '16:00', title: 'Foto Bersama', description: 'Sesi foto keluarga besar' },
        { time: '18:00', title: 'Resepsi', description: 'Makan malam, ucapan & hiburan' },
        { time: '20:00', title: 'Tari Pengantin', description: 'Pertunjukan & tari dari sepasang pengantin' },
        { time: '22:00', title: 'Penutupan', description: 'Berkat & terima kasih kepada tamu' }
    ],
    gallery: [
        { id: 1, title: 'Pertama Kali Bertemu', type: 'hearts-collision' },
        { id: 2, title: 'Jatuh Cinta', type: 'floating-hearts' },
        { id: 3, title: 'Lamaran', type: 'ring-sparkle' },
        { id: 4, title: 'Persiapan', type: 'dress-animation' },
        { id: 5, title: 'Hari Istimewa', type: 'couple-dance' },
        { id: 6, title: 'Selamanya', type: 'infinity-loop' }
    ]
};

// ==========================================
// COUNTDOWN TIMER
// ==========================================

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = config.weddingDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        document.querySelector('.countdown-section').innerHTML = '<h2 class="countdown-title" style="color: #D4AF37; padding: 40px;">🎉 Hari Istimewa Telah Tiba! 🎉</h2>';
    }
}

// Update countdown setiap detik
setInterval(updateCountdown, 1000);
updateCountdown();

// ==========================================
// GALLERY ANIMATIONS
// ==========================================

function createGalleryCards() {
    const gallery = document.getElementById('gallery-grid');
    config.gallery.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <div class="animation-container">
                ${createSVGAnimation(item.type)}
            </div>
            <div class="gallery-info">
                <div class="gallery-title">${item.title}</div>
            </div>
        `;
        gallery.appendChild(card);
    });
}

function createSVGAnimation(type) {
    const animations = {
        'hearts-collision': `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <style>
                        @keyframes heartBounce {
                            0%, 100% { transform: translate(0, 0); }
                            50% { transform: translate(20px, -20px); }
                        }
                        @keyframes heartBounce2 {
                            0%, 100% { transform: translate(0, 0); }
                            50% { transform: translate(-20px, -20px); }
                        }
                        .heart1 { animation: heartBounce 2s ease-in-out infinite; }
                        .heart2 { animation: heartBounce2 2s ease-in-out infinite; }
                    </style>
                </defs>
                <path class="heart1" d="M100 180 Q50 140 30 100 Q10 70 30 50 Q50 30 70 50 L100 80 L130 50 Q150 30 170 50 Q190 70 170 100 Q150 140 100 180" fill="#E8B4B8" opacity="0.9"/>
                <path class="heart2" d="M100 180 Q50 140 30 100 Q10 70 30 50 Q50 30 70 50 L100 80 L130 50 Q150 30 170 50 Q190 70 170 100 Q150 140 100 180" fill="#D4AF37" opacity="0.7" transform="translate(5, 5)"/>
            </svg>
        `,
        'floating-hearts': `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <style>
                        @keyframes float { 0%, 100% { transform: translateY(0) rotateZ(0deg); } 50% { transform: translateY(-15px) rotateZ(5deg); } }
                        .heart { animation: float 3s ease-in-out infinite; }
                    </style>
                </defs>
                <path class="heart" d="M100 160 Q50 120 30 80 Q10 50 30 30 Q50 10 70 30 L100 60 L130 30 Q150 10 170 30 Q190 50 170 80 Q150 120 100 160" fill="#E8B4B8" opacity="0.8"/>
                <circle cx="60" cy="80" r="8" fill="#D4AF37" opacity="0.6" style="animation: float 2s ease-in-out infinite;"/>
                <circle cx="140" cy="100" r="6" fill="#D4AF37" opacity="0.5" style="animation: float 2.5s ease-in-out infinite;"/>
            </svg>
        `,
        'ring-sparkle': `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <style>
                        @keyframes spin { 0% { transform: rotateZ(0deg); } 100% { transform: rotateZ(360deg); } }
                        @keyframes sparkle { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
                        .ring { animation: spin 4s linear infinite; }
                        .sparkle { animation: sparkle 1s ease-in-out infinite; }
                    </style>
                </defs>
                <circle class="ring" cx="100" cy="100" r="50" fill="none" stroke="#D4AF37" stroke-width="8"/>
                <circle cx="100" cy="100" r="35" fill="none" stroke="#E8B4B8" stroke-width="4" opacity="0.6"/>
                <circle cx="100" cy="50" r="4" fill="#D4AF37" class="sparkle"/>
                <circle cx="150" cy="100" r="4" fill="#D4AF37" class="sparkle" style="animation-delay: 0.3s;"/>
                <circle cx="100" cy="150" r="4" fill="#D4AF37" class="sparkle" style="animation-delay: 0.6s;"/>
            </svg>
        `,
        'dress-animation': `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <style>
                        @keyframes sway { 0%, 100% { transform: translateX(0) skewX(0deg); } 50% { transform: translateX(10px) skewX(2deg); } }
                        .dress { animation: sway 2s ease-in-out infinite; }
                    </style>
                </defs>
                <circle cx="100" cy="60" r="20" fill="#D4AF37"/>
                <path class="dress" d="M70 80 L70 150 Q70 170 100 170 Q130 170 130 150 L130 80 Q115 75 100 75 Q85 75 70 80" fill="#F0E6D2" stroke="#E8B4B8" stroke-width="2"/>
                <circle cx="90" cy="90" r="5" fill="#E8B4B8"/>
                <circle cx="110" cy="90" r="5" fill="#E8B4B8"/>
            </svg>
        `,
        'couple-dance': `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <style>
                        @keyframes danceLeft { 0%, 100% { transform: translateX(0) rotateZ(-5deg); } 50% { transform: translateX(-15px) rotateZ(5deg); } }
                        @keyframes danceRight { 0%, 100% { transform: translateX(0) rotateZ(5deg); } 50% { transform: translateX(15px) rotateZ(-5deg); } }
                        .dancer1 { animation: danceLeft 2s ease-in-out infinite; }
                        .dancer2 { animation: danceRight 2s ease-in-out infinite; }
                    </style>
                </defs>
                <circle class="dancer1" cx="60" cy="60" r="15" fill="#D4AF37"/>
                <path class="dancer1" d="M45 80 L60 110 M45 80 L50 100 M75 80 L70 100" stroke="#E8B4B8" stroke-width="3" fill="none"/>
                <circle class="dancer2" cx="140" cy="60" r="15" fill="#E8B4B8"/>
                <path class="dancer2" d="M125 80 L140 110 M155 80 L150 100 M125 80 L130 100" stroke="#D4AF37" stroke-width="3" fill="none"/>
            </svg>
        `,
        'infinity-loop': `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <style>
                        @keyframes traceInfinity {
                            0% { stroke-dashoffset: 600; }
                            100% { stroke-dashoffset: 0; }
                        }
                        .infinity { animation: traceInfinity 3s ease-in-out infinite; }
                    </style>
                </defs>
                <path class="infinity" d="M50 100 C30 60, 30 60, 100 60 C170 60, 170 60, 150 100 C130 140, 130 140, 60 140 C-10 140, -10 140, 50 100" 
                      fill="none" stroke="#D4AF37" stroke-width="4" stroke-linecap="round" stroke-dasharray="600"/>
                <circle cx="100" cy="100" r="8" fill="#E8B4B8" style="animation: traceInfinity 3s ease-in-out infinite;"/>
            </svg>
        `
    };
    return animations[type] || animations['floating-hearts'];
}

createGalleryCards();

// ==========================================
// TIMELINE
// ==========================================

function createTimeline() {
    const timelineContent = document.getElementById('timeline-content');
    config.timeline.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.style.animationDelay = `${index * 0.1}s`;
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-time">${event.time}</div>
                <div class="timeline-title">${event.title}</div>
                <div class="timeline-description">${event.description}</div>
            </div>
        `;
        timelineContent.appendChild(item);
    });
}

createTimeline();

// ==========================================
// GUEST BOOK
// ==========================================

const guestBook = [];

document.getElementById('guestbook-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        const entry = {
            name,
            message,
            date: new Date().toLocaleDateString('id-ID')
        };

        guestBook.unshift(entry);
        localStorage.setItem('guestBook', JSON.stringify(guestBook));

        renderGuestBook();
        document.getElementById('guestbook-form').reset();

        // Notifikasi
        alert('Terima kasih atas ucapan Anda! 💝');
    }
});

function renderGuestBook() {
    const list = document.getElementById('guestbook-list');
    list.innerHTML = '';

    const saved = localStorage.getItem('guestBook');
    const guests = saved ? JSON.parse(saved) : [];

    guests.forEach((guest, index) => {
        const card = document.createElement('div');
        card.className = 'guestbook-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="guestbook-name">👤 ${guest.name}</div>
            <div class="guestbook-message">"${guest.message}"</div>
            <div class="guestbook-date">${guest.date}</div>
        `;
        list.appendChild(card);
    });
}

renderGuestBook();

// ==========================================
// MUSIK CONTROL
// ==========================================

const audio = new Audio('/assets/music/wedding-background.mp3');
audio.volume = 0.3;
audio.loop = true;

const musicControl = document.getElementById('music-control');
let isPlaying = false;

musicControl.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicControl.classList.remove('playing');
        isPlaying = false;
    } else {
        audio.play();
        musicControl.classList.add('playing');
        isPlaying = true;
    }
});

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.8s ease-out';
        }
    });
}, observerOptions);

document.querySelectorAll('.gallery-card, .timeline-item, .guestbook-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==========================================
// PARTICLE EFFECTS
// ==========================================

function createParticles(event) {
    if (Math.random() > 0.3) return;

    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.textContent = ['🎉', '💝', '✨', '🌹', '💍'][Math.floor(Math.random() * 5)];
    particle.style.left = event.clientX + 'px';
    particle.style.top = event.clientY + 'px';
    particle.style.setProperty('--tx', (Math.random() - 0.5) * 100 + 'px');

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 3000);
}

document.addEventListener('click', createParticles);

// ==========================================
// SCROLL INDICATORS
// ==========================================

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrolled / docHeight) * 100;

    // Update page background opacity berdasarkan scroll
    if (scrollPercent > 50) {
        document.body.style.background = 'linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%)';
    } else {
        document.body.style.background = 'linear-gradient(135deg, #ffffff 0%, #F0E6D2 100%)';
    }
});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('🎊 Digital Wedding Template Loaded Successfully! 🎊');
