// Project data extracted from the existing Flutter app
const projects = [
    {
        title: "BMW Online",
        description: "Automotive service application providing comprehensive BMW vehicle management and service booking solutions.",
        image: "assets/images/bmwonlinecover.png",
        tags: ["Mobile App", "Automotive", "Service Booking"]
    },
    {
        title: "Coiny",
        description: "Cryptocurrency tracking and portfolio management application with real-time market data and analytics.",
        image: "assets/images/coinycover.png",
        tags: ["Fintech", "Cryptocurrency", "Portfolio Management"]
    },
    {
        title: "Coiny Pro",
        description: "Advanced cryptocurrency trading platform with professional-grade tools and advanced market analysis features.",
        image: "assets/images/coinyprocover.png",
        tags: ["Fintech", "Trading Platform", "Analytics"]
    },
    {
        title: "Colendi",
        description: "Digital identity and credit scoring platform leveraging blockchain technology for secure financial services.",
        image: "assets/images/colendicover.png",
        tags: ["Blockchain", "Credit Scoring", "Digital Identity"]
    },
    {
        title: "Doctor Turkey",
        description: "Healthcare platform connecting patients with medical professionals, featuring appointment booking and telemedicine.",
        image: "assets/images/doctorturkeycover.png",
        tags: ["Healthcare", "Telemedicine", "Appointment Booking"]
    },
    {
        title: "Falbella",
        description: "E-commerce platform with integrated shopping experience, inventory management, and customer service features.",
        image: "assets/images/falbellacover.png",
        tags: ["E-commerce", "Retail", "Shopping Platform"]
    },
    {
        title: "JetFix",
        description: "On-demand repair and maintenance service application connecting customers with skilled technicians.",
        image: "assets/images/jetfixcover.png",
        tags: ["On-demand Service", "Maintenance", "Booking Platform"]
    },
    {
        title: "Mall of the Emirates",
        description: "Shopping mall mobile application featuring store directory, promotions, and interactive mall navigation.",
        image: "assets/images/malloftheemiratescover.png",
        tags: ["Retail", "Navigation", "Shopping Mall"]
    },
    {
        title: "MoneyPay",
        description: "Digital payment solution offering secure money transfers, bill payments, and financial management tools.",
        image: "assets/images/moneypaycover.png",
        tags: ["Fintech", "Digital Payments", "Money Transfer"]
    },
    {
        title: "Oldubil",
        description: "Educational platform providing interactive learning experiences and progress tracking for students.",
        image: "assets/images/oldubilcover.png",
        tags: ["Education", "E-learning", "Student Platform"]
    },
    {
        title: "Paket Taxi",
        description: "Package delivery service application with real-time tracking and efficient logistics management.",
        image: "assets/images/pakettaxicover.png",
        tags: ["Logistics", "Delivery Service", "Real-time Tracking"]
    },
    {
        title: "Point CY",
        description: "Loyalty and rewards program management system with customer engagement and analytics features.",
        image: "assets/images/pointcycover.png",
        tags: ["Loyalty Program", "Customer Engagement", "Analytics"]
    },
    {
        title: "Saha",
        description: "Field service management application optimizing workforce scheduling and task management for enterprises.",
        image: "assets/images/sahacover.png",
        tags: ["Enterprise", "Field Service", "Workforce Management"]
    },
    {
        title: "Türkiye Petrolleri",
        description: "Energy sector application providing fuel station locator, payment solutions, and loyalty program features.",
        image: "assets/images/turkiyepetrollericover.png",
        tags: ["Energy", "Fuel Stations", "Payment Solutions"]
    },
    {
        title: "Webrazzi",
        description: "Technology news and startup ecosystem platform featuring articles, events, and industry insights.",
        image: "assets/images/webrazzicover.png",
        tags: ["Media", "Technology News", "Startup Ecosystem"]
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    loadProjects();
    setupContactForm();
    setupScrollEffects();
    setupAnimations();
}

// Navigation functionality
function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load and display projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.classList.add('loading');
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        projectsGrid.classList.remove('loading');
        projectsGrid.innerHTML = '';
        
        projects.forEach((project, index) => {
            const projectCard = createProjectCard(project);
            projectCard.style.opacity = '0';
            projectCard.style.transform = 'translateY(30px)';
            projectsGrid.appendChild(projectCard);
            
            // Stagger animation
            setTimeout(() => {
                projectCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                projectCard.style.opacity = '1';
                projectCard.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    // Add click interaction
    card.addEventListener('click', function() {
        showProjectModal(project);
    });
    
    return card;
}

function showProjectModal(project) {
    // Create modal backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.style.cssText = `
        background: white;
        border-radius: 15px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        transform: scale(0.7);
        transition: transform 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="position: relative;">
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px 15px 0 0;">
            <button class="close-modal" style="
                position: absolute;
                top: 15px;
                right: 15px;
                background: rgba(255, 255, 255, 0.9);
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                cursor: pointer;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            ">×</button>
        </div>
        <div style="padding: 2rem;">
            <h2 style="font-family: Georgia, 'Times New Roman', Times, serif; margin-bottom: 1rem; color: #333;">${project.title}</h2>
            <p style="color: #666; margin-bottom: 1.5rem; line-height: 1.7;">${project.description}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${project.tags.map(tag => `<span style="background: #0175C2; color: white; padding: 6px 12px; border-radius: 20px; font-size: 0.9rem; font-weight: 500;">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    
    // Animate in
    setTimeout(() => {
        backdrop.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    }, 10);
    
    // Close modal functionality
    const closeModal = () => {
        backdrop.style.opacity = '0';
        modal.style.transform = 'scale(0.7)';
        setTimeout(() => {
            document.body.removeChild(backdrop);
        }, 300);
    };
    
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModal();
    });
    
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Contact form functionality
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
        max-width: 400px;
        ${type === 'success' ? 'background: #28a745;' : 'background: #dc3545;'}
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Scroll effects and animations
function setupScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

function setupAnimations() {
    // Add typing animation to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    
    // Add floating animation to profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        setInterval(() => {
            profileImg.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                profileImg.style.transform = 'translateY(0)';
            }, 2000);
        }, 4000);
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scroll behavior for all internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Service Worker registration for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}