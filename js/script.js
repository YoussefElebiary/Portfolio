// Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');

mobileMenuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});