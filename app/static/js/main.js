// Simple script for basic interactivity
document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (class-based implementation)
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const desktopNav = document.querySelector('.desktop-nav');

    if (mobileToggle && desktopNav) {
        mobileToggle.addEventListener('click', () => {
            desktopNav.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = desktopNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                desktopNav.classList.remove('active');
            });
        });
    }

    // Modal Functionality
    const modal = document.getElementById('service-modal');
    if (modal) {
        const modalTitle = document.getElementById('modal-service-title');
        const modalDesc = document.getElementById('modal-service-desc');
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');
        const contactBtn = modal.querySelector('.modal-btn-contact');
        const treatmentCards = document.querySelectorAll('.treatment-card');

        const openModal = (title, desc) => {
            if (title) modalTitle.textContent = title;
            if (desc) modalDesc.textContent = desc;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        treatmentCards.forEach(card => {
            card.addEventListener('click', () => {
                openModal(card.getAttribute('data-title'), card.getAttribute('data-desc'));
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (overlay) overlay.addEventListener('click', closeModal);
        if (contactBtn) contactBtn.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // Testimonial Carousel Auto Scroll
    const testimonialSlider = document.getElementById('testimonialSlider');
    if (testimonialSlider) {
        let scrollAmount = 0;
        const scrollStep = 1;
        const scrollSpeed = 30;

        const autoScroll = setInterval(() => {
            if (testimonialSlider.matches(':hover')) return; // pause on hover

            testimonialSlider.scrollLeft += scrollStep;
            scrollAmount += scrollStep;

            // simple reset loop if it reaches near the end
            if (testimonialSlider.scrollLeft >= (testimonialSlider.scrollWidth - testimonialSlider.clientWidth - 1)) {
                testimonialSlider.scrollLeft = 0;
            }
        }, scrollSpeed);
    }

    // Appointment Form Submission
    const bookingForm = document.getElementById('booking-form');
    const successMsg = document.getElementById('form-success-msg');

    if (bookingForm && successMsg) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission for demo/frontend update

            // Show success message
            successMsg.style.display = 'block';

            // Reset form fields
            bookingForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);
        });
    }

    // Scroll Animations (Reveal Elements)
    function revealElements() {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', revealElements);
    // Trigger once on load
    revealElements();

});
