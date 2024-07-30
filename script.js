document.getElementById('rotationSlider1').addEventListener('input', function() {
    const rotationValue = this.value;
    const image = document.getElementById('productImage1');
    image.style.transform = `rotateY(${rotationValue}deg)`;
  });
  
  document.getElementById('rotationSlider2').addEventListener('input', function() {
    const rotationValue = this.value;
    const image = document.getElementById('productImage2');
    image.style.transform = `rotateY(${rotationValue}deg)`;
  });
  
  document.getElementById('rotationSlider3').addEventListener('input', function() {
    const rotationValue = this.value;
    const image = document.getElementById('productImage3');
    image.style.transform = `rotateY(${rotationValue}deg)`;
  });
  
  document.getElementById('rotationSlider4').addEventListener('input', function() {
    const rotationValue = this.value;
    const image = document.getElementById('productImage4');
    image.style.transform = `rotateY(${rotationValue}deg)`;
  });

  