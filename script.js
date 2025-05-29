// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Menu item hover effects
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Create floating particles and steam effects
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);
}

function createSteam() {
    const steam = document.createElement('div');
    steam.className = 'steam';
    steam.style.left = Math.random() * 100 + 'vw';
    steam.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(steam);

    setTimeout(() => {
        steam.remove();
    }, 5000);
}

// Generate particles and steam periodically
setInterval(createParticle, 1500);
setInterval(createSteam, 3000);

// Add some initial effects
for (let i = 0; i < 3; i++) {
    setTimeout(createParticle, i * 500);
    setTimeout(createSteam, i * 1000);
}

// Add click effects to CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
            `;

    this.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);