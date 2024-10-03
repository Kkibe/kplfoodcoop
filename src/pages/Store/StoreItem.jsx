import React, { useState } from 'react'
import { FaShareAlt, FaShoppingBasket, FaStar } from 'react-icons/fa'
import ShareModal from '../../components/ShareModal/ShareModal';
import { FaExpand, FaEye, FaOpenid, FaScreenpal } from 'react-icons/fa6';

export default  function StoreItem({data}) {
  const [visible, setVisible] = useState(false);
  const [inStore, setInStore] = useState(false);

  return(
    <div className="card">
        {
          visible && <ShareModal visible={visible} setVisible={setVisible}/>
        }
              
        <a className="icon heart"><FaEye /></a>
        
        <a className='icon share' onClick={() => setVisible(true)}><FaShareAlt /></a>
        <div className="image">
            <img src={data.image} alt="" />
        </div>
        <div className="content">
            <div className="meta">
                <span className='trailing'><FaStar className='star'/>{data.stars}K</span>
                <div className="duration">KSH {data.price}</div>
            </div> 
            <h3>{"Product title goes here"}</h3>
            <p>Location: Kangemi</p>

            {
              inStore ? <a className="btn" onClick={() => setInStore(!inStore)}>remove</a> : <a className="add" onClick={() => setInStore(!inStore)}>+</a>
            }
        </div>
    </div>)
}