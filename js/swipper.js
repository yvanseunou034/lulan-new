document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.main-swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'fade', // Changed effect to 'fade'
    fadeEffect: {
      crossFade: true
    },
    speed: 1000 // Increase the speed to make the transition smoother and slower
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.product-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 800, // Ajuster la vitesse du défilement
    effect: 'slide', // Utiliser l'effet de transition par défaut (glissement)
    loop: true, // Activer le mode boucle
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  
  
});
document.addEventListener('DOMContentLoaded', function () {

// Fonction pour afficher l'aperçu de l'image
function showPreview(src) {
  const previewModal = document.createElement('div');
  previewModal.className = 'preview-modal';
  previewModal.innerHTML = `
    <div class="preview-modal-content">
      <span class="close-btn">&times;</span>
      <img src="${src}" alt="Preview">
    </div>
  `;
  document.body.appendChild(previewModal);

  // Fermer la modale
  previewModal.querySelector('.close-btn').addEventListener('click', () => {
    document.body.removeChild(previewModal);
  });

  // Fermer la modale en cliquant à l'extérieur
  window.addEventListener('click', (e) => {
    if (e.target === previewModal) {
      document.body.removeChild(previewModal);
    }
  });
}
});
