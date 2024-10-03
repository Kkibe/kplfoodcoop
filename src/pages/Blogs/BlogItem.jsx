import React, { useState } from 'react'
import Image from '../../assets/watermelon.jpg';

export default  function BlogItem() {
  const [visible, setVisible] = useState(false);
const readingTime = (articleText) => {
    const wordsArray = articleText.split(' ');
    // Count the number of words in the array
    const wordCount = wordsArray.length;
    // Calculate the estimated reading time
    const wordsPerMinute = 200;
    return Math.ceil(wordCount / wordsPerMinute);
}
  
  
  
  
  return(
    <div className="card blog bg">
        <div className="image">
            <img src={Image} alt="" />
        </div>
        <div className="content">
            <div className="meta">
                <span className='trailing'>{new Date().toDateString()}</span>
            </div>
            <a href="/blogs/id-here"><h3>This is a blog post....</h3></a>
        </div>
    </div>)
}
