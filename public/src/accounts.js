function findAccountById(accounts, id) {
  for(item in accounts){
    if(id == accounts[item].id)return accounts[item];
  }
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
  let acc = account.id; 
  let i = 0;
  //practice array methods
   for(item in books){
    for(some in books[item].borrows){
      if(acc == books[item].borrows[some].id)i++;
    }
  }
  return i;
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
