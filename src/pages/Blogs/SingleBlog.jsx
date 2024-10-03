import React from 'react'
import Image from '../../assets/chicken.jpg';
import BlogItem from './BlogItem';

export default  function SingleBlog() {  
  return(
    <div className="card blog">
        <div className="image">
            <img src={Image} alt=""/>
        </div>
        <div className="content">
            <div className="meta">
                <div className=" trailing"> {new Date().toDateString()}</div>
            </div>
            <h3>Smart Product from buyer.</h3>
            <p>1 chicken piece with regular chips.</p>
        </div>
        <h1 className="heading">Related Posts</h1>
        <div className="container">
            <BlogItem />
            <BlogItem />
            <BlogItem />
        </div>
    </div>)
}
