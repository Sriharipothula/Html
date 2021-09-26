// let sayGoodMoring= () => {
//  let h1Tag=document.querySelector('#msg');
//  h1Tag.innerText='Good Morning';
//  h1Tag.style.backgroundColor='#e768cb';
//  h1Tag.style.padding='10px';
//  h1Tag.style.boxShadow='0px 0px 20px 0px red';
//  h1Tag.style.marginTop='10px';
// };
//  
// 
// let sayGoodMoring1= () => {
    // let h1Tag=document.querySelector('#msg');
    // h1Tag.innerText='Good Afternoon';
    // h1Tag.style.backgroundColor='#58a490';
    // h1Tag.style.padding='10px';
    // h1Tag.style.boxShadow='0px 0px 20px 0px red';
    // h1Tag.style.marginTop='10px';
//    };
//  
//    
//    let sayGoodMoring2= () => {
    // let h1Tag=document.querySelector('#msg');
    // h1Tag.innerText='Good Evening';
    // h1Tag.style.backgroundColor='#58a401';
    // h1Tag.style.padding='10px';
    // h1Tag.style.boxShadow='0px 0px 20px 0px red';
    // h1Tag.style.marginTop='10px';
//    };
//  
//    
//    let sayGoodMoring3= () => {
    // let h1Tag=document.querySelector('#msg');
    // h1Tag.innerText='Good Night';
    // h1Tag.style.backgroundColor='#58d6cb';
    // h1Tag.style.padding='10px';
    // h1Tag.style.boxShadow='0px 0px 20px 0px red';
    // h1Tag.style.marginTop='10px';
//    };
   
//JavaScript Event Listeners
//-------------------------------
//1)Get the HtML Element/Tag
//2)Attach an event to the element/tag
//3)Write a function for event handling
    

   //printWishMessage
   let printWishMessage=(x,y)=>{
    let h1Tag=document.getElementById('msg');
    h1Tag.innerHTML=x;
    h1Tag.style.backgroundColor=y;
    h1Tag.style.padding='10px';
    h1Tag.style.boxShadow='0px 0px 20px 0px red';
    h1Tag.style.marginTop='10px';
   };
   //Good Morning Button
    // let gmButton=document.querySelector('#btn1');
    // gmButton.addEventListener('click',function (){
        // alert('GM button is clicked');
    // });
// 
// 
    // let gaButton=document.querySelector('#btn2');
    // gaButton.addEventListener('dblclick',function (){
        // alert('GA button is clicked');
    // });
// 
// 
    // let geButton=document.querySelector('#btn3');
    // geButton.addEventListener('mouseover',function (){
        // alert('GE button is clicked');
    // });
// 
// 
    // let gnButton=document.querySelector('#btn4');
    // gnButton.addEventListener('mousemove',function (){
        // alert('GN button is clicked');
    // });


   //Good Morning Button
    let gmButton=document.querySelector('#btn1');
    gmButton.addEventListener('click',function (){
    printWishMessage('Good Morning','limegreen');
    });

    //Good Afternoon Button
       let gaButton=document.querySelector('#btn2');
       gaButton.addEventListener('dblclick',function (){
       printWishMessage('Good Afternoon','blue');
       });
   
          //Good Evening Button
    let geButton=document.querySelector('#btn3');
    geButton.addEventListener('mouseover',function (){
    printWishMessage('Good Evening','Purple');
    });

       //Good Night Button
       let gnButton=document.querySelector('#btn4');
       gnButton.addEventListener('mousemove',function (){
       printWishMessage('Good Night','orange');
       });
   
   
 
 
 


