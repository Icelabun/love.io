// Create stars in the background
function createStars() {
    const stars = document.querySelector('.stars');
    const numberOfStars = 200;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random twinkle animation
        star.style.animation = `twinkle ${Math.random() * 3 + 1}s infinite ${Math.random() * 2}s`;
        
        stars.appendChild(star);
    }
}

// Create floating hearts with better animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = ['❤️', '💖', '💝', '💕', '💗'][Math.floor(Math.random() * 5)];
    
    const x = Math.random() * window.innerWidth;
    const size = Math.random() * 30 + 20;
    const duration = Math.random() * 2 + 3;
    const sway = Math.random() * 50 - 25;
    
    heart.style.left = `${x}px`;
    heart.style.fontSize = `${size}px`;
    heart.style.animation = `float ${duration}s ease-in-out infinite`;
    heart.style.transform = `translateX(${sway}px)`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Enhanced sparkle effect
function createSparkle(e) {
    const colors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb'];
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const size = Math.random() * 10 + 5;
        const angle = Math.random() * 360;
        const distance = Math.random() * 50 + 20;
        
        sparkle.style.left = `${e.pageX}px`;
        sparkle.style.top = `${e.pageY}px`;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.transform = `rotate(${angle}deg) translate(${distance}px)`;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

// Interactive text effects
function addTextInteractivity() {
    const container = document.querySelector('.container');
    const paragraphs = container.querySelectorAll('p');
    
    paragraphs.forEach(p => {
        p.addEventListener('mouseover', () => {
            p.style.transform = 'scale(1.05)';
            createSparkle({ pageX: p.offsetLeft, pageY: p.offsetTop });
        });
        
        p.addEventListener('mouseout', () => {
            p.style.transform = 'scale(1)';
        });
    });
}

// Add hover effect to title
function addTitleEffect() {
    const title = document.querySelector('h1');
    title.addEventListener('mouseover', (e) => {
        createSparkle(e);
        title.style.transform = 'scale(1.1) rotate(2deg)';
    });
    
    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Romantic text variations
const romanticTexts = [
    {
        title: "My Eternal Love ❤️",
        paragraphs: [
            "In the symphony of my heart, every beat whispers your name. Your love is the melody that makes my soul dance with joy.",
            "Like stars that paint the night sky with their brilliance, you illuminate my world with your boundless love and radiant spirit.",
            "Every sunrise reminds me of the warmth you bring to my life, and every sunset speaks of the beauty I find in your eyes.",
            "Forever and Always, My Love ✨"
        ]
    },
    {
        title: "My Dearest Love 💖",
        paragraphs: [
            "Time stands still when I'm with you, as if the universe itself pauses to witness our perfect love story unfold.",
            "Your love is my greatest treasure, a gift more precious than all the diamonds in the world combined.",
            "In your embrace, I've found my home, my peace, and my forever. You are my dream come true.",
            "Eternally Yours, My Heart 💫"
        ]
    },
    {
        title: "To My Soulmate 💝",
        paragraphs: [
            "Like a poet's finest verse, your love has written the most beautiful chapters in the story of my life.",
            "In the garden of love, you are my most cherished flower, blooming more beautifully with each passing day.",
            "Your love is the magic that transforms ordinary moments into extraordinary memories.",
            "With Endless Love and Devotion 🌟"
        ]
    }
];

// Function to change letter content
function changeLetter() {
    const letterContent = document.getElementById('letter-content');
    const title = document.querySelector('h1');
    const randomText = romanticTexts[Math.floor(Math.random() * romanticTexts.length)];
    
    // Add fade transition class
    letterContent.classList.add('fade-transition');
    title.classList.add('fade-transition');
    
    // Create sparkles around the button
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const button = document.querySelector('.romantic-button');
            const rect = button.getBoundingClientRect();
            const x = rect.left + Math.random() * rect.width;
            const y = rect.top + Math.random() * rect.height;
            createSparkle({ pageX: x, pageY: y });
        }, i * 100);
    }
    
    // Update content after fade out
    setTimeout(() => {
        title.textContent = randomText.title;
        const paragraphs = letterContent.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
            if (index < randomText.paragraphs.length) {
                p.textContent = randomText.paragraphs[index];
                if (index === randomText.paragraphs.length - 1) {
                    p.className = 'special-text';
                } else {
                    p.className = '';
                }
            }
        });
        
        // Remove transition class
        letterContent.classList.remove('fade-transition');
        title.classList.remove('fade-transition');
    }, 500);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    setInterval(createHeart, 800);
    addTextInteractivity();
    addTitleEffect();
    document.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.1) {
            createSparkle(e);
        }
    });
    
    // Add click effect
    document.addEventListener('click', (e) => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createSparkle(e);
            }, i * 100);
        }
    });
    
    // Add button click handler
    const romanticButton = document.querySelector('.romantic-button');
    romanticButton.addEventListener('click', changeLetter);
});
