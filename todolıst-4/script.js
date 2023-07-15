document.addEventListener('DOMContentLoaded', function() {
	const addListButton = document.getElementById('addListButton');
	const listNameInput = document.getElementById('listNameInput');
	const listGroup = document.querySelector('.list-group');
          
	addListButton.addEventListener('click', function() {
	  const listName = listNameInput.value.trim();
          
	  if (listName !== '') {
	    const listItem = document.createElement('label');
	    listItem.classList.add('list-group-item');
	    listItem.innerHTML = `
	      <input class="form-check-input me-1" type="checkbox" value="">
	      ${listName}
	      <button class="btn btn-danger delete-button">Sil</button>
	      <button class="btn btn-warning edit-button">Düzenle</button>
	    `;
          
	    listGroup.appendChild(listItem);
	    listNameInput.value = '';
	    // Modalı kapat
	    const modal = bootstrap.Modal.getInstance(document.getElementById('listModal'));
	    modal.hide();
	  }
	});
          });
          
          document.addEventListener('DOMContentLoaded', function() {
	const deleteButtons = document.querySelectorAll('.delete-button');
          
	deleteButtons.forEach(function(button) {
	  button.addEventListener('click', function() {
	    const listItem = this.closest('.list-group-item');
	    listItem.remove();
	  });
	});
          });
          
          document.addEventListener('DOMContentLoaded', function() {
	const editButtons = document.querySelectorAll('.edit-button');
          
	editButtons.forEach(function(button) {
	  button.addEventListener('click', function() {
	    // Düzenleme işlemini burada gerçekleştirin
	    console.log('Düzenle butonuna tıklandı');
	  });
	});
          });
          document.addEventListener('DOMContentLoaded', function() {
	const addListButton = document.getElementById('addListButton');
	const listNameInput = document.getElementById('listNameInput');
	const listGroup = document.querySelector('.list-group');
          
	addListButton.addEventListener('click', function() {
	  const listName = listNameInput.value.trim();
          
	  if (listName !== '') {
	    const listItem = document.createElement('label');
	    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
	    listItem.innerHTML = `
	      <input class="form-check-input me-1" type="checkbox" value="">
	      ${listName}
	      <button class="btn btn-danger delete-button">Sil</button>
	      <button class="btn btn-warning edit-button">Düzenle</button>
	    `;
          
	    listGroup.appendChild(listItem);
	    listNameInput.value = '';
          
	    // Yeni liste elemanının yüksekliğini diğer elemanlarla aynı yap
	    const listItems = document.querySelectorAll('.list-group-item');
	    const listItemHeight = listItems[0].clientHeight;
	    listItems.forEach(function(item) {
	      item.style.height = listItemHeight + 'px';
	    });
          
	    // Modalı kapat
	    const modal = bootstrap.Modal.getInstance(document.getElementById('listModal'));
	    modal.hide();
	  }
	});
          });
          
          document.addEventListener('DOMContentLoaded', function() {
	const deleteButtons = document.querySelectorAll('.delete-button');
          
	deleteButtons.forEach(function(button) {
	  button.addEventListener('click', function() {
	    const listItem = this.closest('.list-group-item');
	    listItem.remove();
	  });
	});
          });
          
          document.addEventListener('DOMContentLoaded', function() {
	const editButtons = document.querySelectorAll('.edit-button');
          
	editButtons.forEach(function(button) {
	  button.addEventListener('click', function() {
	  // Düzenleme işlemini burada gerçekleştirin
	    console.log('Düzenle butonuna tıklandı');
	  });
	});
          });
          