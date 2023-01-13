let popupform = document.querySelector('.popup');
let addbutton = document.querySelector('.button-popup');
let closebutton = popupform.querySelector('.popup__close-icon');
let bodyoverflow = document.querySelector('.body');
function addForm(){
    popupform.classList.add('popup_opened');
    bodyoverflow.setAttribute('style', 'overflow:hidden');
}
function closeForm(){
    popupform.classList.remove('popup_opened');
    bodyoverflow.removeAttribute('style', 'overflow:hidden');
}
addbutton.addEventListener('click', addForm);
closebutton.addEventListener('click', closeForm);