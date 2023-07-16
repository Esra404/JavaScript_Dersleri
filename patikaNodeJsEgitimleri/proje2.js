
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let posts = [];

function listPosts() {
  console.log('--- Blog Postları ---');
  posts.forEach((post, index) => {
    console.log(`${index + 1}. ${post}`);
  });
  console.log('---------------------');
}

function addPost() {
  rl.question('Lütfen yeni bir post girin: ', (answer) => {
    posts.push(answer);
    console.log('Yeni post başarıyla eklendi!');
    listPosts();
    rl.close();
  });
}

function startBlog() {
  console.log('Hoş geldiniz! Blog oluşturmak için aşağıdaki seçenekleri kullanabilirsiniz:');
  console.log('1. Postları listele');
  console.log('2. Yeni bir post ekle');
  console.log('3. Çıkış yap');
  
  rl.question('Lütfen bir seçenek girin (1, 2 veya 3): ', (answer) => {
    if (answer === '1') {
      listPosts();
      startBlog();
    } else if (answer === '2') {
      addPost();
    } else if (answer === '3') {
      console.log('Blogdan çıkılıyor...');
      rl.close();
    } else {
      console.log('Geçersiz bir seçenek girdiniz!');
      startBlog();
    }
  });
}

startBlog();
