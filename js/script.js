
"use strict"

let layer = document.getElementById("layer");
let iconClose = document.getElementById('close');
let grp = document.getElementById("group");

let order = document.getElementById("order");
let formLayer = document.getElementById("formLayer");
let modalForm = document.getElementById("modalForm");

let effect = document.getElementsByClassName("forEffects"); 
let pageScroll = document.getElementsByTagName("body")[0]; 


// функция отключения прокрутки страницы (body):
function disablePageScrolling () {
	 pageScroll.style.overflowY = "hidden";
}

// функция подключения прокрутки страницы (body):
function enablePageScrolling () {
	 pageScroll.style.overflowY = "visible"; // auto или ""
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

// вызов прозрачного слоя и модального окна для формы:    
order.onclick = function () {
	 formLayer.style.display = "block";
	 modalForm.style.display = "block";
	 onEffect();
	 //disablePageScrolling();
}

function showCard() {  
  grp.style.display = "block";  
  onEffect();
  disablePageScrolling(); 
} 

function hideGroup() {  
  grp.style.display = "none";  
  offEffect();
  enablePageScrolling();
} 

function hideformLayer() {  
  formLayer.style.display = "none";
  offEffect();
  //enablePageScrolling();
}
                   
function showGallery() {  
  layer.style.display = "block";
  iconClose.style.display = "block";  
  onEffect(); 
  disablePageScrolling();
       
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

//
// скрипт для формы - валидация, отправка:

// стандартная проверка что документ уже загружен:
document.addEventListener("DOMContentLoaded", function () {

   // перехватываем отправку формы по нажатию кнопки:
   const form = document.getElementById("form"); // присваиваем весь объект форм в переменную
   form.addEventListener("submit", formSend); // вешаем событие на переменную - при отправке формы скрипт 
// перейдёт в функцию formSend:
  
   async function formSend(e) {
      e.preventDefault(); // запрещаем стандартную отправку формы по нажатию - всё будет происходить в JS:
   
      // простая валидация формы:
      let error = formValidate(form); // переменная для результата работы formValidate
      
      let formData = new FormData(form); // эта строка вытягивает все данные полей
      formData.append("image", formImage.files[0]); // добавляем в эту переменную файл, полученный в функ. uploadFile
      
      // если error равен 0 - форма прошла валидацию
      // отправка с помощью ajax(а именно fetch):
      if (error === 0) {
      	form.classList.add("_sending"); // добавляем класс
        let response = await fetch( "sendmail.php", {
            method: "POST",
         	body: formData
         });
         // получаем ответ (в виде json) успешна ли отправка, и если да, то:
         if (response.ok) {
          	let result = await response.json();
          	alert(result.message); // ...выводим сообщение
          	formPreview.innerHTML = ""; // ...очищаем div с файлом
          	form.reset(); // ...очищаем поля формы
          	form.classList.remove("_sending"); 
         } else {
         	alert("Ошибка!");
         	form.classList.remove("_sending"); 
         }
      } else {
      	alert("Заполните обязательные поля!");
      }
   }
   
   function formValidate(form) {
   	let error = 0;
   	let formReq = document.querySelectorAll("._req"); // присваиваем сюда все объекты с классом ._req
   	
   	for (let index = 0; index < formReq.length; index++) {
   		const input = formReq[index];
   		formRemoveError(input);
   		
   		if ( input.classList.contains("_email") ) {
   			if ( emailTest(input) ) {
   				formAddError(input);
   				error++;
   			}
   		} else if ( input.getAttribute("type") === "checkbox" && input.checked === false ) {
   			formAddError(input);
   				error++;
   		} else {
   			if (input.value === "") {
   				formAddError(input);
   				error++;
   			}
   		}
   	}
   	return error;
   }
   
   function formAddError(input) {
   	input.parentElement.classList.add("_error");
   	input.classList.add("_error");
   }
   
   function formRemoveError(input) {
   	input.parentElement.classList.remove("_error");
   	input.classList.remove("_error");
   }
   
   function emailTest(input) {
   	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }
   
   // получаем инпут file в переменную:
   const formImage = document.getElementById("formImage");
   // получаем див для превью в переменную:
   const formPreview = document.getElementById("formPreview");
   
   // слушаем изменения в инпуте file:
   formImage.addEventListener("change", () => {
   	uploadFile( formImage.files[0] ); // в данном случае файл у нас один
   });
   
   function uploadFile(file) {
   	// проверяем тип файла:
   	if ( !["image/jpeg", "image/png", "image/gif"].includes(file.type) ) {
   		alert("Разрешены только изображения!");
   		formImage.value = "";
   		return;
   	}
   	// проверяем размер файла (<2 Мб)
   	if (file.size > 2 * 1024 * 1024) {
   		alert("Файл должен быть менее 2 Мб!");
   		return;
   	}
      
      var reader = new FileReader();
      reader.onload = function (e) {
      	formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
      };
      reader.onerror = function (e) {
      	alert("Ошибка!");
      };
   	reader.readAsDataURL(file);
   }
}); 








