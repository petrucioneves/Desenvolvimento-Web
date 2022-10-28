let email = document.querySelector('.floatingInput');
let senha = document.querySelector('.floatingPassword');
const button = document.querySelector('#btnEntrar');
const forms = document.querySelectorAll('.needs-validation')
const formsCadastro = document.querySelectorAll('.needs-validation2')
const select = document.querySelector('#floatingSelectDay')
const selectMes = document.querySelector('#floatingSelectMes')
const selectYear = document.querySelector('#floatingSelectYear')
const radioSim = document.querySelector('#flexRadioSim')
const radioNao = document.querySelector('#flexRadioNao')
const btnInscrever = document.querySelector('#btnInscrever')
const senhaform = document.querySelector('#floatingPasswordform')
const senhaform2 = document.querySelector('#floatingPasswordform2')
let option =''

selectMes.addEventListener( 'change' , ()=> {
  const mes = selectMes.value
  if(mes == 1 || mes == 3 || mes ==5 || mes ==7 ||mes ==8 || mes ==10||mes ==12){
    select.innerHTML = dias(31)
  }else if(mes ==4 || mes ==6 ||mes ==9|| mes ==11){
    select.innerHTML = dias(30)
  }else if(mes == 2){
    select.innerHTML = dias(29)
  }else{
    select.innerHTML = ''
  }
})

select.addEventListener( 'change' , ()=>{
  if(selectMes.value == 2 && select.value ==29){
    selectYear.innerHTML = ano("bi")
  }else if(select.value == 0){
    selectYear.innerHTML = ''
  }else{
    selectYear.innerHTML = ano()
  }
})
function ano(arg){
  option = ''
  option += `<option value="0"></option>`;
  if(arg == "bi"){
    for(let i = 1930; i <= 2022; i++){
      if(i%4==0){
        option += `<option value="${i}">${i}</option>`;
      }  
    }
  }else{
    for(let i = 1930; i <= 2022; i++){
      option += `<option value="${i}">${i}</option>`;
    }
  }
  return option
}

function dias(dias){
  option = ''
  option = option += `<option value="0"></option>`;
  for(let i = 1; i <= dias; i++){
      option += `<option value="${i}">${i}</option>`;
  }
  return option
}

if(forms!=null){
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
  
      form.classList.add('was-validated')
    }, false)
  })
}
if(formsCadastro!=null){
  Array.from(formsCadastro).forEach(formsCad => {
    formsCad.addEventListener('submit', event => {
      if (!formsCad.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
  
      formsCad.classList.add('was-validated')
    }, false)
  })
}
if(email!=null && senha!=null){
  email.addEventListener('keyup', ()=>{
    statusButton()
  })
  senha.addEventListener('keyup', ()=>{
    statusButton()
  })
}
radioSim.addEventListener('click', ()=>{
  if(radioSim.checked == true){
    btnInscrever.disabled = false
  }
})
radioNao.addEventListener('click', ()=>{
  if(radioNao.checked == true){
    btnInscrever.disabled = true
  }
})

function statusButton(){
  if(email.value!="" && senha.value!=""){
    button.disabled = false;
  }else{
    button.disabled = true;
  }
}


function validarSenha(){
  if(senhaform2.value != senhaform.value){
      senhaform2.setCustomValidity('invalid-feedback')
  }else{
      senhaform2.setCustomValidity('');
  }
}
senhaform2.addEventListener('keyup', ()=>{
  validarSenha()
})
// function senhasIguais(){
//   if(senhaform.value != senhaform2.value){
//     senhaform.classList.add('invalid-feedback');
//   }else{
//     senhaform.classList.remove('invalid-feedback')
//   }
// }
// function validateEmail(emailtest) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(emailtest);
// }