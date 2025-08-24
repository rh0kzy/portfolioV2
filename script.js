// GitHub-inspired Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Repository search functionality
    const searchInput = document.querySelector('.search-input');
    const filterSelect = document.querySelector('.filter-select');
    const repoCards = document.querySelectorAll('.repo-card');

    function filterRepositories() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedLanguage = filterSelect.value;

        repoCards.forEach(card => {
            const repoName = card.querySelector('.repo-name').textContent.toLowerCase();
            const repoDescription = card.querySelector('.repo-description').textContent.toLowerCase();
            const language = card.querySelector('.language').textContent.trim();

            const matchesSearch = repoName.includes(searchTerm) || repoDescription.includes(searchTerm);
            const matchesLanguage = selectedLanguage === 'All' || language === selectedLanguage;

            if (matchesSearch && matchesLanguage) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.3s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterRepositories);
    }
    
    if (filterSelect) {
        filterSelect.addEventListener('change', filterRepositories);
    }

    // Generate GitHub contribution graph
    function generateContributionGraph() {
        const graphGrid = document.querySelector('.graph-grid');
        if (!graphGrid) return;

        // Clear existing content
        graphGrid.innerHTML = '';

        // Generate 365 days of contribution data
        const today = new Date();
        const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        
        for (let i = 0; i < 365; i++) {
            const day = document.createElement('div');
            day.classList.add('contribution-day');
            
            // Generate random contribution level (0-4)
            const level = Math.floor(Math.random() * 5);
            day.setAttribute('data-level', level);
            
            // Add tooltip with date
            const date = new Date(oneYearAgo);
            date.setDate(date.getDate() + i);
            day.title = `${level} contributions on ${date.toDateString()}`;
            
            graphGrid.appendChild(day);
        }
    }

    generateContributionGraph();

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show success message (in a real implementation, you'd send this to a server)
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });
    }

    // Typing animation for profile bio
    function typeWriter(element, text, speed = 50) {
        if (!element) return;
        
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Animate numbers in stats
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const finalValue = stat.textContent;
            const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
            if (isNaN(numericValue)) return;
            
            let currentValue = 0;
            const increment = numericValue / 50;
            const suffix = finalValue.replace(/[\d.]/g, '');
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                
                stat.textContent = Math.floor(currentValue) + suffix;
            }, 30);
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger specific animations based on section
                if (entry.target.id === 'home') {
                    setTimeout(() => animateStats(), 500);
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Add loading animation for cards
    function addCardAnimations() {
        const cards = document.querySelectorAll('.repo-card, .project-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Initialize card animations when page loads
    setTimeout(addCardAnimations, 500);

    // Theme toggle functionality (bonus feature)
    function createThemeToggle() {
        const header = document.querySelector('.header .container .nav');
        if (!header) return;
        
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.classList.add('theme-toggle');
        themeToggle.style.cssText = `
            background: none;
            border: 1px solid var(--border-default);
            color: var(--text-secondary);
            padding: 8px;
            border-radius: var(--border-radius);
            cursor: pointer;
            margin-left: var(--space-2);
        `;
        
        // Insert before nav-actions
        const navActions = document.querySelector('.nav-actions');
        if (navActions) {
            navActions.parentNode.insertBefore(themeToggle, navActions);
        }
    }

    // Add some interactive hover effects
    function addInteractiveEffects() {
        // Add ripple effect to buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .nav-link.active {
            color: var(--text-primary);
            background-color: var(--bg-tertiary);
        }
        
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        .theme-toggle:hover {
            background-color: var(--bg-tertiary);
            color: var(--text-primary);
        }
    `;
    document.head.appendChild(style);

    // Initialize interactive effects
    addInteractiveEffects();

    // Scroll to top functionality
    function createScrollToTop() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollBtn.classList.add('scroll-to-top');
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--accent-emphasis);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: var(--shadow-medium);
        `;
        
        document.body.appendChild(scrollBtn);
        
        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        });
        
        // Smooth scroll to top
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    createScrollToTop();

    // Add some Easter eggs
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join('') === konamiSequence.join('')) {
            // Easter egg: Add some fun animation
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
        }
    });
    
    // Add rainbow animation CSS
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);

    console.log('🚀 Portfolio loaded successfully!');
    console.log('💡 Tip: Try the Konami Code for a surprise!');
});

// Utility functions
const utils = {
    // Format number with K/M suffix
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    },
    
    // Debounce function for search
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Export utils for potential use in other scripts
window.portfolioUtils = utils;
