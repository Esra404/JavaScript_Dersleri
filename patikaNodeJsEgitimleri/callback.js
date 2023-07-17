/*const func1=() =>{
	console.log("func 1 tamamlandı");
};

const func2=()=>{
	console.log("func 2 tamamlandı");
};

func2();
func1();

const func1=() =>{
	console.log("func 1 tamamlandı");
	func3();
};

const func2=()=>{
	console.log("func 2 tamamlandı");
};
const func3=()=>{
	console.log("func 3 tamamlandı");
	func2();
};

func1();

let x=5;
console.log(x);

setTimeout(()=>{
	x=x+5;
},5000);

console.log(x);

x=x+5;
console.log(x);
*/
const books=[
	{name:'kitap 1',author:'yazar 1'},
	{name:'kitap 2',author:'yazar 2'},
	{name:'kitap 3',author:'yazar 3'}
];
const listBooks=()=>{
	books.map(book=>{
		console.log(book.name);
	})
};

const addBook=(newBook,callback)=>{
	books.push(newBook);
	callback();
};
addBook({name:'Kitap4',author:'yazar4'},listBooks);
//listBooks();