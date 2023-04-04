function findAuthorById(authors, id) {
  for(item in authors){
    if(authors[item].id == id){
      return authors[item];
    }
  }
}

function findBookById(books, id) {
  for(item in books){
    if(books[item].id == id){
      return books[item];
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let returnedbooks = [];
  let borrowed = [];
  let list = [];
  for(item in books){
       if(books[item].borrows[0].returned === false){
         returnedbooks.push(books[item]);
       }else{
         borrowed.push(books[item]);
     }
  }
  list.push(returnedbooks);
  list.push(borrowed);
  return list;
}

function getBorrowersForBook(book, accounts) {
  let books = [];
  let information = []
  const a = book.borrows;
  for(some in a){
     books.push(a[some].id);
  }
  for(item in accounts){
    if(books.includes(accounts[item].id)){
      let newbook = {id: accounts[item].id,returned: a[0].returned, ...accounts[item]};
      information.push(newbook);
    }
  }
  console.log(information);
  return information; 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
