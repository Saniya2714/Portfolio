// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Typing Animation for Hero Section
const typingText = "Frontend Developer | Flutter Enthusiast | Tech Explorer";
let i = 0;
const typingElement = document.createElement('p');
typingElement.classList.add("typing-animation");
document.querySelector('.hero-text').appendChild(typingElement);

function typeEffect() {
    if (i < typingText.length) {
        typingElement.innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Project Filtering
function filterProjects(category) {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

// Form Submission Handling
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Real-Time Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('thanks-message').innerText = "Thank you for your message! I'll get back to you soon.";
        document.getElementById('thanks-message').style.color = 'green';
    } else {
        document.getElementById('thanks-message').innerText = "Please fill out all fields.";
        document.getElementById('thanks-message').style.color = 'red';
    }
});

// Floating Contact Button
document.getElementById('contact-button').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
});

// Initialize EmailJS
(function() {
    emailjs.init("UKCztLTZQlCd_qScJ");
})();

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to Top functionality
    const scrollToTopButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.display = 'flex';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Project Filtering
    function filterProjects(category) {
        const projects = document.querySelectorAll('.project');
        
        projects.forEach(project => {
            if (category === 'all') {
                project.style.display = 'block';
            } else {
                project.classList.contains(category) 
                    ? project.style.display = 'block' 
                    : project.style.display = 'none';
            }
        });
    }

    // Make filterProjects available globally
    window.filterProjects = filterProjects;

    // Add error checking for form element
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) {
        console.error('Contact form not found! Check if the form has id="contact-form"');
        return;
    }

    // Handle form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show loading state
        const btn = event.target.querySelector('button');
        btn.textContent = 'Sending...';
        
        const templateParams = {
            from_name: this.name.value,
            from_email: this.email.value,
            message: this.message.value
        };
        
        console.log('Starting email send...'); // Debug log
        console.log('Template params:', templateParams); // Debug log
        
        emailjs.send('service_ii7bikl', 'template_ybd0kaf', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('thanks-message').style.display = 'block';
                document.getElementById('thanks-message').textContent = 'Thank you for your message! I will get back to you soon.';
                event.target.reset();
                btn.textContent = 'Send';
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById('thanks-message').style.display = 'block';
                document.getElementById('thanks-message').textContent = 'Sorry, there was an error. Please try again.';
                btn.textContent = 'Send';
            });
    });

    // Smooth scrolling for navigation links
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

    // Animate skill bars
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('data-width');
                progressBar.style.width = targetWidth;
            }
        });
    }, { threshold: 0.5 });

    // Observe all progress bars
    document.querySelectorAll('.progress').forEach(bar => {
        observer.observe(bar);
    });

    // Mobile menu toggle (if you add a hamburger menu later)
    const nav = document.querySelector('nav ul');
    const menuButton = document.querySelector('.menu-button');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Add loading animation for skills
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill').forEach(skill => {
        skillObserver.observe(skill);
    });

    // Add typing effect
    const typingText = "Frontend Developer | Flutter Developer | Problem Solver";
    let i = 0;
    function typeEffect() {
        if (i < typingText.length) {
            document.querySelector('.typing-text').innerHTML += typingText.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});
