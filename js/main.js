// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scrolling for Anchor Links
const anchors = document.querySelectorAll('a[href^="#"]');
for (const anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Navbar Scroll Effect
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Service Cards Animation
const serviceCards = document.querySelectorAll('.service-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
        }
    }
}, observerOptions);

for (const card of serviceCards) {
    observer.observe(card);
}

// Form Validation
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Email validation helper function
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Add active class to current page in navigation
const setActiveNavLink = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    for (const link of navLinks) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    }
};

setActiveNavLink();

// Initialize AOS (Animate on Scroll) if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true
    });
}

// Project category filtering
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');

    for (const button of categoryButtons) {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            for (const btn of categoryButtons) {
                btn.classList.remove('active');
            }
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            for (const card of projectCards) {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }
});

// Project modal functionality
const projectDetails = {
    project1: {
        title: 'Modern Office Complex',
        description: `
            <div class="space-y-4">
                <div class="h-96 rounded-lg mb-6 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                         alt="Modern Office Complex" 
                         class="w-full h-full object-cover">
                </div>
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <h4 class="font-bold text-lg mb-2">Project Details</h4>
                        <ul class="space-y-2 text-gray-600">
                            <li><span class="font-semibold">Location:</span> Downtown Business District</li>
                            <li><span class="font-semibold">Area:</span> 50,000 sq ft</li>
                            <li><span class="font-semibold">Duration:</span> 18 months</li>
                            <li><span class="font-semibold">Completion:</span> 2023</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Key Features</h4>
                        <ul class="space-y-2 text-gray-600">
                            <li>Smart building technology</li>
                            <li>LEED Gold certified</li>
                            <li>Rooftop garden</li>
                            <li>Underground parking</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-2">Project Overview</h4>
                    <p class="text-gray-600">
                        This state-of-the-art office complex features sustainable design and cutting-edge technology. 
                        The building incorporates smart systems for lighting, climate control, and security, while 
                        maintaining a focus on employee comfort and productivity. The rooftop garden provides a 
                        peaceful retreat for workers and contributes to the building's energy efficiency.
                    </p>
                </div>
            </div>
        `
    },
    project2: {
        title: 'Luxury Residential Complex',
        description: `
            <div class="space-y-4">
                <div class="h-96 rounded-lg mb-6 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                         alt="Luxury Residential Complex" 
                         class="w-full h-full object-cover">
                </div>
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <h4 class="font-bold text-lg mb-2">Project Details</h4>
                        <ul class="space-y-2 text-gray-600">
                            <li><span class="font-semibold">Location:</span> Suburban Area</li>
                            <li><span class="font-semibold">Units:</span> 120 apartments</li>
                            <li><span class="font-semibold">Duration:</span> 24 months</li>
                            <li><span class="font-semibold">Completion:</span> 2024</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Amenities</h4>
                        <ul class="space-y-2 text-gray-600">
                            <li>Swimming pool</li>
                            <li>Fitness center</li>
                            <li>Community garden</li>
                            <li>24/7 security</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-2">Project Overview</h4>
                    <p class="text-gray-600">
                        This premium residential complex offers modern living spaces with high-end finishes and 
                        amenities. Each unit features smart home technology, energy-efficient appliances, and 
                        contemporary design. The community areas promote a healthy lifestyle with various 
                        recreational facilities and green spaces.
                    </p>
                </div>
            </div>
        `
    },
    project3: {
        title: 'Manufacturing Facility',
        description: `
            <div class="space-y-4">
                <div class="h-96 rounded-lg mb-6 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                         alt="Manufacturing Facility" 
                         class="w-full h-full object-cover">
                </div>
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <h4 class="font-bold text-lg mb-2">Project Details</h4>
                        <ul class="space-y-2 text-gray-600">
                            <li><span class="font-semibold">Location:</span> Industrial Park</li>
                            <li><span class="font-semibold">Area:</span> 100,000 sq ft</li>
                            <li><span class="font-semibold">Duration:</span> 15 months</li>
                            <li><span class="font-semibold">Completion:</span> 2023</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Features</h4>
                        <ul class="space-y-2 text-gray-600">
                            <li>Automated systems</li>
                            <li>Safety protocols</li>
                            <li>Energy efficiency</li>
                            <li>Waste management</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-2">Project Overview</h4>
                    <p class="text-gray-600">
                        This modern manufacturing facility incorporates advanced automation and safety features. 
                        The layout optimizes production flow while maintaining strict safety standards. 
                        Energy-efficient systems and waste management solutions make this facility 
                        environmentally responsible.
                    </p>
                </div>
            </div>
        `
    },
    project4: {
        title: 'Highway Bridge Project',
        description: `
            <div class="space-y-4">
                <div class="h-96 rounded-lg mb-6 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                         alt="Highway Bridge Project" 
                         class="w-full h-full object-cover">
                </div>
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <h4 class="font-bold text-lg mb-2">Project Details</h4>
                        <ul class="space-y-2 text-gray-600">
                            <li><span class="font-semibold">Location:</span> Interstate Highway</li>
                            <li><span class="font-semibold">Length:</span> 2.5 km</li>
                            <li><span class="font-semibold">Duration:</span> 36 months</li>
                            <li><span class="font-semibold">Completion:</span> 2024</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Features</h4>
                        <ul class="space-y-2 text-gray-600">
                            <li>Seismic protection</li>
                            <li>Smart monitoring</li>
                            <li>LED lighting</li>
                            <li>Emergency systems</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-2">Project Overview</h4>
                    <p class="text-gray-600">
                        This major infrastructure project connects two cities with advanced engineering solutions. 
                        The bridge features seismic protection systems and smart monitoring for structural health. 
                        Energy-efficient LED lighting and emergency response systems ensure safe passage for all users.
                    </p>
                </div>
            </div>
        `
    },
    project5: {
        title: 'Shopping Mall Complex',
        description: `
            <div class="space-y-4">
                <div class="h-96 rounded-lg mb-6 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                         alt="Shopping Mall Complex" 
                         class="w-full h-full object-cover">
                </div>
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <h4 class="font-bold text-lg mb-2">Project Details</h4>
                        <ul class="space-y-2 text-gray-600">
                            <li><span class="font-semibold">Location:</span> City Center</li>
                            <li><span class="font-semibold">Area:</span> 75,000 sq ft</li>
                            <li><span class="font-semibold">Duration:</span> 30 months</li>
                            <li><span class="font-semibold">Completion:</span> 2024</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Features</h4>
                        <ul class="space-y-2 text-gray-600">
                            <li>Entertainment zone</li>
                            <li>Food court</li>
                            <li>Parking structure</li>
                            <li>Digital directories</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-2">Project Overview</h4>
                    <p class="text-gray-600">
                        This modern shopping complex combines retail spaces with entertainment facilities. 
                        The design focuses on creating an engaging shopping experience with digital 
                        directories and comfortable spaces. The multi-level parking structure provides 
                        convenient access for visitors.
                    </p>
                </div>
            </div>
        `
    },
    project6: {
        title: 'Smart Home Community',
        description: `
            <div class="space-y-4">
                <div class="h-96 rounded-lg mb-6 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                         alt="Smart Home Community" 
                         class="w-full h-full object-cover">
                </div>
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <h4 class="font-bold text-lg mb-2">Project Details</h4>
                        <ul class="space-y-2 text-gray-600">
                            <li><span class="font-semibold">Location:</span> Suburban Area</li>
                            <li><span class="font-semibold">Units:</span> 50 homes</li>
                            <li><span class="font-semibold">Duration:</span> 24 months</li>
                            <li><span class="font-semibold">Completion:</span> 2024</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">Features</h4>
                        <ul class="space-y-2 text-gray-600">
                            <li>Smart home systems</li>
                            <li>Solar panels</li>
                            <li>EV charging</li>
                            <li>Community park</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-2">Project Overview</h4>
                    <p class="text-gray-600">
                        This eco-friendly residential community features smart home technology in every unit. 
                        Solar panels and energy management systems reduce environmental impact. The community 
                        includes shared spaces and charging stations for electric vehicles.
                    </p>
                </div>
            </div>
        `
    }
};

function showProjectDetails(projectId) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    const project = projectDetails[projectId];
    if (project) {
        modalTitle.textContent = project.title;
        modalContent.innerHTML = project.description;
        modal.classList.remove('hidden');
    }
}

function closeProjectModal() {
    document.getElementById('project-modal').classList.add('hidden');
}

// Close modal when clicking outside
document.getElementById('project-modal').addEventListener('click', (e) => {
    if (e.target === this) {
        closeProjectModal();
    }
});

// Callback Form Handling
document.getElementById('callbackForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        company: document.getElementById('company').value,
        phone: document.getElementById('phone').value,
        services: Array.from(document.querySelectorAll('input[name="services[]"]:checked')).map(cb => cb.value),
        message: document.getElementById('message').value,
        callTime: document.getElementById('callTime').value
    };

    // Validate form
    if (!formData.name || !formData.phone || formData.services.length === 0 || !formData.callTime) {
        alert('Please fill in all required fields');
        return;
    }

    // Here you would typically send the data to your server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you! We will contact you shortly.');
    
    // Reset form
    e.target.reset();
});

// Image Loading Handler
const handleImageLoad = () => {
    const images = document.querySelectorAll('img.hidden');
    
    for (const img of images) {
        const loadImage = () => {
            // Create a new image object
            const tempImage = new Image();
            
            tempImage.onload = () => {
                // Once loaded, show the actual image and hide placeholder
                img.classList.remove('hidden');
                const placeholder = img.previousElementSibling;
                if (placeholder?.classList.contains('image-placeholder')) {
                    placeholder.style.display = 'none';
                }
            };
            
            tempImage.onerror = () => {
                // On error, keep the placeholder visible
                const placeholder = img.previousElementSibling;
                if (placeholder?.classList.contains('image-placeholder')) {
                    const icon = placeholder.querySelector('.image-placeholder-icon');
                    if (icon) {
                        icon.classList.remove('fa-spinner', 'fa-spin');
                        icon.classList.add('fa-image');
                    }
                }
            };
            
            // Start loading the image
            tempImage.src = img.src;
        };
        
        // If the image is in viewport, load it
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    loadImage();
                    observer.unobserve(entry.target);
                }
            }
        }, {
            rootMargin: '50px 0px'
        });
        
        observer.observe(img);
    }
};

// Call the image handler when DOM is loaded
document.addEventListener('DOMContentLoaded', handleImageLoad); 