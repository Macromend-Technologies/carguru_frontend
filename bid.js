document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.nav-item-tab');
    const sections = document.querySelectorAll('.card-section');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');

        // Remove active class from all tabs and hide all sections
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        // Add active class to clicked tab and matching section
        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
      });
    });
  });

const carousel = document.querySelector('#bgImageCarousel');
  const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: 3000,    // 3 seconds auto-slide
    ride: 'carousel',
    wrap: false        // ❌ don't loop (stop at end)
  });

  // Optional: stop auto-slide after last slide
  carousel.addEventListener('slid.bs.carousel', function (e) {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const lastIndex = totalSlides - 1;
    if (e.to === lastIndex) {
      bsCarousel.pause(); // 🛑 stop auto-slide after last
    }
  });


 const slider = document.getElementById('priceRange');
    const display = document.getElementById('priceDisplay');

    slider.addEventListener('input', function () {
      display.textContent = 'RM' + Number(this.value).toLocaleString();
    });


// Seller card chaning
const navItems = document.querySelectorAll('.nav-item-tab');
const sections = document.querySelectorAll('.card-section');

navItems.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('data-target');

    // Update nav active state
    navItems.forEach(item => item.classList.remove('active'));
    tab.classList.add('active');

    // Show only the targeted card section
    sections.forEach(section => {
      if (section.id === targetId) {
        section.classList.add('active');
        section.classList.remove('d-none');
      } else {
        section.classList.remove('active');
        section.classList.add('d-none');
      }
    });
  });
});