import React from "react";
import ReactDOM from "react-dom/client";

import "./Index.css";


const books = [
  {
    img: "./image/book_1.jpg",
    title: "First Lie Wins: Reese's Book Club Pick",
    author: "Ashley Elston",
    id : 1,
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    id : 2,
  },
];


function BookList() {
  const getBook= (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  } 

  return (
    <section className="booklist">
      {books.map((book)=>{
        return <Book {...book} key = {book.id} getBook = {getBook} />;
      })};
    </section>
  );
};

const Book = (props) => {
  const {img , title , author,getBook,id} = props;
  // const getSingleBook = () => {
  //   getBook(id);
  // }
  const showTitle = () => {
    console.log(title);
  }
  return (
    <>
    <article className="book">
      <img src={img}  alt={title} />
      <h2>{title}</h2>
      {/* <button onClick={getSingleBook}>click me</button> */}
      <button onClick={() => {getBook(id)}}>click me</button>
      <h4>{author}</h4>
    </article>
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
