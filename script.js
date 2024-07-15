// script.js


const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// subscribe area text-input

function hideIcon() {
    document.getElementById('email-icon').classList.add('hidden');
}

function showIcon() {
    if (document.getElementById('email-input').value === '') {
        document.getElementById('email-icon').classList.remove('hidden');
    }
}