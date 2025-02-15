document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const words = ["Frontend Developer", "Flutter Developer", "UI/UX Designer"];
        let wordIndex = 0, charIndex = 0, isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            typingText.textContent = isDeleting 
                ? currentWord.substring(0, charIndex--) 
                : currentWord.substring(0, charIndex++);

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 100 : 200);
            }
        }
        type();
    }

    // Contact Form Submission with EmailJS
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const btn = event.target.querySelector('button');
            btn.textContent = 'Sending...';

            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                message: document.getElementById('message').value,
                to_name: 'Saniya',
                reply_to: document.getElementById('email').value
            };

            emailjs.send('service_ii7bikl', 'template_hgys3e9', templateParams)
                .then(() => {
                    document.getElementById('thanks-message').textContent = 'Thank you for your message!';
                    document.getElementById('thanks-message').style.color = 'green';
                    contactForm.reset();
                })
                .catch(() => {
                    document.getElementById('thanks-message').textContent = 'Error sending message. Try again.';
                    document.getElementById('thanks-message').style.color = 'red';
                })
                .finally(() => {
                    btn.textContent = 'Send';
                });
        });
    }

    // Scroll to Top Button
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (scrollToTopButton) {
        window.addEventListener('scroll', () => {
            scrollToTopButton.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
        });
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Intersection Observer for Skills & Progress Bars
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                entry.target.style.width = entry.target.getAttribute('data-width') || '100%';
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.progress, .skill').forEach(element => observer.observe(element));

    // Mobile Menu Toggle
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav ul');
    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Contact Button Smooth Scroll
    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
