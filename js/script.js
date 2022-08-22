
"use strict"

let layer = document.getElementById("layer");
let iconClose = document.getElementById('close');
let grp = document.getElementById("group");

let order = document.getElementById("order");
let formLayer = document.getElementById("formLayer");
let modalForm = document.getElementById("modalForm");

let effect = document.getElementsByClassName("forEffects");
let pageScroll = document.getElementsByTagName("body")[0];

order.onclick = function () {
	formLayer.style.display = "block";
	modalForm.style.display = "block";
	onEffect();
}

let onEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.add("filterBlurGrayscale");
      }  
    };
    
let offEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.remove("filterBlurGrayscale");
      }  
    };

function showCard() {  
  grp.style.display = "block";
  onEffect();
  pageScroll.style.overflowY = "hidden";
} 

function hideGroup() {  
  grp.style.display = "none";
  offEffect();
  pageScroll.style.overflowY = "";
} 

function hideformLayer() {  
  formLayer.style.display = "none";
  offEffect();
}
                   
function showGallery() {  
  layer.style.display = "block";
  iconClose.style.display = "block";  
  onEffect(); 
       
///////////////////////////////////////////////////////////////////
/*
  var sizeLayer = document.getElementById("layer"); 
  var heightLayer = sizeLayer.offsetHeight;                                     
  console.log(heightLayer);
   
  var sizeGallery0 = document.getElementsByClassName("gallery")[14]; 
  var heightGallery0 = sizeGallery0.offsetHeight;        
  console.log(heightGallery0);
   
  var digit = heightGallery0 / heightLayer;
  console.log(digit);
  
  /////////// 
  var widthLayer = sizeLayer.offsetWidth;
  var ratioSide = widthLayer / heightLayer;
  console.log(ratioSide);
  //////////
    
  //var num = document.querySelectorAll(".gallery");
  //sizeGallery0.classList.add("above");
*/                               
///////////////////////////////////////////////////////////////////
  
}

function hideGallery() {	
  layer.style.display = "none";
  iconClose.style.display = "none"; 
  offEffect();   
}

function closeLayer() {
  layer.style.display = "none";
  iconClose.style.display = "none";  
  offEffect();  
}


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("gallery");
  let info = document.getElementsByClassName("catalog");
   
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
  let sizeLayer = document.getElementById("layer"); 
  let heightLayer = sizeLayer.offsetHeight;                                     
  //console.log(heightLayer);

  let heightGallery = slides[slideIndex-1].offsetHeight;
  //console.log(heightGallery);
  
  // способ 2 - более точное центрирование
  let differenceLayerGallery = heightLayer - heightGallery;
  let remainder = differenceLayerGallery / 2;
  
  if (heightGallery < heightLayer) {
      slides[slideIndex-1].style.top = remainder + "px"; 
  } else if (heightGallery > heightLayer) {
      slides[slideIndex-1].style.top = 0 + "px";
  }
  
  
  /*
  // способ 1 - самый примитивный
  let widthLayer = sizeLayer.offsetWidth;
  console.log(widthLayer);
  
  if (heightGallery < heightLayer && widthLayer < heightLayer) {   
      slides[slideIndex-1].classList.add("above");   
  }  
  
  else if (heightGallery < heightLayer && widthLayer > heightLayer) {   
      slides[slideIndex-1].classList.remove("above");   
  }
  
  else if (heightGallery > heightLayer && widthLayer > heightLayer) {   
      slides[slideIndex-1].classList.remove("above");   
  }
  */
  //////// центрирование одиночных изображений /////////

}      
    
////////////////////////////  
/*
var sizeColumn0 = document.getElementsByClassName("column")[0];
var sizeColumn1 = document.getElementsByClassName("column")[1];
var sizeColumn2 = document.getElementsByClassName("column")[2];
var sizeColumn3 = document.getElementsByClassName("column")[3];
var sizeColumn13 = document.getElementsByClassName("column")[13];
 
var heightColumn0 = sizeColumn0.offsetHeight;
var heightColumn1 = sizeColumn1.offsetHeight;
var heightColumn2 = sizeColumn2.offsetHeight;
var heightColumn3 = sizeColumn3.offsetHeight;
var heightColumn13 = sizeColumn13.offsetHeight;

console.log(heightColumn0);   
console.log(heightColumn1); 
console.log(heightColumn2);   
console.log(heightColumn3);     
console.log(heightColumn13);
*/

/*
var description = document.getElementById("description");
   
var heightDescription = description.offsetHeight;
var widthDescription = description.offsetWidth;

console.log(heightDescription); 
console.log(widthDescription); 
*/

/*
var sizeImg0 = document.getElementsByTagName('img')[0];
var heightImg0 = sizeImg0.offsetHeight;

console.log(heightImg0); 
*/    

//var sizeGallery0 = document.getElementsByClassName("gallery")[13]; 

//var heightGallery0 = sizeGallery0.offsetHeight;                                     

//console.log(heightGallery0);

