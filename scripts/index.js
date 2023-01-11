let popupform = document.querySelector('.popup');
let addbutton = document.querySelector('.button-popup');
let closebutton = popupform.querySelector('.popup__close-icon');
function addForm(){
    popupform.classList.add('popup_opened');
}
function closeForm(){
    popupform.classList.remove('popup_opened');
}
addbutton.addEventListener('click', addForm);
closebutton.addEventListener('click', closeForm);