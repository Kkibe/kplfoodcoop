import React from 'react';
import './Footer.css';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <section className='footer'>
        <div className="container">
            <div className="wrapper">
                <h3>Quick Links</h3>
                <a href="#">my cart</a>
                <a href="#">get started</a>
                <a href="#">what is kplfoodcoop?</a>
            </div>
            <div className="wrapper">
                <h3>locations</h3>
                <a href="#">Kangemi</a>
                <a href="#">Uthiru</a>
                <a href="#">Ndumbuini</a>
            </div>
            <div className="wrapper">
                <h3>contact us</h3>
                <a href="#">+254 797814027</a>
                <a href="#">kplfoodcoop@gmail.com</a>
                <span>
                    <a href=""><FaWhatsapp className='link'/></a>
                    <a href=""><FaXTwitter className='link'/></a>
                </span>
            </div>
        </div>
        <div className="credit"><span>&copy; 2024 by KPL FOOD COOP</span></div>
    </section>
  )
}
