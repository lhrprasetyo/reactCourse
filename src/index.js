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
  const someValue = 'Image Clicked !';
  const imageClick = () => {
    console.log(someValue);
  }
  return (
    <section className="booklist">
      {books.map((book)=>{
        return <Book {...book} key = {book.id} imageClick={imageClick}/>;
      })};
    </section>
  );
};

const Book = (props) => {
  const {img , title , author, imageClick} = props;
  const showTitle = () => {
    console.log(title);
  }
  return (
    <article className="book">
      <img src={img} onClick={imageClick} alt={title} />
      <h2>{title}</h2>
      <button onClick={showTitle}>Show Title</button>
      <h4>{author}</h4>
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
