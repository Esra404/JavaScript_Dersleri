var items = [];

function addItem() {
  var item = document.querySelector('#txtItem').value;
  if (item === '') {
    alert('Lütfen bir değer giriniz');
    return;
  }
  items.push(item);
  renderList();
  document.querySelector('#txtItem').value = '';
}

function deleteItem(index) {
  items.splice(index, 1);
  renderList();
}

function renderList() {
  var list = document.querySelector('#myList');
  list.innerHTML = '';

  items.forEach(function (item, index) {
    var li = document.createElement('li');
    li.className = 'list-group-item';

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input';
    checkbox.id = 'checkItem' + index;
    checkbox.addEventListener('change', function () {
      li.classList.toggle('checked');
    });

    var label = document.createElement('label');
    label.className = 'form-check-label';
    label.htmlFor = 'checkItem' + index;
    label.textContent = item;

    var span = document.createElement('span');
    span.className = 'close';
    span.innerHTML = '&#10006;';

    span.addEventListener('click', function () {
      deleteItem(index);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(span);
    list.appendChild(li);
  });
}

document.querySelector('#btnCreate').addEventListener('click', addItem);
