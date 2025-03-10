// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle contact form submission
const contactForm = document.querySelector('.contato-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Format the message for WhatsApp
    const whatsappMessage = `*Nova Mensagem de Contato*\n\n*Nome:* ${name}\n*Email:* ${email}\n*Mensagem:* ${message}`;
    
    // Replace with your phone number (including country code)
    const phoneNumber = '5548988683838'; // Updated WhatsApp contact number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
    
    // Reset the form
    this.reset();
});

// Product buttons interaction
document.querySelectorAll('.produto-card button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Produto adicionado ao carrinho!');
    });
});

// CTA button interaction
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#produtos').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add scroll animation for navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.style.transform = 'translateY(-100%)';
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});