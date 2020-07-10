var mouseX,mouseY;
var mouse_x = mouse_y = 0;

var flag;
function init() {
    if (document.layers) document.captureEvents(Event.MOUSEMOVE);
    document.onmousemove = mousemove;
}
function mousemove(event) {
    
    if (document.attachEvent != null) {
        mouse_x = window.event.clientX;
        mouse_y = window.event.clientY;
    } else if (!document.attachEvent && document.addEventListener) {
        mouse_x = event.clientX;
        mouse_y = event.clientY;
    }
    if(flag){
    mx=mouse_x/document.documentElement.clientWidth*100+'% ';
    my=mouse_y/window.innerHeight*100+'%';
    event.target.style.backgroundPosition =  mx+' '+my;
  }

}

init();



card__content.onmouseover = card__content.onmouseout = handler;

function handler(event) {

  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }

 /*if (event.type == 'mouseover') {
    event.target.style.background = 'pink'
  }
  if (event.type == 'mouseout') {
    event.target.style.background = ''
  }*/

  if (event.type == 'mouseover') {
  flag=true;    
  }

  if (event.type == 'mouseout') {
    flag=false;
    event.target.style.background = 'url("img/salamport.webp") no-repeat 50% 50%';
  }
}