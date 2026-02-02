/* ============================================
   Navigation JavaScript - Menu Interaction
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
});

/**
 * Initialize Navigation
 */
function initNavigation() {
    const hamburger = document.getElementById('hamburgerMenu');
    const navigation = document.getElementById('navigation');
    const navLinks = document.querySelectorAll('.nav-link');
    const navItems = document.querySelectorAll('.nav-item');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navigation.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't close if it's a submenu toggle
            if (window.innerWidth <= 768 && this.querySelector('~ .submenu')) {
                const navItem = this.closest('.nav-item');
                navItem.classList.toggle('active');
                e.preventDefault();
            } else {
                // Close menu on link click
                if (hamburger) {
                    hamburger.classList.remove('active');
                    navigation.classList.remove('active');
                }
                trackEvent('Navigation', 'Click', this.textContent);
            }
        });
    });

    // Handle submenu on mobile
    if (window.innerWidth <= 768) {
        navItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            if (item.querySelector('.submenu')) {
                link.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        item.classList.toggle('active');
                    }
                });
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && !e.target.closest('.hamburger-menu')) {
            if (hamburger) {
                hamburger.classList.remove('active');
                navigation.classList.remove('active');
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', debounce(function() {
        if (window.innerWidth > 768) {
            navigation.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    }, 250));

    // Add active class to current page
    setActiveNavigation();
}

/**
 * Set active navigation based on current URL
 */
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
}
