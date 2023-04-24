class book {
        title;
        author;
        ISBN;
        amount;
        soldAmount;
    constructor(title, author, ISBN, amount) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.amount = amount;     
    }
}

function booksAvailability() {

    if ( amount < 10){
        console.log('low stock');
    }else if (amount == 0){
        console.log('out of stock');
    }else{
        console.log('in stock');
    }
}

function sellBook( soldAmount) {
    this.soldAmount = soldAmount;
    let remain = book1.amount - soldAmount;
    console.log(`new amount is ${remain}`)
}

let book1 = new book('blue ocean ','Mark Adam','783237XXX','100');
sellBook(20);