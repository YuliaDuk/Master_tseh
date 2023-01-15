
let popupform = document.querySelector('.popup');
let addbutton = document.querySelector('.button-popup');
let closebutton = popupform.querySelector('.popup__close-icon');
let bodyoverflow = document.querySelector('.body');
function addForm(){
    popupform.classList.add('popup_opened');
}
function closeForm(){
    popupform.classList.remove('popup_opened');
}
addbutton.addEventListener('click', addForm);
closebutton.addEventListener('click', closeForm);
const container = document.querySelector('.popup__container');
const form = document.querySelector('.popup__form');
form.addEventListener('submit', formSend);

function formSend(e) {
    e.preventDefault(e);
    let error = formValidate(form);
    let formData = new FormData(form);
    if (error === 0){
        form.setAttribute('action', 'https://docs.google.com/forms/d/e/1FAIpQLSfBr9Y4sZx1-FtGF-eyifsaPOSGKVgqJgBkreQj4-sAJ0GSLA/formResponse?');
        form.submit();
        form.reset();
        closeForm();
    } else {
        alert('Заполните обязательные поля');
    }

}

function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('.popup__item_req');
    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('popup__item_type_email')){
            if (emailTest(input)){
                formAddError(input);
                error++;
            }
        }
        if (input.classList.contains('popup__item_type_name')){
            if (input.value === ''){
                formAddError(input);
                error++;
            }
        }
        if (input.classList.contains('popup__item_type_telephone')){
            if (input.value === ''){
                formAddError(input);
                error++;
            }
        }
        if (input.classList.contains('popup__item_type_description')){
            if (input.value === ''){
                formAddError(input);
                error++;
            }
        }
    }
    return error;
}

function formAddError(input) {
    // input.parentElement.classList.add('popup__item_error');
    input.classList.add('popup__item_error');
        
    
}
function formRemoveError(input) {
    // input.parentElement.classList.remove('popup__item_error');
    input.classList.remove('popup__item_error');
        
}

//email тест
function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}