import React, { useEffect, useState } from 'react';
import { FaCopy, FaFacebook, FaInstagram, FaLink, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaXmark } from 'react-icons/fa6';
import "./ShareModal.css"
import { FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton, LinkedinShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';


export default function ShareModal({visible, setVisible}) {
  useEffect(() => {
    document.onscroll = () => {
      if(visible){
        setVisible(false);
      }
    }
  }, []);
  return (
    <div className='share-modal'>
        
        <div className="content-share">
            <p><span>Share this link via</span> <FaXmark className='close' onClick={() => setVisible(!visible)}/></p>
            <ul className="icons">
                <a className='facebook'>
                  <FacebookShareButton   quote={'Dummy text!'} url='/' description={"aiueo"} hashtag='food'><FaFacebook/></FacebookShareButton>  </a>
                <a className='twitter' ><TwitterShareButton url='Example.Com/Share-Link' title='lorem ipsum dolo sit amet.'  hashtags={["test-tag", "test-tag-again"]} ><FaXTwitter/></TwitterShareButton></a>
                <a className='whatsapp'><WhatsappShareButton url='nutricon.com' title=""><FaWhatsapp /></WhatsappShareButton></a>
            </ul>
            <p>Or Copy Link</p>
            <div className="field">
                <FaLink className='link-class'/>
                <input type="text" value='example.com/share-link'/>
                <button><FaCopy/></button>
            </div>
        </div>

    </div>
  );
}