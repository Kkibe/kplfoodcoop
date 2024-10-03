import React from 'react';
import './About.css';
import Image from '../../assets/ValleyEats.png';
import {FaCheckCircle, FaDollarSign, FaFacebook, FaHeadset, FaInstagram, FaLinkedin, FaShippingFast, FaTwitter, FaYoutube } from "react-icons/fa";
import Faq from '../../components/FaqItem/Faq';
import Review from '../../components/Review/Review';
import { FaXTwitter } from 'react-icons/fa6';

export default function About() {
  return (
    <section className='about' id='about'>
        <div className="row">
        <div className="image">
                <img src={Image} alt="" />
            </div>
            <div className="content">
                <h1 className="heading">About <span style={{color: "#9B5DE5"}}>us</span></h1>
                <p>Catering to the individualistic needs of each student.<br/>
                    Maria Auxilium Girls’ Hr. Sec. School is situated at 15G Damalwar Street, Kancheepuram. It is set in a
                    conducive atmosphere suitable for the growth of young minds. At Maria Auxilium School every child is given
                    individual attention to ensure their holistic development. At MAS , all the needs of the child are met with understanding and utmost care, be it physical, emotional, intellectual or spiritual.
                </p>
            </div>
        </div>
        <div className="row">
            <div className="content">
                <h1 className="heading">Our <span style={{color: "#9B5DE5"}}>mission</span></h1>
                <p>Catering to the individualistic needs of each student.<br/>
                    Maria Auxilium Girls’ Hr. Sec. School is situated at 15G Damalwar Street, Kancheepuram. It is set in a
                    conducive atmosphere suitable for the growth of young minds. At Maria Auxilium School every child is given
                    individual attention to ensure their holistic development. At MAS , all the needs of the child are met with understanding and utmost care, be it physical, emotional, intellectual or spiritual.
                </p>
            </div>
            <div className="image">
                <img src={Image} alt="" />
            </div>
        </div>
        <section>
 </section>
        <h3 className="sub-heading">about us</h3>
        <h1>why choose us?</h1>
        
        <div className="row">
            <div className="content">
                <h3>Efficiency is key</h3>
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.
                </p>
                <div className="icons-container">
                    <div className="icons">
                        <FaShippingFast className='icon'/>
                        <span>Easy delivery</span>
                    </div>
                    <div className="icons">
                        <FaDollarSign className='icon'/>
                        <span>easy payments</span>
                    </div>
                    <div className="icons">
                        <FaHeadset className='icon'/>
                        <span>27/7 service</span>
                    </div>
                </div>
            </div>
        </div>
        <h1>FAQ</h1>
        <div className="faqs-container">
            <Faq />
            <Faq />
            <Faq />
            <Faq />
        </div>
        <Review />
    </section>
  )
}
