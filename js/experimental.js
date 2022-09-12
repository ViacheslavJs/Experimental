
"use strict"

let layer = document.getElementById('layer');
let iconClose = document.getElementById('close');

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
                   
function showGallery() {  
  layer.style.display = "block";
  iconClose.style.display = "block";  
  onEffect();
  disablePageScrolling();           
}

function hideGallery() {	
  layer.style.display = "none";
  iconClose.style.display = "none"; 
  offEffect(); 
  enablePageScrolling();  
}

function closeLayer() {
  layer.style.display = "none";
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
   
  if (n > slides.length) {
      slideIndex = 1
  }
      
  if (n < 1) {
      slideIndex = slides.length
  }    
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
      
  slides[slideIndex-1].style.display = "block";
  
  //////// центрирование одиночных изображений /////////   
  let sizeLayer = document.getElementById('layer'); 
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
    
    
