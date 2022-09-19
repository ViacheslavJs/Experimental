
"use strict"

let galleryLayer = document.getElementById('gallery-layer');
let iconClose = document.getElementById('close');
let popLayer = document.getElementById('pop-up-layer');

let effect = document.getElementsByClassName('for-effects');

let pageScroll = document.getElementsByTagName('body')[0]; 

// функция отключения прокрутки страницы (body):
function disablePageScrolling () {
	 pageScroll.style.overflowY = "hidden";
}

// функция подключения прокрутки страницы (body):
function enablePageScrolling () {
	 pageScroll.style.overflowY = "visible"; // вместо visible можно auto или ""
}

let onEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.add('filter-blur-grayscale');
      }  
    };
    
let offEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.remove('filter-blur-grayscale');
      }  
    };
    
function showInfo() {  
  popLayer.style.display = "block";  
  onEffect();
  disablePageScrolling(); 
} 

function hideInfo() {  
  popLayer.style.display = "none";  
  offEffect();
  enablePageScrolling();
}     
                   
function showGallery() {  
  galleryLayer.style.display = "block";
  iconClose.style.display = "block";  
  onEffect();
  disablePageScrolling();           
}

function hideGallery() {	
  galleryLayer.style.display = "none";
  iconClose.style.display = "none"; 
  offEffect(); 
  enablePageScrolling();  
}

function closeLayer() {
  galleryLayer.style.display = "none";
  iconClose.style.display = "none";  
  offEffect(); 
  enablePageScrolling(); 
}


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('gallery');
  let info = document.getElementsByClassName('pop-up');
   
  if (n > slides.length) {
      slideIndex = 1
  }
  
  if (n > info.length) {
      slideIndex = 1
  }
      
  if (n < 1) {
      slideIndex = slides.length
  }    
  
  if (n < 1) {
      slideIndex = info.length
  } 
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  for (i = 0; i < info.length; i++) {
      info[i].style.display = "none";
  }
      
  slides[slideIndex-1].style.display = "block";
  info[slideIndex-1].style.display = "block";
  
  //////// центрирование одиночных изображений /////////   
  let sizeLayer = document.getElementById('gallery-layer'); 
  let heightLayer = sizeLayer.offsetHeight;                                     
  //console.log(heightLayer);

  let heightGallery = slides[slideIndex-1].offsetHeight;
  //console.log(heightGallery);
  
  // алгоритм центрирования:
  let differenceLayerGallery = heightLayer - heightGallery;
  let remainder = differenceLayerGallery / 2;
  
  if (heightGallery < heightLayer) {
      slides[slideIndex-1].style.top = remainder + "px"; 
  } else if (heightGallery > heightLayer) {
      slides[slideIndex-1].style.top = 0 + "px";
  }

}      
    
    
