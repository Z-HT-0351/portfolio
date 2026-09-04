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

// Project Modal Functionality
const projects = [
    {
        title: 'Automated Car Clearance Kiosk',
        date: 'Sep 2024 - May 2025 | SUTD Capstone Project',
        details: 'This is a placeholder for detailed project information. Click on individual projects to see more details about each work experience.'
    },
    {
        title: 'Robotic Control System with FPGA',
        date: 'May 2024 - Aug 2024 | A*STAR SIMTech',
        details: 'This is a placeholder for detailed project information. Click on individual projects to see more details about each work experience.'
    },
    {
        title: 'Medical Device Prototyping',
        date: 'Aug 2023 - Dec 2023 | A*STAR SIMTech',
        details: 'This is a placeholder for detailed project information. Click on individual projects to see more details about each work experience.'
    },
    {
        title: 'School Project Placeholder 1',
        date: 'Coming soon',
        details: 'Placeholder content for future school project details.'
    },
    {
        title: 'School Project Placeholder 2',
        date: 'Coming soon',
        details: 'Placeholder content for future school project details.'
    }
];

function openProjectModal(projectIndex) {
    const modal = document.getElementById('projectModal');
    const project = projects[projectIndex];
    
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDate').textContent = project.date;
    document.getElementById('modalBody').innerHTML = `<p>${project.details}</p>`;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});

// Intersection Observer for fade-in animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and sections
document.querySelectorAll('.project-card, .about, .contact').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
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

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--secondary-color);
        border-bottom: 2px solid var(--secondary-color);
        padding-bottom: 0.25rem;
    }
`;
document.head.appendChild(style);

console.log('Portfolio script loaded successfully!');
