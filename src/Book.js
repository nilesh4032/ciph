import React from 'react'

const Book = ({img,title,author}) => {
  //const {img,title,author}=props;
    const clickhandler=()=>{
        alert('bought')
    }
return(
    <artcile className="book" onMouseOver={()=>{ console.log(title)}}>
         <img src={img} alt=" "/>
         <h1 style={{margin: "2rem"}}> {img} </h1>
        <h1 style={{margin: "2rem"}}> {title}</h1>  
        <h3 onClick={()=>{ console.log('alert');}}>{author}</h3>
        <button type='button' onClick={clickhandler} style={{margin: "2rem "}}>buy </button>
        </artcile> 
)
}

export default Book