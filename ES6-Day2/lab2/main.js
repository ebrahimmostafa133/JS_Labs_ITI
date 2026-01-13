//3.Create your box object that contains books objects, ensure that you can
//  a.count # of books inside box.
//  b.delete any of these books in box according to book name or type. 
//  c.create book object and add it to box object content property 
//  d.use toString() to tell its dimensions and how books are stored in it.
//  e.implement valueof() so that if there is more than one box object we can get total books in these boxes by adding the i.e. box1 has 5 books whilebox2 has 2 books, box1 + box2 should return 7
//      Note:
//          •there is no inheritance
//          •box object has the following properties:
//              height, width, length,numOfBooks, volume, material, content.
//          • The content property contains an array of books.
//          • book object has the following properties: 
//              title, numofChapters, author,numofPages, publisher, numofCopies
//          • you can define any function needed for both box and book objects.
function createBook(title, numofChapters, author, numofPages, publisher, numofCopies) {
    return {
        title,
        numofChapters,
        author,
        numofPages,
        publisher,
        numofCopies,
        toString() {
            return `${this.title} by ${this.author} (${this.numofPages} pages)`;
        }
    };
}

function createBox(height, width, length, material) {
    return {
        height,
        width,
        length,
        material,
        content: [],
        get volume() {
            return this.height * this.width * this.length;
        },
        get numOfBooks() {
            return this.content.length;
        },
        countBooks() {
            return this.numOfBooks;
        },
        addBook(book) {
            this.content.push(book);
        },
        deleteBookByTitle(title) {
            this.content = this.content.filter(book => book.title !== title);
        },
        deleteBookByAuthor(author) {
            this.content = this.content.filter(book => book.author !== author);
        },
        toString() {
            return `Box Dimensions: ${this.height} x ${this.width} x ${this.length}
                    Material: ${this.material}
                    Volume: ${this.volume}
                    Books Stored: ${this.numOfBooks}
                    Book Titles: ${this.content.map(book => book.title).join(", ")}`;
        },
        valueOf() {
            return this.numOfBooks;
        }
    };
}

let book1 = createBook("JS Basics", 10, "John Doe", 300, "TechPress", 2);
let book2 = createBook("Advanced JS", 15, "Jane Smith", 450, "CodeHouse", 1);
let book3 = createBook("HTML Guide", 8, "John Doe", 200, "WebBooks", 3);
let book4 = createBook("CSS Mastery", 12, "Emily Davis", 350, "DesignPub", 2);
let book5 = createBook("Node.js in Action", 20, "Michael Brown", 500, "ServerPress", 1);

let box1 = createBox(10, 5, 4, "Wood");
let box2 = createBox(6, 4, 3, "Plastic");
let box3 = createBox(8, 6, 5, "Metal");

box1.addBook(book1);
box1.addBook(book2);
box1.addBook(book3);

box2.addBook(book3);
box2.addBook(book4);

box3.addBook(book5);

console.log(box1.countBooks());//3
console.log(box1.toString());
box1.deleteBookByTitle("JS Basics");
console.log(box1.countBooks());//2

console.log(box3.toString());

console.log(box2.toString());
console.log(box1 + box2);//2+2=4
console.log(box1 + box3);//2+1=3
