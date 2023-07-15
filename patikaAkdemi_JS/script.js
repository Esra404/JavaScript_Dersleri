//<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/js/bootstrap.bundle.min.js"></script>

  document.addEventListener('DOMContentLoaded', function () {
    // Silme Butonları
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Silme işlemini burada gerçekleştirin
        console.log('Sil butonuna tıklandı');
      });
    });

    // Düzenleme Butonları
    const editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Düzenleme işlemini burada gerçekleştirin
        console.log('Düzenle butonuna tıklandı');
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
	const addButton = document.querySelector('.btn-block');
	
	addButton.addEventListener('click', function() {
	  const container = document.querySelector('.list-group');
	  const listItem = document.createElement('li');
	  
	  listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
	  listItem.innerHTML = `
	    <div class="ms-2 me-auto">
	      Yeni Liste
	    </div>
	    <button class="btn btn-danger delete-button">Sil</button>
	    <button class="btn btn-warning edit-button">Düzenle</button>
	  `;
	  
	  container.appendChild(listItem);
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
		      
     
 