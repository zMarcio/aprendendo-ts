"use strict";
// import  validator  from 'validator';
// const submit = document.getElementById('submit') as HTMLButtonElement
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// submit.addEventListener('click', eventVerificar)
// function eventVerificar(e:Event){
//     e.preventDefault()
//     const nameUser = document.getElementById('username') as HTMLInputElement
//     const emailUser = document.getElementById('email') as HTMLInputElement
//     const passWUser = document.getElementById('password') as HTMLInputElement
//     const passW2User = document.getElementById('password2') as HTMLInputElement
//     const opa = console.log('ISSO AQUI É O NAME: ' + nameUser.value + '  ISSO AQUI É O EMAIL: ' + emailUser.value)
//     const nameMsg = document.querySelector('.error-message-name') as HTMLSpanElement
//     const emailMsg= document.querySelector('.error-message-email') as HTMLSpanElement
//     const passWMsg= document.querySelector('.error-message-passW') as HTMLSpanElement
//     const passW2Msg= document.querySelector('.error-message-passW2') as HTMLSpanElement
//     let msgErrorName: string[] = []
//     let msgErrorEmail: string[] = []
//     let msgErrorPassW: string[] = []
//     let msgErrorPassW2: string[] = []
//     console.log(emailUser.value.length)
//     //ver se tá vazio
//     if(!nameUser.value){
//         msgErrorName.push(`Campo inválido por está vazio`)
//     }
//     if(nameUser.value.length < 6){
//         msgErrorName.push(`Campo inválido minimo de 6 caracteres`)
//     }
//     if(!emailUser.value){
//         msgErrorEmail.push(`Campo inválido por está vazio`)
//     }
//     if(!validator.isEmail(emailUser.value)){
//         msgErrorEmail.push(`Campo inválido, email incorreto`)
//     }
//     if(!passWUser.value){
//         msgErrorPassW.push(`Campo inválido, campo vazio`)
//     }
//     if(!passW2User.value){
//         msgErrorPassW2.push(`Campo inválido, campo vazio`)
//     }
//     if(passWUser.value.length < 6){
//         msgErrorPassW.push(`Campo inválido, precisa no minimo de 6 caracteres`)
//     }
//     if(passW2User.value.length < 6){
//         msgErrorPassW2.push(`Campo inválido, precisa no minimo de 6 caracteres`)
//     }
//     if( passWUser.value != passW2User.value){
//         msgErrorPassW.push(`Campo inválido, está diferente de confirma senha`)
//         msgErrorPassW2.push(`Campo inválido, está diferente de sua senha`)
//     }
//     //MSG DE ERRO
//     if(msgErrorName.length > 0){
//         nameMsg.textContent = msgErrorName.join(' ')
//         nameMsg.style.display = 'block'
//         setTimeout(() =>{
//             nameMsg.style.display = 'none'
//         },5000)
//         // return nameMsg
//     }
//     if(msgErrorEmail.length > 0){
//         emailMsg.textContent = msgErrorEmail.join(' ')
//         emailMsg.style.display = 'block'
//         setTimeout(()=>{
//             emailMsg.style.display = 'none'
//         },5000)
//         // return emailMsg
//     }
//     if(msgErrorPassW.length > 0){
//         passWMsg.textContent = msgErrorPassW.join(' ')
//         passWMsg.style.display = 'block'
//         setTimeout(() => {
//             passWMsg.style.display = 'none'
//         }, 5000)
//         // return passWMsg
//     }
//     if(msgErrorPassW2.length > 0){
//         passW2Msg.textContent = msgErrorPassW2.join(' ')
//         passW2Msg.style.display = 'block'
//         setTimeout(() => {
//             console.log('entrou aqui')
//             passW2Msg.style.display = 'none'
//         }, 5000);
//         return passW2Msg
//     }
//     console.log('passou')
//     return 
// }
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const SHOW_ERROR_MESSAGES = 'show-error-message';
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    hideErrorMessages(this);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkPasswords(password, password2);
    if (shouldSendForm(this))
        console.log('Formulário enviado');
    // console.log('oi')
});
function hideErrorMessages(form) {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}
function showErrorMessage(input, msg) {
    const formFields = input.parentElement;
    const errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}
function checkForEmptyFields(...inputs) {
    inputs.forEach(input => {
        if (!input.value)
            showErrorMessage(input, "Campo não pode ficar vazio");
    });
}
function checkEmail(input) {
    if (!(0, isEmail_1.default)(input.value))
        showErrorMessage(input, 'Email inválido');
}
function checkPasswords(pass, pass2) {
    if (pass.value !== pass2.value) {
        showErrorMessage(pass, 'Senhas não batem');
        showErrorMessage(pass2, 'Senhas não batem');
    }
}
function shouldSendForm(form) {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => (send = false));
    return send;
}
//# sourceMappingURL=form-control.js.map