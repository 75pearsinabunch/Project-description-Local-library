function getTotalBooksCount(books) {
    return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for(item in books){
    for(some in books[item].borrows){
      if(books[item].borrows[some].returned == false){
        total++;
      }
    }
  }
  return total;
}

function getMostCommonGenres(books) {

let list = [];
  for(item in books){
    if(list.includes(books[item].genre) == false){
      const found = list.find(i => i.name === books[item].genre);
      if (found){
        found.count++;
      }else{
        list.push({name: books[item].genre, count:1});
      }
    }
  }
  // list.sort(function(a, b){return b.count-a.count});
  // console.log(list);
  // return(list.slice(0, 5));
  return(list.sort(function(first, second){return second.count-first.count}).slice(0, 5));
}

function getMostPopularBooks(books) {
  let list = [];
  for(item in books){
    list.push({name: books[item].title, count:books[item].borrows.length});
  }
//   list.sort(function(a, b){return b.count-a.count});
//   return(list.slice(0, 5));
return(list.sort(function(first, second){return second.count-first.count}).slice(0, 5));
}

function getMostPopularAuthors(books, authors) {
  let list = [];
  for(item in authors){
    for(some in books){
        if(authors[item].id == books[some].authorId){
          //map() for object elements in array
          list.push({name: authors[item].name.first+" "+authors[item].name.last, count: books[some].borrows.length});
       }
    }
  }
  //console.log(list.sort(function(a, b){return b.count-a.count}).slice(0, 5));
  //return(list.sort(function(a, b){return b.count-a.count}).slice(0, 5));
  return(list.sort(function(first, second){return second.count-first.count}).slice(0, 5));
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
