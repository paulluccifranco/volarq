var whatsappPopup = document.querySelector('.wa__popup_chat_box');
var whatsappButton = document.querySelector('.wa__btn_popup');

whatsappButton.addEventListener('click', function() {
    whatsappPopup.classList.toggle('wa__active');
    whatsappPopup.classList.toggle('wa__lauch');
    whatsappButton.classList.toggle('wa__active');
});