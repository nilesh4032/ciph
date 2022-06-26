import React from 'react'

const Book = ({pic,img,title,author}) => {
  //const {img,title,author}=props;
    const clickhandler=()=>{
        alert('done')
    }
return(
    <artcile className="book" onMouseOver={()=>{ console.log(title)}}>
        <img className='img' src={img} alt="image not found"/>
         <h1 style={{margin: "2rem"}}> {pic} </h1>
        <h1 style={{margin: "2rem"}}> {title}</h1>  
        <h3 onClick={()=>{ console.log('alert');}}>{author}</h3>
        <section className='section' style={{margin: "2rem", display:"flex"}}>
        <button type='button' onClick={clickhandler} style={{margin: "2rem "}}>buy </button>
        <button type='button' onClick={clickhandler} style={{margin: "2rem "}}>add </button>
        </section>
        </artcile> 
)
}

export default Book