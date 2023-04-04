function findAccountById(accounts, id) {
  // for(item in accounts){
  //   if(id == accounts[item].id)return accounts[item];
  // }
  return accounts.find(account => account.id == id);
}

function sortAccountsByLastName(accounts) {
  return  accounts.sort((a, b) => {
  let aa = a.name.last, bb = b.name.last;
    if (aa < bb)return -1;
    if (aa > bb)return 1;
    return 0;
  });
}

function getTotalNumberOfBorrows(account, books) {

  return books.reduce((item, book) =>{
    if(book.borrows.find(i=>i.id === account.id)) item++;
    return item;
  }, 0);

  // let acc = account.id; 
  // let found = 0;
  // //practice array methods
  //  for(item in books){
  //   for(some in books[item].borrows){
  //     if(acc == books[item].borrows[some].id)found++;
  //   }
  // }
  // return found;
}

function getBooksPossessedByAccount(account, books, authors) {
  //arr.reduce(callback(accumulator, currentValue), initialValue)
  return books.reduce((accumulator, book) => {
    const { authorId, borrows } = book;
    const record = borrows.find(i => i.id === account.id && i.returned === false );
    const author = (record) ? authors.find(a => a.id === authorId) : null;

    if (author) {
      book.author = author;
      accumulator.push(book);
    }
    return accumulator;
  }, []);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
