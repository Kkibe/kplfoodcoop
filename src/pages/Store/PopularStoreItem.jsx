import React from 'react'
import {FaEye, FaStar } from "react-icons/fa";

export default function PopularStoreItem({data}) {
    return(
        <div className="card">
            <div className="image">
                <img src={data.image} alt="" />
                <a href="#" className='icon eye'><FaEye /></a>
            </div>
            <div className="content">
                <div className="meta">
                  <span className='trailing'><FaStar className='star'/> 5.2K</span>
                  <div className="duration">KSH {data.price}</div>
                </div> 
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <a  className="add">+</a>
            </div>
        </div>
    )
}
