function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});
var itemg =document.querySelector('.itemg');
var itemg1 = document.querySelectorAll('.itemg'); //выбираем все ссылки к якорю на странице
for (var i = 0; i < itemg1.length; i++) {
itemg1[i].style.position="absolute";
itemg1[i].style.left="-10vw";


itemg1[i].style.width="110vw";
itemg1[i].style.height="110vh";
//itemg1[i].style.transform="translate(-50%, -50%)";
itemg1[i].style.position="absolute";

//if(i==1)itemg1[i].style.left="getRandomInt(5,95)"+"%";

if(i==1)itemg1[i].style.top="-5vh";



}

