var logo = document.querySelector('.toggle-button');
var menu = document.querySelector('.menu');

logo.addEventListener('click',function(){
    menu.classList.toggle('showmenu');
});