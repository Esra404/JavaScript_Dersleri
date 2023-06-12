const inputDiv=document.querySelector('.inputDiv');
const inpt=document.getElementById('input');
const contentDiv=document.querySelector('.contentDiv');
const button =document.getElementById('button');

var calculate=0;
button.addEventListener('click',go);
function go(){
    if(inpt.value != ""){
    calculate++;
    var paragraf=document.createElement('p');
    var deleteButton=document.createElement('div');
    var finishButton=document.createElement('div');
    deleteButton.classList.add('finishButton');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerText='Sil';
    finishButton.innerText='Yap';
    paragraf.innerText=calculate+"."+input.value;
    contentDiv.appendChild(paragraf);
    paragraf.appendChild(deleteButton);
    paragraf.appendChild(finishButtonButton);
    input.value="";
    deleteButton.addEventListener('click',function (){
        calculate --;
        contentDiv.removeChild(paragraf);
    })
}
}