// Boş bir dizi oluşturun
var todos = [];

// Kullanıcıdan todo eklemesini isteyin
function addTodo() {
  var todo = prompt("Yapılacak bir görev girin:");
  
  // Girilen görevi diziye ekleyin
  todos.push(todo);
  
  // Görevlerin güncellenmiş listesini gösterin
  showTodos();
}

// Kullanıcıya mevcut görevleri gösterin
function showTodos() {
  console.log("Yapılacaklar Listesi:");
  
  // Dizi boyunca döngü yaparak her bir görevi gösterin
  for (var i = 0; i < todos.length; i++) {
    console.log(i + 1 + ". " + todos[i]);
  }
}

// Kullanıcıdan todo silmesini isteyin
function deleteTodo() {
  var index = prompt("Silmek istediğiniz görevin numarasını girin:");
  
  // Girilen numarayı dizideki indeks olarak kullanarak görevi silin
  todos.splice(index - 1, 1);
  
  // Görevlerin güncellenmiş listesini gösterin
  showTodos();
}

// Kullanıcıya seçenekleri gösterin ve işlem yapmasını isteyin
function startApp() {
  var choice;
  
  while (choice !== "3") {
    choice = prompt("Yapmak istediğiniz işlemi seçin:\n1. Görev ekle\n2. Görev sil\n3. Çıkış");
    
    switch (choice) {
      case "1":
        addTodo();
        break;
      case "2":
        deleteTodo();
        break;
      case "3":
        console.log("Uygulama kapatılıyor...");
        break;
      default:
        console.log("Geçersiz bir seçenek girdiniz!");
    }
  }
}

// Uygulamayı başlatın
startApp();
