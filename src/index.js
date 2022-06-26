import React from 'react'
import ReactDom from 'react-dom';
import './index.css' ; 
import {books} from './books'; 
import Book from './Book'

function Items (){
      
    return (
         <section className="booklist">
        {books.map((book)=>{
          
            return <Book key={book.id} {...book}></Book>
            
        })}
        </section>
    );
}

 

ReactDom.render(<Items/>, document.getElementById('root'));
