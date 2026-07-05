
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



// console.log("🚨 TRACKER 1: index.js is successfully running!");

//const toggleSwitch = document.querySelector('#checkbox');
//console.log("🚨 TRACKER 2: Did I find the toggle switch?", toggleSwitch);

//const body = document.body;

// if (toggleSwitch) {
    //toggleSwitch.addEventListener('change', function(event) {
      //  console.log("🚨 TRACKER 3: The switch was just clicked! Is it checked?", event.target.checked);
        
       // if (event.target.checked) {
         //   body.classList.add('dark-mode');
           //  console.log("🚨 TRACKER 4: Added 'dark-mode' class to body.");
         //} else {
        //     body.classList.remove('dark-mode');
        //     console.log("🚨 TRACKER 4: Removed 'dark-mode' class from body.");
       //  }
     //});
 //} else {
  //   console.error("❌ ERROR: Could not find the checkbox in the HTML!");
 //}