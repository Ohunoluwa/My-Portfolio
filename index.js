
// Sidebar Toggle Logic 

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    
    if (menuIcon && navLinks) {
        const iconElement = menuIcon.querySelector('i');

        menuIcon.addEventListener('click', () => {
            
            navLinks.classList.toggle('show-sidebar');
            
            if (navLinks.classList.contains('show-sidebar')) {
                iconElement.classList.remove('fa-bars');
                iconElement.classList.add('fa-xmark');
            } else {
                iconElement.classList.remove('fa-xmark');
                iconElement.classList.add('fa-bars');
            }
        });

        const sidebarLinks = document.querySelectorAll('#nav-links li a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show-sidebar');
                iconElement.classList.remove('fa-xmark');
                iconElement.classList.add('fa-bars');
            });
        });
    }
});

// Header Scroll 

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// 1. Grab every single navigation link on the page
const navItems = document.querySelectorAll('nav a'); 

// 2. Listen for a click on ANY of those links
navItems.forEach(item => {
    item.addEventListener('click', function() {
        
        // 3. REMOVE the active class from every single link first
        navItems.forEach(link => link.classList.remove('active'));
        
        // 4. ADD the active class ONLY to the exact link you just clicked
        this.classList.add('active');
    });
});