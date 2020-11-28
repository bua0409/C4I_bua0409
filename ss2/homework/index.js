//Bai1
// ES6 cung cấp cho chúng ta import (nhập), export (xuất) các functions, 
// biến từ module này sang module khác và sử dụng nó trong các file khác. Nói 
// một cách chính xác theo thuật ngữ React, người ta có thể sử dụng các stateless 
// components trong các components khác bằng cách export các components từ các modules 
// tương ứng và sử dụng nó trong các tệp khác.


//functionsFile.js
//exporting a function
export function squareNumber(x) {
    return x * x; 
  }
  
  //exporting a variable 
  export const pi = 3.14; 
  
  //Cách khác để export:
  
  //exporting a function
  function squareNumber(x) {
    return x * x; 
  }
  
  //exporting a variable 
  const pi = 3.14; 
  export {squareNumber, pi} ; 
  
//main.js 
import {squareNumber, pi} from "functionsFile"; 
const radius = 7; 
console.log("Area of a circle is", pi * squareNumber(7)); 

//Cách khác để import


// Bai2
import * as mathFuncs from "functionsFile"; 
console.log("Area of circle is ", mathFuncs.pi * mathFuncs.squareNumber(7));
class Book {
  constructor(id, name, price, publishedDate) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.publishedDate = publishedDate;
  }
  update(data, infor) {
    this[data] = infor;
    console.log(this);
  }
}

class ComicBook extends Book {
  constructor(id, name, price, publishedDate, funny, pageNumber) {
    super(id, name, price, publishedDate);
    this.funny = funny;
    this.pageNumber = pageNumber;
  }
}

class TextBook extends Book {
  constructor(id, name, price, publishedDate, subject, grade) {
    super(id, name, price, publishedDate);
    this.subject = subject;
    this.grade = grade;
  }
}

class ScienceBook extends Book {
  constructor(id, name, price, publishedDate, major) {
    super(id, name, price, publishedDate);
    this.major = major;
  }
}
class Bookshelf {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
    console.log(this);
  }
 updateBook(id,data,infor){
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].id === id) {
          this.books[data]=infor;
        }
      } 
 }
  delete(id) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        this.books.splice(i, 1);
      }
    }
  }
  showBooks() {
    console.log(this.books);
  }
  findBooks(name) {
    booksInOrder = [];
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === name) {
        booksInOrder += books[i];
      }
    }
    console.log(booksInOrder);
  }
}
