import React from 'react'

const Book = ({...props}) => {
  const {img,title,author}=props;
    
return(
    <artcile className="book" onMouseOver={()=>{ console.log(title)}}>
         <img style={{width:"100px",height:"100px"}} src={img} alt='image not found' />
        <h1 > {title}</h1>  
        </artcile> 
)
}

export default Book