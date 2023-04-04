function findAuthorById(authors, id) {
  // for(item in authors){
  //   if(authors[item].id == id){
  //     return authors[item];
  //   }
  // }
  return authors.find(author => author.id == id);
}

function findBookById(books, id) {
  // for(item in books){
  //   if(books[item].id == id){
  //     return books[item];
  //   }
  // }
  return books.find(book => book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  let returnedbooks = [];
  let borrowed = [];
  //let list = [];
  for(item in books){
       if(books[item].borrows[0].returned === false){
         returnedbooks.push(books[item]);
       }else{
         borrowed.push(books[item]);
     }
  }
  // list.push(returnedbooks);
  // list.push(borrowed);
  // return list;
  return([returnedbooks,borrowed]);
}

function getBorrowersForBook(book, accounts) {
  // let books = [];
  // let information = []
  // const a = book.borrows;
  // for(some in a){
  //    books.push(a[some].id);
  // }
  // for(item in accounts){
  //   if(books.includes(accounts[item].id)){
  //     let newbook = {id: accounts[item].id,returned: a[0].returned, ...accounts[item]};
  //     information.push(newbook);
  //   }
  // }
  // console.log(information);
  // return information; 
  let books = [];
  let information = []
  const thing = book.borrows;
  for(some in thing){
     books.push(thing[some].id);
  }
  for(item in accounts){
    if(books.includes(accounts[item].id)){
      let newbook = {id: accounts[item].id,returned: thing[0].returned, ...accounts[item]};
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
