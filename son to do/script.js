var items=[];
var list=document.querySelector('#myList');

items.forEach(function(item){
    CreateItem(item);
});

list.addEventListener('click',function(item){
    if(item.target.tagName==='LI'){  //li
        item.target.classList.toogle('checked');
    }
}); 
document.querySelector('#btnCreate').onclick=function(){
    var item = document.querySelector('#txtItem').value;
    if(item===''){

        alert('lütfen bir değer giriniz');
        return ;

    }
    CreateItem(item);
    document.querySelector('#txtItem').value = '';

};
function CreateItem(item){
    var li=document.createElement('li');
    var t=document.createTextNode(item);
    li.className='list-group-item';
    li.appendChild(t);
    list.appendChild(li);

var span =document.createElement('span');
var text =document.createTextNode('\u00D7');
span.className='close';
span.appendChild(text);
li.appendChild(span);

 span.onclick=function(){
    var li=this.parentElement;
    li.style.display='none';
}
}



var items = [];

function addItem() {
  var item = document.querySelector('#TXTItem').value;
  if (item === '') {
    alert('Lütfen bir değer giriniz');
    return;
  }
  items.push(item);
  renderList();
  document.querySelector('#TXTItem').value = '';
}



function renderList() {
  var list = document.querySelector('#MYList');
  list.innerHTML = ''; // Listeyi temizle

  items.forEach(function (item) {
    var li = document.createElement('li');
    li.className = 'list-group-itemm';
    li.textContent = item;
    list.appendChild(li);
  });
}
function listeKontrol(){

	var e = confirm("Yeni Liste Eklemek İstermisiniz");

	if (e) {
		console.log("Yeni liste eklendi");
    addItem();
	}else{
		console.log("Yeni liste eklenmedi");
    renderList();
	}

}

document.querySelector('#btnnCreate').addEventListener('click', addItem);
