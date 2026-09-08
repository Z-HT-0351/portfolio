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
        details: `
            <h3>Project Overview</h3>
            <p>Designed and developed an automated car clearance kiosk system to improve efficiency, ergonomics, and user experience at Singapore land checkpoints. The solution integrates vehicle identification, automatic kiosk adjustment, computer vision guidance, and ergonomic kiosk design to reduce manual intervention and speed up immigration clearance.</p>

            <h3>Key Features</h3>
            <ul>
                <li>Automatic license plate recognition (ALPR)</li>
                <li>Vehicle guidance system using computer vision</li>
                <li>Ergonomic immigration kiosk</li>
                <li>Automated vertical height adjustment based on vehicle type</li>
                <li>Mobile pre-registration application</li>
            </ul>

            <h3>My Role: Hardware Fabrication &amp; Electronics Lead</h3>
            <p>I was primarily responsible for the fabrication, assembly, wiring, and electronics integration of the physical kiosk prototype.</p>

            <h4>Hardware Development</h4>
            <ul>
                <li>Fabricated the full-scale kiosk prototype using aluminium extrusion, acrylic panels, plywood structural components, and 3D-printed custom parts.</li>
                <li>Built and assembled the vertical adjustment mechanism.</li>
                <li>Integrated linear actuators, a sliding rail system, and structural support components.</li>
            </ul>

            <h4>Electronics &amp; Embedded Systems</h4>
            <ul>
                <li>Designed and implemented the electrical architecture for the vertical adjustment system.</li>
                <li>Wired and integrated the Arduino microcontroller, dual linear actuators, optical limit switches, power distribution components, and motor control circuitry.</li>
                <li>Developed and tested actuator control logic for automatic kiosk height adjustment based on vehicle classification data.</li>
            </ul>

            <h4>System Integration</h4>
            <ul>
                <li>Connected hardware subsystems with the higher-level software platform.</li>
                <li>Implemented communication between the Arduino controller and the vehicle classification system.</li>
                <li>Conducted hardware debugging, calibration, and reliability testing.</li>
                <li>Supported end-to-end validation of kiosk movement and safety interlocks.</li>
            </ul>

            <h3>Technical Skills Demonstrated</h3>
            <ul>
                <li>Embedded systems and Arduino programming</li>
                <li>Electronics integration, electrical wiring, and troubleshooting</li>
                <li>Actuator control systems</li>
                <li>Rapid prototyping and mechanical assembly</li>
                <li>CAD-to-prototype fabrication</li>
                <li>System integration, user testing, and hardware validation</li>
            </ul>

            <h3>Project Outcomes</h3>
            <ul>
                <li>Developed a working kiosk prototype with automated height adjustment.</li>
                <li>Achieved a 450 mm adjustment range with synchronized dual-actuator control.</li>
                <li>Reached full adjustment travel in approximately 5 seconds.</li>
                <li>Implemented safety feedback using optical limit switches.</li>
                <li>Contributed to a solution projected to reduce vehicle clearance time by more than 15 seconds while improving accessibility and ergonomics.</li>
            </ul>

            <h3>Technologies &amp; Tools</h3>
            <p>Arduino &bull; Linear Actuators &bull; Optical Limit Switches &bull; 3D Printing &bull; Laser Cutting &bull; Soldering &bull; Aluminium Extrusions &bull; Acrylic Fabrication &bull; Fusion 360 &bull; Rhino &bull; Embedded Control Systems &bull; Prototyping &amp; Testing</p>
        `
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
