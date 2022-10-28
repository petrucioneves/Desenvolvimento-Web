
const textModal = document.getElementById("textarea-modal");
const text = document.getElementById("textarea-home");
const buttonTweetModal = document.querySelector('.botao-enviar-modal');
const buttonTweetHome = document.querySelector('.botao-enviar');



let tamMax = 140;

if(text!=null){
    text.addEventListener('keyup', ()=>{
        let divCont = document.getElementById("contador");
        contagem(divCont, tamMax, text);
        textColor(tamMax, text, divCont);
        statusButton(tamMax, text, buttonTweetHome);
        scrollHeight(text);
    });
}
textModal.addEventListener('keyup', ()=>{
    let divCont = document.getElementById("contador-modal");
    contagem(divCont, tamMax, textModal);
    textColor(tamMax, textModal, divCont);
    statusButton(tamMax, textModal, buttonTweetModal);
    scrollHeight(textModal);
});


function contagem (divCont, tamMax, textarg){
    if(textarg.value.length!=""){
        divCont.innerHTML = tamMax - textarg.value.length;
    }else{
        divCont.innerHTML = "";
    }
    
}
function textColor(tamMax, textarg, divCont){
    if((tamMax-textarg.value.length)<=40 && (tamMax-textarg.value.length)>0){
        divCont.style.color = `rgb(255, 200, 0)`;
    }else if((tamMax-textarg.value.length)<=0){
        divCont.style.color = `rgb(255, 0, 0)`;
    }else{
        divCont.style.color = `rgb(15, 20, 25)`;
    }
}
function statusButton(tamMax, textarg, buttonTweet){
    if(textarg.value=="" || (tamMax-textarg.value.length)<=0){
        buttonTweet.disabled=true;
    }else if(textarg.value.length>=1 && textarg.value.length<=140){
        buttonTweet.disabled=false;
    }
}
function scrollHeight(args){
    if (args.scrollHeight > args.clientHeight) {
        args.style.height = `${args.scrollHeight}px`;
    }else if(args.value.length==0){
        args.style.height = `29px`;
    }
}
