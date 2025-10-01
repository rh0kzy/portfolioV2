// Project page animations
document.addEventListener('DOMContentLoaded', function() {
    // Add page transition class to body
    document.body.classList.add('page-transition');
    
    // Trigger loaded animation after a small delay
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Animate feature items on scroll
    const featureItems = document.querySelectorAll('.feature-item, .detail-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 150);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    featureItems.forEach(item => {
        observer.observe(item);
    });
    
    // Add smooth back navigation
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add fade out class
            document.body.classList.add('fade-out');
            
            // Navigate back after animation
            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        });
    }
    
    // Add staggered animation to tech tags
    const techTags = document.querySelectorAll('.tech-tag, .tech-badge');
    techTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('tech-tag-animate');
    });
});

// Add CSS for tech tag animations
const style = document.createElement('style');
style.textContent = `
    .tech-tag-animate {
        opacity: 0;
        transform: translateY(20px);
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
