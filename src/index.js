import React from "react";
import ReactDOM from "react-dom/client";

import Book from "./Book";
import {books} from './books';

import "./Index.css";

function BookList() {
  return (
    <section className="booklist">
    <h1>Amazon Best Seller</h1>
      {books.map((book,index)=>{
        return <Book {...book} key = {book.id} number = {index} />;
      })};
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
