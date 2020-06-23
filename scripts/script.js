"use strict";

var big=document.getElementById('main'); 
var gr=document.getElementById('field'); 
var main=document.getElementById('photo-field'); 
var field=document.getElementById('for-background');
var SVGElem=document.getElementById("SSS");
var canvas = document.getElementById("canvas");
      
function f_go(mpage)   {        // функция переключения вкладок
    switch (mpage) {
      	case 1:
            document.getElementById('for-background').style.display="flex";
            document.getElementById('for-element').style.display="none";
            document.getElementById('for-color').style.display="none";
            document.getElementById('for-text').style.display="none";
            document.getElementById('for-draw').style.display="none";
            document.getElementById('for-hand').style.display="none";
            document.getElementById('icon-button-background').style.background="#A63B4C";
            document.getElementById('icon-button-element').style.background="#BFA696";
            document.getElementById('icon-button-color').style.background="#BFA696";
            document.getElementById('icon-button-text').style.background="#BFA696";
            document.getElementById('icon-button-draw').style.background="#BFA696";
            document.getElementById('icon-button-hand').style.background="#BFA696";
            deactivateCanvas();
            clickSoundInit(); 
 			      break;
		    case 2:
            document.getElementById('for-background').style.display="none";
            document.getElementById('for-element').style.display="flex";
            document.getElementById('for-color').style.display="none";
            document.getElementById('for-text').style.display="none";
            document.getElementById('for-draw').style.display="none";
            document.getElementById('for-hand').style.display="none";
            document.getElementById('icon-button-background').style.background="#BFA696";
            document.getElementById('icon-button-element').style.background="#A63B4C";
            document.getElementById('icon-button-color').style.background="#BFA696";
            document.getElementById('icon-button-text').style.background="#BFA696";
            document.getElementById('icon-button-draw').style.background="#BFA696";
            document.getElementById('icon-button-hand').style.background="#BFA696";
            deactivateCanvas();
            clickSoundInit(); 
			      break;
		    case 3:
            document.getElementById('for-background').style.display="none";
            document.getElementById('for-element').style.display="none";
            document.getElementById('for-color').style.display="flex";
            document.getElementById('for-text').style.display="none";
            document.getElementById('for-draw').style.display="none";
            document.getElementById('for-hand').style.display="none";
            document.getElementById('icon-button-background').style.background="#BFA696";
            document.getElementById('icon-button-element').style.background="#BFA696";
            document.getElementById('icon-button-color').style.background="#A63B4C";
            document.getElementById('icon-button-text').style.background="#BFA696";
            document.getElementById('icon-button-draw').style.background="#BFA696";
            document.getElementById('icon-button-hand').style.background="#BFA696";
            deactivateCanvas();
            clickSoundInit();
            break;
		    case 4:
            document.getElementById('for-background').style.display="none";
            document.getElementById('for-element').style.display="none";
            document.getElementById('for-color').style.display="none";
            document.getElementById('for-text').style.display="flex";
            document.getElementById('for-draw').style.display="none";
            document.getElementById('for-hand').style.display="none";
            document.getElementById('icon-button-background').style.background="#BFA696";
            document.getElementById('icon-button-element').style.background="#BFA696";
            document.getElementById('icon-button-color').style.background="#BFA696";
            document.getElementById('icon-button-text').style.background="#A63B4C";
            document.getElementById('icon-button-draw').style.background="#BFA696";
            document.getElementById('icon-button-hand').style.background="#BFA696";
            deactivateCanvas();
            clickSoundInit(); 
			      break;
		    case 5:
            document.getElementById('for-background').style.display="none";
            document.getElementById('for-element').style.display="none";
            document.getElementById('for-color').style.display="none";
            document.getElementById('for-text').style.display="none";
            document.getElementById('for-draw').style.display="flex";
            document.getElementById('for-hand').style.display="none";
            document.getElementById('icon-button-background').style.background="#BFA696";
            document.getElementById('icon-button-element').style.background="#BFA696";
            document.getElementById('icon-button-color').style.background="#BFA696";
            document.getElementById('icon-button-text').style.background="#BFA696";
            document.getElementById('icon-button-draw').style.background="#A63B4C";
            document.getElementById('icon-button-hand').style.background="#BFA696";
            activateCanvas();
            clickSoundInit(); 
			      break;
      	case 6:
            document.getElementById('for-background').style.display="none";
            document.getElementById('for-element').style.display="none";
            document.getElementById('for-color').style.display="none";
            document.getElementById('for-text').style.display="none";
            document.getElementById('for-draw').style.display="none";
            document.getElementById('for-hand').style.display="flex";
            document.getElementById('icon-button-background').style.background="#BFA696";
            document.getElementById('icon-button-element').style.background="#BFA696";
            document.getElementById('icon-button-color').style.background="#BFA696";
            document.getElementById('icon-button-text').style.background="#BFA696";
            document.getElementById('icon-button-draw').style.background="#BFA696";
            document.getElementById('icon-button-hand').style.background="#A63B4C";
            deactivateCanvas();
            clickSoundInit(); 
			      break;
    }
}
// вкладка "Фоны"
document.getElementById('for-background').onclick=function uniClick(EO) {    //функция изменения цвета фона (заливки) поля при нажатии на кнопку с цветом
    EO=EO||window.event;
    var div=EO.target||EO.srcElement;
    if (div.getAttribute('data-color')) {
        var color=div.getAttribute('data-color');
        main.style.background=color;
    }
}
// раздел "элементы"       
function getElementPos(elem) {
      var bbox = elem.getBoundingClientRect();
      return {
          left: bbox.left + window.pageXOffset,
          top: bbox.top + window.pageYOffset,
          width: bbox.right -  bbox.left,
          height: bbox.bottom - bbox.top
      };
}

var countRect=1;  
var countSquare=1;    
var countCircle=1;
var countEllipse=1;
var countPoint=1;
var countLine=1;
var countPict=1;

function createSvg(){
   var dv=document.createElement('div');
   dv.className='';
   var svgshka=document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  svgshka.setAttribute('id', ''); 
  dv.appendChild(svgshka);
  SVGElem.appendChild(dv);  

}



function createRect() {
    var dv=document.createElement('div');
    dv.className='';
    var svgshka=document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    var rect=document.createElementNS("http://www.w3.org/2000/svg",'rect');
    rect.setAttribute("x","0");
    rect.setAttribute("y","0");
    rect.setAttribute("width", "100");
    rect.setAttribute("height","55");
    rect.setAttribute("fill","yellow");
    rect.setAttribute("stroke","yellow");
    rect.setAttribute('class','draggable');
    rect.setAttribute("id",'rect'+countRect);
    rect.setAttributeNS(null,'transform', "matrix(1 0 0 1 0 0)");
    rect.setAttributeNS(null,'onmousedown', 'selectElement(event)');
    getSound();     
    getVibro();
    svgshka.appendChild(rect);   
    dv.appendChild(svgshka);
    SVGElem.appendChild(dv);                                       
    
    console.log('Добавил прямоугольник' +' '+ 'id='+rect.id);
    countRect++;
}

           function createSquare() {
                  var sq=document.createElementNS("http://www.w3.org/2000/svg",'rect');
                  sq.setAttribute("x","0");
                  sq.setAttribute("y","0");
                  sq.setAttribute("width", "55");
                  sq.setAttribute("height","55");
                  sq.setAttribute("fill","yellow");
                  sq.setAttribute("stroke","yellow");
                  sq.setAttribute('class','draggable');
                  sq.setAttribute("id",'sq'+countSquare);
                  sq.setAttributeNS(null,'transform', "matrix(1 0 0 1 0 0)");
                  sq.setAttributeNS(null,'onmousedown', 'selectElement(event)');
                  getSound();     
                  getVibro();    
                  SVGElem.appendChild(sq);
                  console.log('Добавил квадрат' +' '+ 'id='+sq.id);
                  countSquare++;
             }
           
            function createCircle() {
                  var cir=document.createElementNS("http://www.w3.org/2000/svg",'circle');
                  cir.setAttribute("r","40");
                  cir.setAttribute("cx","40");
                  cir.setAttribute("cy","40");
                  cir.setAttribute("fill","yellow");
                  cir.setAttribute("stroke","yellow");
                  cir.setAttribute('class','draggable');
                  cir.setAttribute("id",'cir'+countCircle);
                  cir.setAttributeNS(null,'transform', "matrix(1 0 0 1 0 0)");
                  cir.setAttributeNS(null,'onmousedown', 'selectElement(event)');
                  getSound();     
                  getVibro();    
                  SVGElem.appendChild(cir);
                  console.log('Добавил окружность' +' '+ 'id='+cir.id);
                  countCircle++;
            }

            function createEllipse() {
                  var el=document.createElementNS("http://www.w3.org/2000/svg",'ellipse');
                  el.setAttribute("rx","60");
                  el.setAttribute("ry","40");
                  el.setAttribute("cx","60");
                  el.setAttribute("cy","40");
                  el.setAttribute("fill","yellow");
                  el.setAttribute("stroke","yellow");
                  el.setAttribute('class','draggable');
                  el.setAttribute("id",'el'+countEllipse);
                  el.setAttributeNS(null,'transform', "matrix(1 0 0 1 0 0)");
                  el.setAttributeNS(null,'onmousedown', 'selectElement(event)');
                  getSound();     
                  getVibro();    
                  SVGElem.appendChild(el);
                  console.log('Добавил эллипс' +' '+ 'id='+el.id);
                  countEllipse++;
             }

 
            function createPoint(a) {
                  var point=document.createElementNS("http://www.w3.org/2000/svg",'polygon');
                  point.setAttribute("points", a);
                  point.setAttribute("fill","yellow");
                  point.setAttribute("stroke","yellow");
                  point.setAttribute('class','draggable');
                  point.setAttribute("id",'point'+countPoint);
                  point.setAttributeNS(null,'transform', "matrix(1 0 0 1 0 0)");
                  point.setAttributeNS(null,'onmousedown', 'selectElement(event)');
                  getSound();     
                  getVibro();    
                  SVGElem.appendChild(point);
                  console.log('Добавил фигуру' +' '+ 'id='+point.id);
                  countPoint++;
             }

            function createLine(a) {
                  var line=document.createElementNS("http://www.w3.org/2000/svg",'polyline');
                  line.setAttribute("points", a);
                  line.setAttribute("fill","none");
                  line.setAttribute("stroke","yellow");
                  line.setAttribute('class','draggable');
                  line.setAttribute("id",'line'+countLine);
                  line.setAttributeNS(null,'transform', "matrix(1 0 0 1 0 0)");
                  line.setAttributeNS(null,'onmousedown', 'selectElement(event)');
                  getSound();     
                  getVibro();    
                  SVGElem.appendChild(line);
                  console.log('Добавил фигуру' +' '+ 'id='+line.id);
                  countLine++;
             }

              function createPict(EO) {
                   EO=EO||window.event;
                   selectedElement = EO.target;
                  var but=document.createElementNS("http://www.w3.org/2000/svg",'image');
                  but.setAttributeNS("http://www.w3.org/1999/xlink", "href", EO.target.getAttribute('style', 'background').slice(16,-25));
                  console.log(EO.target.getAttribute('style', 'background').slice(16,-25)); 
                  but.setAttribute('class','draggable');
                  but.setAttribute('x','0');
                  but.setAttribute('y','0');
                  but.setAttribute('width','100');
                  but.setAttribute('height','80');
                  but.setAttributeNS(null,'transform', "matrix(1 0 0 1 0 0)");
                  but.setAttributeNS(null,'onmousedown', 'selectElement(event)');
                  getSound();     
                  getVibro();    
                  but.setAttribute('id', 'pict'+countPict);
                  SVGElem.appendChild(but);
                  countPict++;
                }






           var selectedElement=0;
           var currentX = 0;
           var currentY = 0;
           var currentMatrix = 0;

       
        
            function selectElement(EO) {
                   EO=EO||window.event;
                   selectedElement = EO.target;
                   console.log('Выделил изображение' +' '+ 'id='+selectedElement.id) 
                   currentX = EO.clientX;
                   currentY = EO.clientY;
                   currentMatrix = selectedElement.getAttributeNS(null, "transform").slice(7,-1).split(' ');
         
                   for(var i=0; i<currentMatrix.length; i++) {
                        currentMatrix[i] = parseFloat(currentMatrix[i]);
                    }
        
                   selectedElement.setAttribute('stroke', 'blue');
                   selectedElement.setAttribute('stroke-dasharray', '10,10');
                   selectedElement.setAttribute('class','draggable selected');
           
                   SVGElem.appendChild(selectedElement);
                   console.log('Выделил изображение' + ' ' + 'id=' + selectedElement.id + ' ' + 'currentMatrix' + currentMatrix[0] +' '+ currentMatrix[1] + ' '+ currentMatrix[2] + ' '+ currentMatrix[3] + ' '  + currentMatrix[4] +' '+ currentMatrix[5]);
        
                   selectedElement.setAttributeNS(null, "onmousemove", "moveElement(event)");
                   selectedElement.setAttributeNS(null, "onmouseout", "deselectElement(event)");
                   selectedElement.setAttributeNS(null, "onmouseup", "deselectElement(event)");
                   selectedElement.setAttributeNS(null, 'onmousewheel', 'changeSize(event)');
                   selectedElement.setAttributeNS(null, 'ondblclick', 'skew(event)');      
              }
    

    
           function moveElement(EO){
                    EO=EO||window.event;
                    selectedElement = EO.target;
                    var dx = EO.clientX - currentX;
                    var dy = EO.clientY - currentY;
                    currentMatrix[4] += dx;
                    currentMatrix[5] += dy;
                    var newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
                    selectedElement.setAttributeNS(null, "transform", newMatrix);
                    currentX = EO.clientX;
                    currentY = EO.clientY;
                    console.log('Тащу изображение' +' '+ 'id='+selectedElement.id+' '+'currentMatrix' +' '+  currentMatrix[0] +' '+ currentMatrix[1]+' '+ currentMatrix[2]+' '+ currentMatrix[3]+' '  + currentMatrix[4] +' '+ currentMatrix[5]);
                    var cx=(selectedElement.getBoundingClientRect().left + selectedElement.getBoundingClientRect().width / 2)-SVGElem.getBoundingClientRect().left;
                    var cy=(selectedElement.getBoundingClientRect().top + selectedElement.getBoundingClientRect().height / 2)-SVGElem.getBoundingClientRect().top;
                   console.log('cx=' + cx + 'cy='+ cy);
            }




             function deselectElement(EO){
                    EO=EO||window.event;
                    selectedElement = EO.target;
                    console.log('Отпускаю изображение' +' '+ 'id='+selectedElement.id);
                    if (selectedElement != 0){
                        selectedElement.removeAttributeNS(null, "onmousemove");
                        selectedElement.removeAttributeNS(null, "onmouseout");
                        selectedElement.removeAttributeNS(null, "onmouseup");
                        selectedElement = 0;
                    }
              }


            function noHighLight(EO){
                  if ( !EO.target.classList.contains('draggable')) {
                     var dr=document.getElementsByClassName('draggable');
                     for ( var i=0; i<dr.length; i++ ) {
                           var dri=dr[i];
                           console.log('Отменяю выделение изображения' +' '+ 'id='+dri.id);
                           if (dri.classList.contains('text2')) {
                                 dri.style.border='none';
                                 dri.setAttribute('class','draggable text2');
                               } 
                             else {
                                 dri.setAttribute('stroke', dri.style.fill);
                                  dri.setAttribute('stroke-dasharray', '0,0');
                                  dri.setAttribute('class','draggable');
                              } 
                         sch = 1;
                       }
                   }
            }
      
    
      
           function changeSize(EO) {
                  if (EO.target.classList.contains('draggable')) {
                       EO=EO||window.event;
                       EO.preventDefault();
                       selectedElement = EO.target;
                      SVGElem.appendChild(selectedElement);
                                        
                      EO.preventDefault();
                           if (EO.wheelDelta > 0)  {    
                              currentMatrix[0] += 0.1;
                              currentMatrix[3] += 0.1;
                             }
                          else  {
                              currentMatrix[0] -= 0.1;
                             currentMatrix[3] -=0.1;
                           }

                    var newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
                    selectedElement.setAttributeNS(null, "transform", newMatrix);
                   console.log('Зумирую изображение' +' '+ 'id='+selectedElement.id+'currentMatrix' +' '+  currentMatrix[0] +' '+ currentMatrix[1]+' '+ currentMatrix[2]+' '+ currentMatrix[3]+' '  + currentMatrix[4] +' '+ currentMatrix[5]);
                 }
          }

           var sch=1; 
           function skew(EO) {
                   if (EO.target.classList.contains('draggable')) {
                       EO=EO||window.event;
                       EO.preventDefault();
                       selectedElement = EO.target;
                       console.log('currentMatrix[4]='+currentMatrix[4]+'currentMatrix[5]=' + currentMatrix[5]);
              
                       var cx=(selectedElement.getBoundingClientRect().left + selectedElement.getBoundingClientRect().width / 2)-SVGElem.getBoundingClientRect().left;
                       var cy=(selectedElement.getBoundingClientRect().top + selectedElement.getBoundingClientRect().height / 2)-SVGElem.getBoundingClientRect().top;
                      console.log('cx=' + cx + 'cy='+ cy);
 
                      currentMatrix[0]  = Math.cos(0.175*sch);
                      currentMatrix[1]  = Math.sin(0.175*sch);
                      currentMatrix[2]  = - Math.sin(0.175*sch);
                      currentMatrix[3]  = Math.cos(0.175*sch);
                      console.log('currentMatrix' +' '+  currentMatrix[0] +' '+ currentMatrix[1]+' '+ currentMatrix[2]+' '+ currentMatrix[3]+' '  + currentMatrix[4] +' '+ currentMatrix[5]);
           
                      sch++;
                      console.log('sch='+sch);
                  
                     var newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
                     selectedElement.setAttributeNS(null, "transform", newMatrix);
                     selectedElement.setAttributeNS(null, "-webkit-transform", newMatrix);

                     console.log('Поворачиваю изображение' +' '+ 'id='+selectedElement.id + 'currentMatrix' +' '+  currentMatrix[0] +' '+ currentMatrix[1]+' '+ currentMatrix[2]+' '+ currentMatrix[3]+' '  + currentMatrix[4] +' '+ currentMatrix[5]);
                }
           }



                  document.getElementById("clear-element").onclick = function clear2() {                                      // очистка от элементов
                               var dr=document.getElementsByClassName('selected');
                               console.log(dr.length);
                               for ( var i=0; i<dr.length; i++ ) {
                                      var dri=dr[i];
                                      SVGElem.removeChild(dri);
                                      clickAudio2.play();
                                 }
                         }

// вкладка "цвета"

            var p=document.getElementById("palette");
            function generatePalette(palette) {
                    for (var r = 0, max = 3; r <= max; r++) {
                        for (var g = 0; g <= max; g++) {
                            for (var b = 0; b <= max; b++) {
                                  var paletteBlock = document.createElement('div');
                                  paletteBlock.className = 'button-draw';
                                  paletteBlock.style.backgroundColor = (
                                        'rgb(' + Math.round(r * 255 / max) + ", "
                                                 + Math.round(g * 255 / max) + ", "
                                                 + Math.round(b * 255 / max) + ")"
                                   );
                                 palette.appendChild(paletteBlock);

                          }
                     }
                }
          }
             
            generatePalette(p);
  
                 var bdraw=document.getElementsByClassName("button-draw");
                  for (var i=1; i<bdraw.length; i++) {
                       bdraw[i].addEventListener('click', function changeColor(EO) {
                       EO=EO||window.event;
                        
                      var sel= document.querySelectorAll('.selected');
                                  for ( var i=0; i<sel.length; i++ )
                                         var seli=sel[i];
                                         seli.setAttribute('fill', EO.target.style.backgroundColor);
                                         seli.setAttribute('stroke', EO.target.style.backgroundColor);
                                             });
                       }


//   фоны



                function randomDiap(n,m) {        //случайное число из диапазона
                    return (Math.random()*(m-n+1))+n;
                }
                
                function generateColor() {
                  return '#' + Math.floor(Math.random()*16777215).toString(16)
                }
                
         
                function backgroundStar() {                   //создаем фон с звездочками                      
                   for (var i=0; i<500; i++) {
                           var stari=document.createElementNS("http://www.w3.org/2000/svg",'polygon');
                           stari.setAttribute("points","70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41");
                           stari.setAttribute('class','bgr');
                           stari.setAttribute("fill",generateColor());
                           stari.setAttribute("stroke",stari.style.fill);
                           stari.style.opacity=0.5;
                          stari.setAttributeNS(null,'transform', 'translate(' + randomDiap(0,600) + ',' + randomDiap(0,600) + ') scale(' + 0.1*randomDiap(0,0.1) + ') rotate('+ randomDiap(0,360)+')');
                         SVGElem.appendChild(stari);
                      }
                 }

              function backgroundHeart() {                   //создаем фон с сердечками
                     for (var i=0; i<500; i++) {
                          var hearti=document.createElementNS("http://www.w3.org/2000/svg",'path');
                          hearti.setAttribute("d","M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z");
                          hearti.setAttribute('class','bgr');
                          hearti.setAttribute("fill",generateColor());
                          hearti.setAttribute("stroke",hearti.style.fill);
                          hearti.style.opacity=0.5;
                          hearti.setAttributeNS(null,'transform', 'translate(' + randomDiap(0,600) + ',' + randomDiap(0,600) + ') scale(' + 0.15*randomDiap(0,0.1) + ') rotate('+ randomDiap(0,360)+')');
                         SVGElem.appendChild(hearti);
                     }
               }

function backgroundFlower() {                   //создаем фон с цветами
 
      for (var i=0; i<500; i++) {
   
           var floweri=document.createElementNS("http://www.w3.org/2000/svg",'path');
           floweri.setAttribute("d","M96.9,36.75A14.87,14.87,0,0,0,85.62,26.54a14.39,14.39,0,0,0-5.57-14A15.44,15.44,0,0,0,63.68,11.2a15.27,15.27,0,0,0-27-1,15.47,15.47,0,0,0-15.36,1.3A14.43,14.43,0,0,0,15.16,25.2,14.93,14.93,0,0,0,3.48,35a14.29,14.29,0,0,0,3.3,14.62A14.3,14.3,0,0,0,3.19,64.15a14.89,14.89,0,0,0,11.48,10A14.41,14.41,0,0,0,20.52,88a15.42,15.42,0,0,0,15.34,1.59,15.28,15.28,0,0,0,26.49.51,15.42,15.42,0,0,0,15.38-1,14.43,14.43,0,0,0,6.41-13.61A15,15,0,0,0,96,65.92a14.31,14.31,0,0,0-3-14.69A14.31,14.31,0,0,0,96.9,36.75");
           floweri.setAttribute('class','bgr');
          floweri.setAttribute("fill",generateColor());
           floweri.setAttribute("stroke",floweri.style.fill);
          floweri.style.opacity=0.5;
           floweri.setAttributeNS(null,'transform', 'translate(' + randomDiap(0,600) + ',' + randomDiap(0,600) + ') scale(' + 0.15*randomDiap(0,0.1) + ') rotate('+ randomDiap(0,360)+')');
        SVGElem.appendChild(floweri);
}

 }



function backgroundCircle() {                   //создаем фон с кругами
 
      for (var i=0; i<500; i++) {
   
           var circlei=document.createElementNS("http://www.w3.org/2000/svg",'circle');
           circlei.setAttribute("r","30");
            circlei.setAttribute('class','bgr');
          circlei.setAttribute("fill",generateColor());
           circlei.setAttribute("stroke",circlei.style.fill);
          circlei.style.opacity=0.5; 
           circlei.setAttributeNS(null,'transform', 'translate(' + randomDiap(0,600) + ',' + randomDiap(0,600) + ') scale(' + 0.15*randomDiap(0,0.1) + ') rotate('+ randomDiap(0,360)+')');
        SVGElem.appendChild(circlei);
}

 }




  document.getElementById("clear-background").onclick = function clear() {                                      // очистка фона
      main.style.background="#FAEBD7";
      var bgr=document.getElementsByClassName('bgr');
          for (var i=0; i< bgr.length; i++)
               bgr[i].setAttribute("visibility","hidden");
clickAudio2.play();
      
      };


function backgroundGradient1() {                     //создаем фон в виде градиента
       main.style.background='linear-gradient(#e66465, #9198e5)';
}



function backgroundGradient(n)
{
	switch (n)
	{
		case 1:
			 main.style.background='linear-gradient(#e66465, #9198e5)';
                         break;
		case 2:
			 main.style.background='linear-gradient(90deg, #aea4e3, #d3ffe8)';
                         break;
		case 3:
			 main.style.background='radial-gradient(circle, rgba(230,227,133,1) 0%, rgba(244,139,107,1) 100%)';
                         break;
		case 4:
			 main.style.background='linear-gradient(to bottom, #b721ff, #2af598, #fec051, #fee140, #fa709a)';
                         break;
		case 5:
			 main.style.background='repeating-linear-gradient(-45deg, #fff, #fff 25px, #e2edc1 25px, #e2edc1 50px)';
                         break;
	}
}



// текст


var countText=1;

function createText(){                                                                                               //добавить текст
              
    var text_cont=document.createElement('div'); 
    text_cont.className='draggable';                  
    
    text_cont.style.opacity='1';
    text_cont.style.width='auto';
    text_cont.style.position='absolute';
     text_cont.style.left=getElementPos(SVGElem).left+'px';
    text_cont.style.top=getElementPos(SVGElem).top+'px';


    text_cont.style.fontSize = '35px';
     text_cont.setAttribute('id', 'text'+countText);
     text_cont.setAttributeNS(null,'onmousedown', 'selectText(event)');


console.log(text_cont.getAttribute('id'));



    text_cont.textContent=escapeHTML(prompt('Введите текст или букву'));
                  getSound();     
                  getVibro();    
    main.appendChild(text_cont);
   countText++;

}


function escapeHTML(text) {   //валидация текста
    if ( !text )
        return text;
    text=text.toString()
        .split("&").join("&amp;")
        .split("<").join("&lt;")
        .split(">").join("&gt;")
        .split('"').join("&quot;")
        .split("'").join("&#039;");
    return text;
}



var currentX, currentY;


            function selectText(EO) {
                   EO=EO||window.event;
                 EO.preventDefault();

                   selectedElement = EO.target;
                
                   console.log('Выделил текст');
                   currentX = EO.clientX;
                   currentY = EO.clientY;
 console.log('currentX='+currentX+'currentY='+currentY);
          
                   selectedElement.style.borderColor='blue';
                   selectedElement.style.borderStyle='dashed';
                   selectedElement.setAttribute('class','draggable selected text2');
           
                   main.appendChild(selectedElement);

                   selectedElement.setAttributeNS(null, "onmousemove", "moveText(event)");
                   selectedElement.setAttributeNS(null, "onmouseout", "deselectText(event)");
                   selectedElement.setAttributeNS(null, "onmouseup", "deselectText(event)");
                   selectedElement.setAttributeNS(null, 'onmousewheel', 'changeSizeText(event)');
                   selectedElement.setAttributeNS(null, 'ondblclick', 'skewText(event)');      
              }
    

                
            function moveText(EO){
                  EO = EO || window.event;
                  EO.preventDefault();
                  selectedElement = EO.target;
                  var dx = EO.clientX - currentX;
                  var dy = EO.clientY - currentY;
                  selectedElement.style.left=getElementPos(SVGElem).left+dx+'px';
                 selectedElement.style.top=getElementPos(SVGElem).top+dy+'px';
                  main.appendChild(selectedElement);
            }


           function deselectText(EO){
                 if (selectedElement != 0){
                    selectedElement.removeAttributeNS(null, "onmousemove");
                    selectedElement.removeAttributeNS(null, "onmouseout");
                    selectedElement.removeAttributeNS(null, "onmouseup");
                 
                    selectedElement = 0;
                  }
           }

           var scale = 1;
           function changeSizeText(EO) {
                   EO = EO || window.event;
                   EO.preventDefault();
                   if (EO.target.classList.contains('draggable')) {
                         selectedElement = EO.target;
                         main.appendChild(selectedElement);
    
                         if (EO.wheelDelta > 0)  { 
                            scale += 0.05
                           }
                           else  {
                           scale -= 0.05
                         };
                        selectedElement.style.transform='scale(' + scale + ')';
                  }
           }


           var sch=1; 
           function skewText(EO) {
                    EO = EO || window.event;
                    EO.preventDefault();
                    if (EO.target.classList.contains('draggable')) {
                          selectedElement = EO.target;
                          main.appendChild(selectedElement);
                          selectedElement.style.transform='rotate(' + 10*sch + 'deg ) scale(' + scale + ')';
                          sch++;
                     }
           }

          function rewriteText(){
                   var sel_text=document.getElementsByClassName('selected text2');
                   for ( var i=0; i<sel_text.length; i++ ) {
                       sel_text[i].textContent=escapeHTML(prompt('Введите правильный текст или букву', sel_text[i].textContent));
                      main.appendChild(sel_text[i]);
                   }
         }

                  var FFclick=1;
                  function changeFontFamily(){
                        var sel_text=document.getElementsByClassName('selected text2');
                        for ( var i=0; i<sel_text.length; i++ ) {
                           
                                       var x=FFclick;
                                          switch (x) {
                                                          case 1:
                                          			sel_text[i].style.fontFamily='Times New Roman';
                                          			break;
                                          		  case 2:
                                         			sel_text[i].style.fontFamily='Courier New';
                                          			break;
                                                           case 3:
                                          			sel_text[i].style.fontFamily='Impact';
                                          			break;
                                          		  case 4:
                                         			sel_text[i].style.fontFamily='Lucida Sans Unicode';
                                          			break;
                                                          case 5:
                                          			sel_text[i].style.fontFamily='Century Gothic';
                                          			break;
                                          		  case 6:
                                         			sel_text[i].style.fontFamily='Brush Script MT';
                                          			break;
                                                          case 7:
                                          			sel_text[i].style.fontFamily='Tahoma';
                                          			break;
                                           		  default:
                                         			sel_text[i].style.fontFamily='Arial';
                                          			break;
                                          }
                               if (FFclick<7)   
                                    FFclick++; 
                                 else
                                    FFclick=1; 
                               main.appendChild(sel_text[i]);
                          console.log(FFclick);
                         }
                  }

                                
                 var FWclick=1;
                    function changeFontWeight(){
                        var sel_text=document.getElementsByClassName('selected text2');
                        for ( var i=0; i<sel_text.length; i++ ) {      
                                       var x=FWclick;
                                          switch (x) {
                                                          case 1:
                                          			sel_text[i].style.fontWeight='200';
                                          			break;
                                          		  case 2:
                                         			sel_text[i].style.fontWeight='400';
                                          			break;
                                                           case 3:
                                          			sel_text[i].style.fontWeight='600';
                                          			break;
                                          		  case 4:
                                         			sel_text[i].style.fontWeight='800';
                                          			break;
                                                          default:
                                         			sel_text[i].style.fontWeight='400';
                                          			break;
                                          }
                               if (FWclick<4)   
                                    FWclick++; 
                                 else
                                    FWclick=1; 
                               main.appendChild(sel_text[i]);
                          console.log(FWclick);              
                        }                          
                    }

                    var FSclick=1;
                    function changeFontStyle() {
                        var sel_text=document.getElementsByClassName('selected text2');
                        for ( var i=0; i<sel_text.length; i++ ) {      
                                       var x=FSclick;
                                          switch (x) {
                                                          case 1:
                                          			sel_text[i].style.fontStyle='italic';
                                          			break;
                                          		  case 2:
                                         			sel_text[i].style.fontStyle='normal';
                                          			break;
                                                          default:
                                         			sel_text[i].style.fontStyle='normal';
                                          			break;
                                          }
                               if (FSclick<2)   
                                    FSclick++; 
                                 else
                                    FSclick=1; 
                               main.appendChild(sel_text[i]);
                          console.log(FSclick);              
                        }                                              
                    }

                      var TCclick=1;
                      function changeTextColor() {
                        var sel_text=document.getElementsByClassName('selected text2');
                        for ( var i=0; i<sel_text.length; i++ ) {
                           
                                       var x=TCclick;
                                          switch (x) {
                                                          case 1:
                                          			sel_text[i].style.color='red';
                                          			break;
                                          		  case 2:
                                         			sel_text[i].style.color='maroon';
                                          			break;
                                                           case 3:
                                          			sel_text[i].style.color='purple';
                                          			break;
                                          		  case 4:
                                         			sel_text[i].style.color='fuchsia';
                                                                break;
                                                          case 5:
                                          			sel_text[i].style.color='orange';
                                          			break;
                                          		  case 6:
                                         			sel_text[i].style.color='yellow';
                                          			break;
                                                          case 7:
                                          			sel_text[i].style.color='gold';
                                          			break;
                                                          case 8:
                                          			sel_text[i].style.color='olive';
                                          			break;
                                                          case 9:
                                          			sel_text[i].style.color='lime';
                                          			break;
                                          		  case 10:
                                         			sel_text[i].style.color='green';
                                          			break;
                                                           case 11:
                                          			sel_text[i].style.color='aqua';
                                          			break;
                                          		  case 12:
                                         			sel_text[i].style.color='teal';
                                                                break;
                                                          case 13:
                                          			sel_text[i].style.color='blue';
                                          			break;
                                          		  case 14:
                                         			sel_text[i].style.color='navy';
                                          			break;
                                                          case 15:
                                          			sel_text[i].style.color='brown';
                                          			break;
                                          		  case 16:
                                         			sel_text[i].style.color='white';
                                          			break;
                                                           case 17:
                                          			sel_text[i].style.color='silver';
                                          			break;
                                          		  case 18:
                                         			sel_text[i].style.color='gray';
                                                                break;
                                                          case 19:
                                          			sel_text[i].style.color='black';
                                          			break;
                                          		 default:
                                         			sel_text[i].style.color='black';
                                          			break;
                                          }
                               if (TCclick<19)   
                                    TCclick++; 
                                 else
                                    TCclick=1; 
                               main.appendChild(sel_text[i]);
                          console.log(TCclick);
                         }                      
                      }

                      var LCclick=1;
                      function changeLetterCase() {
                        var sel_text=document.getElementsByClassName('selected text2');
                        for ( var i=0; i<sel_text.length; i++ ) {
                           
                                       var x=LCclick;
                                          switch (x) {
                                                          case 1:
                                          			sel_text[i].style.textTransform='uppercase';
                                          			break;
                                          		  case 2:
                                         			sel_text[i].style.textTransform='lowercase';
                                          			break;
                                                           case 3:
                                          			sel_text[i].style.textTransform='capitalize';
                                          			break;
                                          		  case 4:
                                         			sel_text[i].style.textTransform='none';
                                                                break;
                                          		 default:
                                         			sel_text[i].style.textTransform='none';
                                          			break;
                                          }
                               if (LCclick<4)   
                                    LCclick++; 
                                 else
                                    LCclick=1; 
                               main.appendChild(sel_text[i]);
                          console.log(LCclick);
                         }                                            
                      }
                      var DTclick=1;
                      function decorateText() {
                                      var sel_text=document.getElementsByClassName('selected text2');
                                      for ( var i=0; i<sel_text.length; i++ ) {
                                                 
                                                var x=DTclick;
                                                switch (x) {
                                                        case 1:
                                                                sel_text[i].style.textDecoration='underline';
                                                                break;
                                                        case 2:
                                                               	sel_text[i].style.textDecoration='overline';
                                                                break;
                                                       case 3:
                                                                sel_text[i].style.textDecoration='line-through';
                                                                break;
                                                      case 4:
                                                               	sel_text[i].style.textDecoration='none';
                                                                 break;
                                                      default:
                                                               	sel_text[i].style.textDecoration='none';
                                                                break;
                                                 }
                                      if (DTclick<4)   
                                           DTclick++; 
                                          else
                                           DTclick=1; 
                                      main.appendChild(sel_text[i]);
                                      console.log(DTclick);
                                      }                                            
                      }
                    var DLTclick=1;
                    function decorateLineText(){
                        var sel_text=document.getElementsByClassName('selected text2');
                        for ( var i=0; i<sel_text.length; i++ ) {
                           
                                       var x=DLTclick;
                                          switch (x) {
                                                          case 1:
                                          			sel_text[i].style.textDecorationStyle='double';
                                          			break;
                                          		  case 2:
                                         			sel_text[i].style.textDecorationStyle='dotted';
                                          			break;
                                                           case 3:
                                          			sel_text[i].style.textDecorationStyle='dashed';
                                          			break;
                                          		  case 4:
                                         			sel_text[i].style.textDecorationStyle='wavy';
                                                                break;
                                          		  case 5:
                                         			sel_text[i].style.textDecorationStyle='solid';
                                                                break;
                                          		 default:
                                         			sel_text[i].style.textDecorationStyle='solid';
                                          			break;
                                          }
                               if (DLTclick<5)   
                                    DLTclick++; 
                                 else
                                    DLTclick=1; 
                               main.appendChild(sel_text[i]);
                          console.log(DLTclick);
                         }                                            
                    }
                    var TShclick=1;
                    function createTextShadow(){
                        var sel_text=document.getElementsByClassName('selected text2');
                        for ( var i=0; i<sel_text.length; i++ ) {
                           
                                       var x=TShclick;
                                          switch (x) {
                                                          case 1:
                                          			sel_text[i].style.textShadow='1px 1px 0 red';
                                          			break;
                                          		  case 2:
                                         			sel_text[i].style.textShadow='2px 2px 0 grey';
                                          			break;
                                                           case 3:
                                          			sel_text[i].style.textShadow='1px 1px 5px red';
                                          			break;
                                          		  case 4:
                                         			sel_text[i].style.textShadow='5px 5px 1px blue';
                                                                break;
                                          		  case 5:
                                         			sel_text[i].style.textShadow='2px 2px 2px rgba(128,128,128,0.83)';
                                                                break;
                                          		 default:
                                         			sel_text[i].style.textShadow='-5px 5px 0px #00e6e6, -10px 10px 0px #01cccc, -15px 15px 0px #00bdbd';
                                          			break;
                                          }
                               if (TShclick<5)   
                                    TShclick++; 
                                 else
                                    TShclick=1; 
                               main.appendChild(sel_text[i]);
                          console.log(TShclick);
                         }                                   
                    }


                document.getElementById("clear-text").onclick = function clear3() {                                      // очистка от текста
                        var dr=document.getElementsByClassName('selected');
                        for ( var i=0; i<dr.length; i++ ) {
                              var dri=dr[i];
                              main.removeChild(dri);
                              clickAudio2.play();
                         }
                }


//рисовалка


           var p2=document.getElementById("palette2");
           function generatePalette(palette) {
  
      
            for (var r = 0, max = 3; r <= max; r++) {
              for (var g = 0; g <= max; g++) {
                for (var b = 0; b <= max; b++) {
                  var paletteBlock = document.createElement('div');
                  paletteBlock.className = 'button-draw';
                  paletteBlock.addEventListener('click', function changeColor(e) {
                    context.globalCompositeOperation = 'source-over';
                    context.strokeStyle = e.target.style.backgroundColor;
                  });
       
                  paletteBlock.style.backgroundColor = (
                    'rgb(' + Math.round(r * 255 / max) + ", "
                    + Math.round(g * 255 / max) + ", "
                    + Math.round(b * 255 / max) + ")"
                  );
       
                  palette.appendChild(paletteBlock);
                }
              }
            }
          }

           generatePalette(p2);

  

           var canvas = document.createElement('canvas');

           if ( main.offsetWidth == '600' ) {
           canvas.width=600;
           canvas.height=600;
           } else {
           canvas.width=300;
           canvas.height=300;

           }

            function activateCanvas() {
                   canvas.setAttribute('style', 'position:relative;');
                   main.appendChild(canvas);
           }

            function deactivateCanvas() {
                   canvas.setAttribute('style', 'pointer-events: none;  position:relative;'); 
           }
   
           var context = canvas.getContext("2d");
           console.log('канвас создан');

           context.lineCap = "round";                                           // переменные для рисования
           context.lineWidth = 6;
           console.log('кисть создана');
           
              
              canvas.onmousemove = function drawIfPressed (e) {                                  // На любое движение мыши по canvas будет выполнятся эта функция
                   var x = e.offsetX;                                                                                    // в "e"  попадает экземпляр MouseEvent
                   var y = e.offsetY; 
                   var dx = e.movementX;
                   var dy = e.movementY;
          
                    console.log('x='+x+'y='+y+'dx=' + dx+'dy=' + dy);
           
                
               
                if (e.buttons > 0) {                                                                                     // Проверяем зажата ли какая-нибудь кнопка мыши (если да - то рисуем)
                  context.beginPath();
                  context.moveTo(x, y);
                  context.lineTo(x - dx, y - dy);
                  context.stroke();
                  context.closePath();
                 }
              };

 
               document.getElementById("clear-canvas").onclick = function clear() {                                      // очистка изображения от нарисованного рисунка
                     context.clearRect(0, 0, canvas.width, canvas.height);
                    clickAudio2.play();
               };



   

  var er=document.getElementById('eraser');


er.addEventListener('click', start, false);


var RAF=
        // находим, какой метод доступен
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        // ни один не доступен
        // будем работать просто по таймеру
        function(callback)
            { window.setTimeout(callback, 1000 / 60); }
   ;

     
 


function start (){
                      var er2=document.createElement('img');
  
                         var src=er.getAttribute("style", "background").slice(16,-3);
                      er2.setAttribute('src',src);
                     er2.setAttribute('id','img_eraser');
                      er2.style.width='30px';   
                       er2.style.height='30px'; 
        er2.style.transitionDuration='1s';        
 er2.style.transitionTimingFunction='linear';

               er2.style.left=getElementPos(er).left+'px';
        er2.style.top=getElementPos(er).top+'px';

       main.setAttributeNS(null,'onmousedown', 'pointEraser(event)');
                      

console.log('размер ластика=' + er2.style.width +'*'+ er2.style.height);    
                     er2.style.position='absolute';  
      
console.log('положение ластика=' + er2.style.left+er2.style.top);             
console.log('положение ластика=' + 'getElementPos(er).left=' +getElementPos(er).left +  ' ' + 'getElementPos(er).top=' + getElementPos(er).top);     


  big.appendChild(er2);

console.log(getElementPos(er2));

var zx=getElementPos(SVGElem).left -getElementPos(er).left;
var zy=getElementPos(SVGElem).top-getElementPos(er).top;

console.log('zx='+zx+'zy='+zy);

setTimeout( function()
        {
        er2.style.transform='translateZ(0) translateX('+zx+'px) translateY('+zy+'px)';
        },0); 
       
 main.appendChild(er2);



context.globalCompositeOperation = 'destination-out'; // изменяем параметр, чтобы стиралось
context.fillStyle="rgba(255,255,255,1)"; // зададим белый цвет, чтобы проверить, что не закрашивается
context.beginPath(); 
context.arc(120, 80, 70, 0, Math.PI*2, FALSE); 
context.closePath(); 
context.fill(); 
context.globalCompositeOperation = 'source-over'; // возвращаем по-умолчанию

}

           function pointEraser(EO) {
                   EO=EO||window.event;

  
var er2=document.getElementById('img_eraser');
           
console.log(getElementPos(er2));

        var clickX=Math.round(EO.pageX-getElementPos(SVGElem).left);
        var clickY=Math.round(EO.pageY-getElementPos(SVGElem).top);

console.log('EO.pageX='+EO.pageX+'EO.pageY='+EO.pageY);
console.log('clickX='+clickX+'clickY='+clickY);

     var zx1=EO.pageX-getElementPos(er).left;
     var zy1=EO.pageY-getElementPos(er).top;

console.log('getElementPos(er).left='+getElementPos(er).left+'getElementPos(er).top='+getElementPos(er).top);

console.log('zx1='+zx1+'zy1='+zy1);

 
    setTimeout( function()
        {
        er2.style.transform='translateZ(0) translateX('+zx1+'px) translateY('+zy1+'px)';
        },0); 

main.appendChild(er2);


              
                   main.setAttributeNS(null, "onmousemove", "moveEraser(event)");
                   main.setAttributeNS(null, "onmouseleave", "deleteEraser(event)");
                   main.setAttributeNS(null, "onmouseup", "unpointEraser(event)");
           
             }


   
          function moveEraser(EO){
 EO=EO||window.event;

var er2=document.getElementById('img_eraser');

  var zx1=EO.pageX-getElementPos(er).left;
     var zy1=EO.pageY-getElementPos(er).top;


    setTimeout( function()
        {
        er2.style.transform='translateZ(0) translateX('+zx1+'px) translateY('+zy1+'px)';
        },0); 

main.appendChild(er2);
  

}


             function unpointEraser(EO){
   EO=EO||window.event;
    var er2=document.getElementById('img_eraser');
   main.removeAttributeNS(null, "onmousemove");
       }
       

function deleteEraser(EO) {
    var er2=document.getElementById('img_eraser');

  main.removeAttributeNS(null, "onmouseleave");
 main.removeAttributeNS(null, "onmouseup");
main.removeChild(er2);


}

 

// управление клавишами клавиатуры

                  
                  
                  document.addEventListener('keydown',kD, false);  
                  document.addEventListener('keyup',kUP, false);   
                  
                  function kUP(EO) {
                      EO=EO || window.event;
                      EO.preventDefault();
                      if (EO.keyCode == 46) {   //delete
                          removeAllPict()
                      }
                  }


                 function kD(EO) {
                          EO=EO || window.event;
                          EO.preventDefault();
                      
                      
                          if (EO.keyCode == 83) {    //S
                              selectElement2();
                          }
                      
                      
                      
                          if (EO.keyCode == 37) {    //стрелка влево
                              moveElement_tab(-2,0);
                          }
                          if (EO.keyCode == 39) {   //стрелка вправо
                              moveElement_tab(2,0);
                          }
                          if (EO.keyCode == 38) {   //стрелка вверх
                              moveElement_tab(0,-2);
                          }
                          if (EO.keyCode == 40) {   //стрелка вниз
                              moveElement_tab(0,2);
                          }
                          if (EO.ctrlKey && EO.keyCode == 37) {    //ctrl стрелка влево
                              moveText_tab(-2,0);
                          }
                          if (EO.ctrlKey && EO.keyCode == 39) {   //ctrl стрелка вправо
                              moveText_tab(2,0);
                          }
                          if (EO.ctrlKey && EO.keyCode == 38) {   //ctrl стрелка вверх
                              moveText_tab(0,-2);
                          }
                          if (EO.ctrlKey && EO.keyCode == 40) {   //ctrl стрелка вниз
                              moveText_tab(0,2);
                          }
                          if (EO.keyCode == 107) {  //+
                              changeSize_tab(0.1,0.1);
                          }
                      
                          if (EO.keyCode == 109) {  // -
                              changeSize_tab(-0.1,-0.1);
                          }
                          if (EO.ctrlKey && EO.keyCode == 107) {  //ctrl + 
                              changeSizeText_tab(0.1);
                          }
                      
                          if (EO.ctrlKey && EO.keyCode == 109) {  // ctrl -
                              changeSizeText_tab(-0.1);
                          }
                      
                          if (EO.keyCode == 82) {  // R
                              skew_tab(0.175);
                          }
                          if (EO.ctrlKey && EO.keyCode == 82) {  // ctrl R
                              skewText_tab(0.175);
                          }
                         
                          
                          if (EO.keyCode == 68) {  // D
                              noHighLight2();
                          }
                
                }






                function moveElement_tab(dx,dy){
                          currentMatrix[4] += dx;
                          currentMatrix[5] += dy;
                          var newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
                          var dr=document.getElementsByClassName('selected');
                          for (var i=0; i<dr.length; i++){
                                dr[i].setAttributeNS(null, "transform", newMatrix);
                          }
                }
                
                
                
                function moveText_tab(dx,dy){
                        var dr=document.getElementsByClassName('selected text2');
                        for (var i=0; i<dr.length; i++){ 
                                dr[i].style.left=getElementPos(dr[i]).left+dx+'px';
                                dr[i].style.top=getElementPos(dr[i]).top+dy+'px';
                        }
                }
                
                
                function changeSize_tab(dx,dy) {
                        var dr=document.getElementsByClassName('selected');
                        currentMatrix[0] += dx;
                        currentMatrix[3] += dy;
                        var newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
                        for (var i=0; i<dr.length; i++){
                               dr[i].setAttributeNS(null, "transform", newMatrix);
                        }
                }
                  
                  
                function changeSizeText_tab(dx) {
                        var dr=document.getElementsByClassName('selected text2');
                        scale += dx;
                        for (var i=0; i<dr.length; i++){
                                dr[i].style.transform='scale(' + scale + ')';
                        }
                }
                
                var sch1=1; 
                function skew_tab(a) {
                        var dr=document.getElementsByClassName('selected');
                        currentMatrix[0]  = Math.cos(a*sch1);
                        currentMatrix[1]  = Math.sin(a*sch1);
                        currentMatrix[2]  = - Math.sin(a*sch1);
                        currentMatrix[3]  = Math.cos(a*sch1);
                        sch1++;
                        var newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
                        for (var i=0; i<dr.length; i++){
                                dr[i].setAttributeNS(null, "transform", newMatrix);
                         }
                 }



              var sch2=1; 
              function skewText_tab(a) {
                        var dr=document.getElementsByClassName('selected'); 
                        for (var i=0; i<dr.length; i++){
                              dr[i].style.transform='rotate(' + a*sch2 + 'deg ) scale(' + scale + ')';
                              sch2++;
                        }
              }
              
              
              
              var selectedCount=0;
                  
              function selectElement2() {
                        var dr=document.getElementsByClassName('draggable'); 
                        console.log(dr);
                        if (selectedCount<dr.length) {
                             console.log(selectedCount);
                             currentMatrix = dr[selectedCount].getAttributeNS(null, "transform").slice(7,-1).split(' ');
                             console.log(currentMatrix);
                                 
                                           for(var k=0; k<currentMatrix.length; k++) {
                                                currentMatrix[k] = parseFloat(currentMatrix[k]);
                                            }
                            dr[selectedCount].setAttribute('stroke', 'blue');
                            dr[selectedCount].setAttribute('stroke-dasharray', '10,10');
                            dr[selectedCount].setAttribute('class','draggable selected');
                         }
                        if ((selectedCount-dr.length)==-1)
                                selectedCount=0;
                         else
                                selectedCount++;
                        console.log(selectedCount);
              }                 




var deselectedCount=0;

function noHighLight2(){
var dr=document.getElementsByClassName('draggable');
if (deselectedCount<dr.length) {

   if (dr[deselectedCount].classList.contains('text2')) {
      dr[deselectedCount].style.border='none';
       dr[deselectedCount].setAttribute('class','draggable text2');
       } else {
              dr[deselectedCount].setAttribute('stroke', dr[deselectedCount].style.fill);
              dr[deselectedCount].setAttribute('stroke-dasharray', '0,0');
      dr[deselectedCount].setAttribute('class','draggable');
        } 
      }
if ((deselectedCount-dr.length)==-1)
deselectedCount=0;
else
deselectedCount++;

          }



//touchscreen





main.addEventListener("touchstart",fieldTouchStart, false);                          
main.addEventListener("touchmove",fieldTouchMove, false);
main.addEventListener("touchend", fieldTouchEnd, false);
main.addEventListener("touchcancel",fieldTouchCancel, false);
console.log('обработчики установлены');


var touchOffsetX, touchOffsetY;


function fieldTouchStart(EO) {// обработчик вызывается, когда палец касается поля
EO=EO || window.event;
EO.preventDefault();
EO.stopPropagation();

selectedElement = EO.target;

if (selectedElement.classList.contains("draggable") && EO.targetTouches.length == 1)   {                //если попали по изображению и одно касание
var touch=EO.targetTouches[0];

        selectedElement.ready = true;
        selectedElement.move_type = 'move';
     


  touchOffsetX = touch.pageX - touch.target.offsetLeft;                 //считает изменение положения  мыши от начала объекта
        touchOffsetY = touch.pageY - touch.target.offsetTop;
console.log('touchOffsetX='+touchOffsetX+'touchOffsetY='+touchOffsetY);

    }

console.log('тач старт'); 


}



function fieldTouchMove(EO) {
EO=EO || window.event;
EO.preventDefault();
EO.stopPropagation();
console.log('Vpered');
 var touch = event.targetTouches[0];

             var selectedElement=event.target;
    if ( !selectedElement|| !selectedElement.ready) return;  // элемент не зажат

    if (selectedElement.classList.contains("draggable")  && selectedElement.move_type == 'move' ) {
    console.log('da');

 

selectedElement.style.left = touch.pageX-touchOffsetX + 'px';
selectedElement.style.top = touch.pageY-touchOffsetY + 'px';



    }


}


function fieldTouchEnd(EO) {                        // обработчик вызывается, когда палец уходит с мяча

EO=EO || window.event;
EO.preventDefault();
EO.stopPropagation();
 

             var selectedElement=event.target;
    if (selectedElement) {
        selectedElement.ready = false;
    }



}


function fieldTouchCancel(EO) {                       // обработчик вызывается, когда что-либо прерывает касание
// (пришёл звонок, изменилась ориентация экрана...)
// надо удалить все


             var selectedElement=event.target;
   if (selectedElement) {
        selectedElement.ready = false;
    }

}















//загрузка своего изображения

var fileSelect = document.getElementById("button-load"), 
    fileElem = document.getElementById("fileElem");
    

fileSelect.addEventListener("click", function (EO) {
EO=EO||window.event;
   EO.preventDefault();
    if (fileElem) {
        fileElem.click();
    }
}, false);

   var countImg=1;
function handleFiles() {                        
    var file = document.querySelector('input[type=file]').files[0];
    var my_img = document.createElement("img");
    
     var reader = new FileReader();
    reader.onloadend = function() {  my_img.src = reader.result; };
if (file)
    reader.readAsDataURL(file);
else
    my_img.src = "";
  

    my_img.className='';                  
    my_img.style.left=getElementPos(SVGElem).left+'px';
    my_img.style.top=getElementPos(SVGElem).top+'px';
    my_img.style.maxWidth='200px';

    my_img.style.position='absolute';
    my_img.style.transform = 'rotatez(0deg)';
    my_img.setAttributeNS(null, 'onmousedown', 'selectText(event)');
    my_img.setAttribute('id', 'img'+countImg);
    my_img.setAttribute('class', 'draggable');
                  getSound();     
                  getVibro();    
    main.appendChild(my_img);
    countImg++;
}




//очистка всего рабочего поля

function removeAllPict(EO){
EO=EO||window.event;
   EO.preventDefault();
context.clearRect(0, 0, canvas.width, canvas.height);
main.style.background='#FAEBD7';
while (SVGElem.firstChild) {
    SVGElem.removeChild(SVGElem.firstChild);
}

var ch=main.childNodes;
console.log(ch);

while (ch.length>1) {

for (var i=0; i<ch.length; i++) {

 if (!(ch[i].nodeName=='svg') )                 
    main.removeChild(ch[i]);
}

}
clickAudio2.play();
}






//сохранение картинки (кнопка сохранения картинки)

var pictCont = document.getElementById('savePictureCont');
var pictReady = document.getElementById('readyImgMsg');
var pictPrepare = document.getElementById('prepareImgMsg');

function savePictLoc(EO){
EO=EO||window.event;
   EO.preventDefault();

    pictCont.style.display = 'block';

    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    var scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );

    pictCont.style.height = scrollHeight + 'px';
    pictCont.style.width = scrollWidth + 'px';

    pictCont.style.minHeight = '700px';



    html2canvas(main).then(canvas => {                                      //используем библиотеку JavaScript 'Html2Canvas' для захвата и вывод скрин-шота рабочего поля
        //pictCont.appendChild(canvas);                                         //оставляем в комментарии, иначе отобразится 2 изображения в режиме сохранения 
        pictReady.style.display = 'flex';
        pictPrepare.style.display = 'none';

        var globalImg = canvas.toDataURL("image/png");                      //получаем данные  изображения в формате base64
        var imgCont = document.createElement("img");
        imgCont.setAttribute('src',globalImg);
        pictCont.appendChild(imgCont);
clickAudio3.play();;

    });

}


function closePrepPict(){
    pictCont.style.display = 'none';
    pictReady.style.display = 'none';
    pictPrepare.style.display = 'block';

    pictCont.removeChild(pictCont.lastChild);
}



// сохранить аякс 

var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
var info;                                                                                                                //массив хранящихся данных (изображений)
var updatePassword;
var stringName='RIAZANOVA_IMAGE_EDITOR';

function storeInfo(EO) {                                                    //отправка данных (изображений) на сервер при нажатии кнопки и сохранение
EO=EO||window.event;
   EO.preventDefault();
    updatePassword=Math.random();
    $.ajax( {
            url : ajaxHandlerScript, 
            type : 'POST', dataType:'json',
            data : { f : 'LOCKGET', n : stringName, 
                        p : updatePassword },
           cache : false, 
          success : lockGetReady, 
          error : errorHandler
        }
    );
}

function lockGetReady(callresult) {                           // данные (изображения) получены, добавляет, показывает, сохраняет
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else {
        info=[];
        if ( callresult.result!="" ) { // либо строка пустая - изображений нет
            // либо в строке - JSON-представление массива изображений
             info=JSON.parse(callresult.result);
             // вдруг кто-то сохранил мусор вместо RIAZANOVA_IMAGE_EDITOR?
             if ( !Array.isArray(info) )
                info=[];
             }

        html2canvas(main).then(canvas => {               
          var myimg = canvas.toDataURL("image/png");      //.replace("image/png", "image/octet-stream");       //получение данных изображения  в формате base64
           info.push(myimg);                                                                                                                        //добавляем данные в массив изображений

            showImages();

            $.ajax( {
                    url : ajaxHandlerScript, 
                    type : 'POST', dataType:'json',
                    data : { f : 'UPDATE', n : stringName, 
                                v : JSON.stringify(info), p : updatePassword },
                    cache : false, 
                    success : updateReady, 
                    error : errorHandler
                }
            );

        });


     }
}

function updateReady(callresult) {                            //изображения вместе с новым сохранены на сервере
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else 
        alert('Изображение опубликовано на сервере')
}

function restoreInfo() {                                               // получает изображения с сервера и потом показывает
    $.ajax(  {
            url : ajaxHandlerScript, 
            type : 'POST', dataType:'json',
            data : { f : 'READ', n : stringName },
            cache : false, 
            success : readReady, 
            error : errorHandler

        }
    );
}







function readReady(callresult) {                                    // изображения получены - показывает
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else {
        info=[];   
        if ( callresult.result!="" ) {                                   // либо строка пустая - изображений нет
                                                                                  // либо в строке - JSON-представление массива изображений
        info=JSON.parse(callresult.result);
                         // вдруг кто-то сохранил мусор вместо RIAZANOVA_IMAGE_EDITOR?
            if ( !Array.isArray(info) )
                info=[];
            }
        showImages();
    }

}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}

var view_myimg = document.getElementById('viev-img');                    //место  для просмотра
var number_img=0;
function showImages(){
 
        view_myimg.setAttribute('src',info[number_img]);          //заливаем первую

}


 

// открыть галерею

function openView(EO) {
EO=EO||window.event;
   EO.preventDefault();
    restoreInfo();
    $( "#viewer-section" ).toggle( "slow", function() {                //jQuery метод .toggle() позволяет отобразить или скрыть выбранные элементы
        // Animation complete.
    });
}




//закрыть галерею

function closeViever() {
    $( "#viewer-section" ).hide();
}

//показ следующего изображения
function nextPicture() {
number_img++;
if ( number_img<info.length) {
     
        view_myimg.setAttribute('src',info[number_img]);          
 } 


}

//показ предыдущего изображения

function previusePicture() {

number_img--;
if ( number_img>=0) {
         view_myimg.setAttribute('src',info[number_img]);          
}


   
}


// вибро и звуки

function getVibro() {
    if ( navigator.vibrate ) {                                                                  // есть поддержка Vibration API?
            window.navigator.vibrate(300);                                            // вибрация 0,3с
    }
}


var clickAudio=new Audio("http://www.muppetlabs.com/~breadbox/software/tworld/wav/ding.wav");   //мягкий звонок на стойке
var clickAudio2=new Audio("http://blogfiles.wfmu.org/KF/2006/12/glass/bathtubsplash.wav");             // мягкий всплеск
var clickAudio3=new Audio("http://www.utc.fr/si28/ProjetsUpload/P2006_si28p004/flash_puzzle/sons/rush/crowd5.wav");  //аплодисменты

 function clickSoundInit() {
        clickAudio.play();                                         // запускаем звук
        clickAudio.pause();                                      // и сразу останавливаем
    }

function getSound(){
    clickAudio.currentTime=0;                               // в секундах
    clickAudio.play();
}







//SPA


//#main - главная
//#about - о нас
//#viewer - галерея готовых изображений, сохраненных ранее


           window.onhashchange=switchToStateFromURLHash; // отслеживаем изменение закладки в УРЛе, оно происходит при любом виде навигации, в т.ч. при нажатии кнопок браузера ВПЕРЁД/НАЗАД

           var SPAState={};                                                           // текущее состояние приложения

          function switchToStateFromURLHash() {                       //вызывается при изменении закладки УРЛа и при 1-м открытии страницы, читает новое состояние приложения из закладки УРЛа
                                                                                       // и обновляет ВСЮ вариабельную часть веб-страницы  соответственно этому состоянию
    var URLHash=window.location.hash;
    var stateStr=URLHash.substr(1);                               // убираем из закладки УРЛа решётку

    if ( stateStr!="" ) {                                                    // если закладка непустая, читаем из неё состояние и отображаем
      var parts=stateStr.split("_")
      SPAState={ pagename: parts[0] }; // первая часть закладки - номер страницы
    }
    else
        SPAState={pagename:'Main'};                         // иначе показываем главную страницу

    console.log('Новое состояние приложения:');
    console.log(SPAState);

   
    switch ( SPAState.pagename ) {                      //обновляем вариабельную часть страницы под текущее состояние
        case 'Main':
            $( "#about" ).hide();
            $( "#viewer" ).hide();
           $( "#main" ).show();
           break;
        case 'About':
            $( "#about" ).show();
            $( "#viewer" ).hide();
           $( "#main" ).hide();
            break;
       case 'Viewer':
            $( "#about" ).hide();
            $( "#viewer" ).show();
           $( "#main" ).hide();
            break;

    }


}


              function switchToState(newState) {                    // устанавливает в закладке УРЛа новое состояние приложения и затем устанавливает+отображает это состояние
                  location.hash=newState.pagename;
                 
              }
              
              
              function switchToMainPage() {
                  switchToState( { pagename:'Main' } );
              }
              
              function switchToAboutPage() {
                  switchToState( { pagename:'About' } );
              }
              
              function switchToViewerPage() {
                  switchToState( { pagename:'Viewer' } );
              }
              
              switchToStateFromURLHash();                // переключаемся в состояние, которое сейчас прописано в закладке УРЛ








              //правила пользования
              
              function showModal(EO){
               EO=EO||window.event;
                      EO.preventDefault();
              
              var modal=document.createElement('div');
              modal.setAttribute('id', 'modal');
              modal.className = '';
              modal.style.width='600px';
              modal.style.height='600px';
              
              modal.style.position='absolute'; 
              
              modal.style.left='50%'-modal.offsetWidth/2; 
              modal.style.top='50%'-modal.offsetHeight/2;
              
               modal.style.backgroundColor = 'LightSalmon';
              
               big.appendChild(modal);
               
              
              
              var modal_inner=document.createElement('div');
              
              modal_inner.style.width='400px';
              modal_inner.style.height='400px';
              modal_inner.setAttribute('id', 'modal_inner0');
              modal_inner.style.position='absolute'; 
              modal_inner.style.marginTop='100px'; 
              modal_inner.style.left='50%'-modal_inner.offsetWidth/2; 
              modal_inner.style.top='50%'-modal_inner.offsetHeight/2;
              
              modal_inner.style.backgroundColor = '#fcf990';
              big.appendChild(modal_inner);
              
              
              var modal_text=document.createElement('div');
              modal_text.setAttribute('id', 'modal_inner');
              modal_text.style.width='360px';
              modal_text.style.height='360px';
              modal_text.style.position='absolute'; 
              modal_text.style.margin='20px'; 
              modal_text.style.textAlign='center'; 
              
              modal_text.innerHTML= 'ПРАВИЛА ПОЛЬЗОВАНИЯ РЕДАКТОРОМ ИЗОБРАЖЕНИЙ'+ "<br>"+"<a href='#' data-json='jsons/json-1.json' class='j'>Общее</a>"+"<br>"+"<a href='#' data-json='jsons/json-2.json' class='j'>Кнопки</a>"+"<br>"+"<a href='#' data-json='jsons/json-3.json' class='j'>Вкладки-Фоны</a>"+"<br>"+"<a href='#' data-json='jsons/json-4.json' class='j'>Вкладки-Элементы и Цвета</a>"+"<br>"+"<a href='#' data-json='jsons/json-5.json' class='j'>Вкладки-Текст</a>"+"<br>"+"<a href='#' data-json='jsons/json-6.json' class='j'>Вкладки-Рисование</a>"+"<br>"+"<a onclick='closeModal()' class='inst-btn' ><i class='far fa-times-circle'></i></a>";
              modal_inner.appendChild(modal_text);
              modal_inner.setAttributeNS(null, "onclick", "jsonUse(event)");
              
              
              document.getElementById('modal').onclick=start();


    var modalH={
        angle : 0,
        speedAngle : 0.05, // скорость изменения угла

        update : function() {
            var modalElem=document.getElementById('modal');
            modalElem.style.transform="rotate("+this.angle+"deg) translateZ(0)";
        }
    }

    function start() {
        requestAnimationFrame(tick);
    }

    function tick() {

        modalH.angle+=modalH.speedAngle;
        modalH.update();

        requestAnimationFrame(tick);
    }

      modalH.update();
}



   

               function jsonUse(EO) {
                     EO=EO||window.event;
                     EO.preventDefault();
                     if (EO.target.dataset.json) {
                          var request = new XMLHttpRequest();
                          request.open('GET', EO.target.dataset.json);
                          request.send();
                          request.onload = function () {
                               if (request.status == 200) {
                                    var 
                                        data = JSON.parse(request.response),
                                         content = '<div style="flex: 1 0 40%;"><div style="font-size: 18px; font-weight:bold;">{{title}}</div><br>{{text}}<br><a onclick="closeModalPart()" class="inst-btn" ><i class="far fa-times-circle">{{close}}</i></a></div>',
                                         result;
                                    result = content.replace('{{title}}', data.title);
                                    result = result.replace('{{text}}', data.text);
                                    result = result.replace('{{close}}',data.close);
                                    document.getElementById('modal_inner').innerHTML = result;
                              }
                          };
                      }
               }



                function closeModalPart(){
                      document.getElementById('modal_inner').innerHTML='ПРАВИЛА ПОЛЬЗОВАНИЯ РЕДАКТОРОМ ИЗОБРАЖЕНИЙ'+ "<br>"+"<a href='#' data-json='jsons/json-1.json' class='j'>Общее</a>"+"<br>"+"<a href='#' data-json='jsons/json-2.json' class='j'>Кнопки</a>"+"<br>"+"<a href='#' data-json='jsons/json-3.json' class='j'>Вкладки-Фоны</a>"+"<br>"+"<a href='#' data-json='jsons/json-4.json' class='j'>Вкладки-Элементы и Цвета</a>"+"<br>"+"<a href='#' data-json='jsons/json-5.json' class='j'>Вкладки-Текст</a>"+"<br>"+"<a href='#' data-json='jsons/json-6.json' class='j'>Вкладки-Рисование</a>"+"<br>"+"<a onclick='closeModal()' class='inst-btn' ><i class='far fa-times-circle'></i></a>";
                }
                
                
                
                function closeModal(){
                       big.removeChild(document.getElementById('modal'));
                       big.removeChild(document.getElementById('modal_inner0'));
                       document.getElementById('modal_inner0').removeChild(document.getElementById('modal_text'));
                }



                window.onbeforeunload=befUnload;                                                                   //напоминание о том, что перезагрузка удалит все несохраненные данные
                function befUnload(EO) {
                           EO=EO||window.event;
                           EO.returnValue='Вы уверены? У вас есть несохранённые изменения!';                  // если текст изменён, попросим браузер задать вопрос пользователю
                };
                
