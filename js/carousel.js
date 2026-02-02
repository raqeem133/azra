/* ============================================
   Carousel JavaScript - Social Feed Carousel
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
});

/**
 * Initialize Social Media Carousel
 */
function initCarousel() {
    const carousel = document.getElementById('socialCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!carousel) return;

    const scrollAmount = 270; // Item width + gap

    // Next button functionality
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            trackEvent('Carousel', 'Next', 'Social Feed');
        });
    }

    // Previous button functionality
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
            trackEvent('Carousel', 'Previous', 'Social Feed');
        });
    }

    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;

    carousel.addEventListener('touchstart', function(e) {
        startX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (startX > endX + 50) {
            // Swiped left
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        } else if (endX > startX + 50) {
            // Swiped right
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    // Update button visibility based on scroll position
    updateCarouselButtons();
    carousel.addEventListener('scroll', debounce(updateCarouselButtons, 100));
}

/**
 * Update carousel button state based on scroll position
 */
function updateCarouselButtons() {
    const carousel = document.getElementById('socialCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!carousel || !prevBtn || !nextBtn) return;

    const isAtStart = carousel.scrollLeft <= 0;
    const isAtEnd = carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth - 10);

    prevBtn.style.opacity = isAtStart ? '0.5' : '1';
    prevBtn.style.cursor = isAtStart ? 'not-allowed' : 'pointer';

    nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
    nextBtn.style.cursor = isAtEnd ? 'not-allowed' : 'pointer';
}

/**
 * Keyboard navigation for carousel
 */
document.addEventListener('keydown', function(e) {
    const carousel = document.getElementById('socialCarousel');
    if (!carousel || !carousel.parentElement.classList.contains('social-feed')) return;

    if (e.key === 'ArrowLeft') {
        document.getElementById('prevBtn').click();
        e.preventDefault();
    } else if (e.key === 'ArrowRight') {
        document.getElementById('nextBtn').click();
        e.preventDefault();
    }
});
