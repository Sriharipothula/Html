//keyup event Example
//let textBox=document.querySelector('#username');
//textBox.addEventListener('keyup',function(){
 //   let textEnterd=textBox.value;
//   alert(textEnterd);
//});

 let textBox=document.querySelector('#username');
 textBox.addEventListener('keyup',function(){
    let textEnterd=textBox.value;
    let messageElement=document.querySelector('#msg');
    messageElement.innerText=textEnterd;
 });

//Change event on select box
let selectBox=document.querySelector('#msg1');
selectBox.addEventListener('change',function(){
   let selectedOption=selectBox.value;
   let languageOptionEl=document.querySelector('#msg2')
    languageOptionEl.innerText=selectedOption;
});

