  const slider = document.getElementById("imgSlider");
  const images = slider.querySelectorAll("img");
  const imageWidth = 180 + 20;
  let currentIndex = 0;

  
  images.forEach((img) => {
    const clone = img.cloneNode(true);
    slider.appendChild(clone);
  });

  function scrollImages() {
    currentIndex++;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

    if (currentIndex >= images.length) {
      setTimeout(() => {
        slider.style.transition = "none";
        currentIndex = 0;
        slider.style.transform = `translateX(0px)`;
      }, 500); 
    }
  }

  setInterval(scrollImages, 2000);


 // ===== Students POV slides =====

const povSlider = document.getElementById("povSlider");
const povImages = povSlider.querySelectorAll("img");
const povImageWidth = 280 + 20; 
let povIndex = 0;


povImages.forEach((img) => {
  const clone = img.cloneNode(true);
  povSlider.appendChild(clone);
});

function slidePOV() {
  povIndex++;
  povSlider.style.transition = "transform 0.5s ease-in-out";
  povSlider.style.transform = `translateX(-${povIndex * povImageWidth}px)`;


  if (povIndex >= povImages.length) {
    setTimeout(() => {
      povSlider.style.transition = "none";
      povIndex = 0;
      povSlider.style.transform = `translateX(0px)`;
    }, 2000);
  }
}

setInterval(slidePOV, 2000);



// =====Show Hidden Menu-Bar=====

function toggleMenu() {
      const menu = document.getElementById("menu-list");
      menu.classList.toggle("hidden");
    }

