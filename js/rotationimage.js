document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.product-image');

    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            images.forEach(img => img.classList.remove('active'));
            image.classList.add('active');
        });

        image.addEventListener('mouseout', () => {
            image.classList.remove('active');
        });
    });
});