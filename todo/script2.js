let gorevler = [];

function renderTodoList() {
  let gorevListesi = document.querySelector("#gorev_listesi");
  gorevListesi.innerHTML = "";

  gorevler.forEach((todo, index) => {
    let yeniLi = document.createElement("li");
    yeniLi.innerHTML = `
      <button onclick="showTodoDetails(${index})" class="${todo.tamamlandi ? 'completed' : ''}">${todo.baslik}</button>
      <button class="add-icon" onclick="addSubTodoItem(${index})">Ekle</button>
      <button class="delete-icon" onclick="deleteTodoItem(${index})">Sil</button>
      <ul class="sub-todo-list" style="display: none;"></ul>
    `;
    gorevListesi.appendChild(yeniLi);
  });
}

function renderSubTodoList(index) {
  let gorevDetaylari = document.querySelector("#gorev_detaylari");
  gorevDetaylari.innerHTML = "";
  let todo = gorevler[index];
  let subTodoList = todo.subTodoList;

  let detayHTML = `
    <ul class="sub-todo-list">
      ${subTodoList.map((subTodo, subIndex) => `
        <li class="sub-todo">
          <input type="checkbox" class="checklist-toggle" onchange="toggleChecklist(${index}, ${subIndex})" ${subTodo.tamamlandi ? 'checked' : ''}>
          <span class="${subTodo.tamamlandi ? 'completed' : ''}">${subTodo.baslik}</span>
          <button class="delete-icon" onclick="deleteSubTodoItem(${index}, ${subIndex})">Sil</button>
        </li>
      `).join("")}
    </ul>
  `;
  gorevDetaylari.innerHTML = detayHTML;
}

function toggleChecklist(index, subIndex) {
  if (subIndex === undefined) {
    gorevler[index].tamamlandi = !gorevler[index].tamamlandi;
  } else {
    gorevler[index].subTodoList[subIndex].tamamlandi = !gorevler[index].subTodoList[subIndex].tamamlandi;
  }
  renderTodoList();
  renderSubTodoList(index);
}

function addSubTodoItem(index) {
  let yeniSubTodo = prompt("Yeni subTodo başlığını girin: ");
  if (yeniSubTodo) {
    gorevler[index].subTodoList.push({ baslik: yeniSubTodo, tamamlandi: false });
    renderSubTodoList(index);
  }
}

function deleteTodoItem(index) {
  gorevler.splice(index, 1);
  renderTodoList();
  let gorevDetaylari = document.querySelector("#gorev_detaylari");
  gorevDetaylari.innerHTML = "";
}

function deleteSubTodoItem(todoIndex, subTodoIndex) {
  gorevler[todoIndex].subTodoList.splice(subTodoIndex, 1);
  renderSubTodoList(todoIndex);
}

function toggleSubTodoVisibility(index) {
  let gorevListesi = document.querySelector("#gorev_listesi");
  let todoLi = gorevListesi.children[index];
  let subTodoUl = todoLi.querySelector("ul");

  if (subTodoUl.style.display === "none") {
    subTodoUl.style.display = "block";
  } else {
    subTodoUl.style.display = "none";
  }
}

function showTodoDetails(index) {
  renderSubTodoList(index);
}

document.querySelector("#yeni_gorev_btn").addEventListener('click', () => {
  let yeniGorev = prompt("Yeni görevi girin: ");
  if (yeniGorev) {
    gorevler.push({ baslik: yeniGorev, tamamlandi: false, subTodoList: [] });
    renderTodoList();
  }
});