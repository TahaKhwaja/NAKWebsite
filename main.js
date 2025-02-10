// JavaScript to toggle the mobile menu
const mobileMenu = document.getElementById('mobile-menu'); // Hamburger icon
const navMenu = document.querySelector('.navbar__menu'); // Menu list

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior
        const targetId = this.getAttribute('href'); // Get the target ID
        const targetElement = document.querySelector(targetId); // Find the target element
        if (targetElement) {
            // Scroll to the target element with smooth behavior
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Align to the top of the section
            });
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offset = 80; // Adjust this value to match your navbar height
            const targetPosition = targetElement.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
// Toggle donation instructions
const donateButton = document.getElementById('donate-button');
const donationInstructions = document.getElementById('donation-instructions');

donateButton.addEventListener('click', () => {
    if (donationInstructions.style.display === 'none' || donationInstructions.style.display === '') {
        donationInstructions.style.display = 'block'; // Show instructions
    } else {
        donationInstructions.style.display = 'none'; // Hide instructions
    }
});
