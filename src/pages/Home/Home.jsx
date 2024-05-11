import React, { useState } from 'react'
import './Home.css'
import Featured from '../../assets/chickenPiece.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import BlogItem from '../Blogs/BlogItem'
import Menu from '../Store/PopularStoreItem'
import PopularStoreItem from '../Store/PopularStoreItem';
import {dishes, categories} from '../../../data';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
      if(direction === "left") {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : (dishes.length - 1))
      } else {
          setSlideIndex(slideIndex < (dishes.length - 1) ? slideIndex + 1 : 0)
      }
  }
  return (
    <section className='home'>
      
      <div className="slider">
        <div className="arrow"  onClick={() => handleClick("left")}>
           <FaArrowLeft />
        </div>
        <div className="slide-wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
          {
            dishes && dishes.map(dish => {
              return (
                <div className="slide container">
                  <div className="image">
                    <img src={dish.image} alt="" />
                  </div>
                  <div className='slide-container'>
                    <span>KSH {dish.price}</span>
                    <hr />
                    <h1 className='heading'>{dish.title}</h1>
                    <p>{dish.description}</p>
                    <a href="#" className='btn'>Shop Now</a>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="arrow" onClick={() => handleClick("right")}>
           <FaArrowRight />
        </div>
      </div>
      <div className="container">
        {
          categories && categories.map((category) => {
            return(
              <NavLink to={category.link}>
              <div className="card" key={category.id}>
                <div className="image">
                  <img src={category.image} alt="" />
                </div>
                <div className="content">
                  <h3 >{category.title}</h3>
                </div>
              </div>
              </NavLink>
            )
          })
        }
      </div>
        <h3 className="sub-heading">our menu</h3>
        <h1>today's specialty</h1>
        <div className="container">
          {
            dishes && dishes.map(item => {
              return <PopularStoreItem data={{...item}} key={item.id} />
            })
          }
        </div>
      <h3 className="sub-heading">Explore Our Blog</h3>
      <h1 className="heading">Trending Posts</h1>
      <div className="container">
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </section>
  )
}
