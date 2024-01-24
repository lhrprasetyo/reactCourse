import React from "react";
import ReactDOM from "react-dom/client";

import "./Index.css";

// Fundamentals

// function First() {
//   return (
//     <>
//      <Heading/>
//      <Message/>
//     </>
//   );
// }

// const Heading = () =><h2>Hello World</h2>;
// const Person = () => <>Luhur Budi Prasetyo</>;
// const Message = () => {
//     return <p>Hello There, iam <Person/></p>
// };

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

const names = ['john','doe','susan'];
const newNames = names.map((name) => {
  console.log(name);
});

const ExampleEvent = () => {
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  }

  const handleFormInput = (e) => {
    console.log('Handle form input');
    console.log(e.target.value);
    console.log(e.target.name);
  }
  const handleButtonClick = () => {
    alert('handle button click');
  }

  return (
    <section>
      <form action="" onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input type="text" name="product" style={{margin: '1rem 0'}} onChange={handleFormInput}/>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}

function BookList() {
  return (
    <section className="booklist">
    <ExampleEvent/>
      {books.map((book)=>{
        //cara dibawah ini menggunakan cara mapping dimana map book diubah menjadi objek, maka 
        //objek book harus dipecah lagi menjadi props
        // return <Book book ={book} key = {id} />;
        return <Book {...book} key = {book.id} />;
      })};
    </section>
  );
};

const Book = (props) => {
  //karena  book ={book} dimana book telah diubah menjadi objek (objek dimaksud adalah {book})
  //maka objek harus dipecah menjadi props yaitu props.book ,  sedangkan ketika menggunakan {..book}, 
  //props dari book sudah dispread atau disebar, artinya book adalah objek yang telah disebar propsnya
  //dan tidak perlu lagi disebar menggunakan props.book
  // const {img , title , author} = props.book;

  const {img , title , author} = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/810CZ-9akdL._AC_UL600_SR600,400_.jpg"
//     alt=""
//   />
// );
// const Title = () => <h2>First Lie Wins: Reese's Book Club Pick</h2>;

// const Author = () => {
//     the commented code was the other approach to provide css in React.
//   const inlineHeadingStyle = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return (
//     <h4 style=
//     // {inlineHeadingStyle}
//     {{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
//     >
//       Ashley Elston
//     </h4>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
