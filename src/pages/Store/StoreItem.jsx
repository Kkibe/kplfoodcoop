import React, { useState } from 'react'
import { FaShareAlt, FaShoppingBasket, FaStar } from 'react-icons/fa'
import ShareModal from '../../components/ShareModal/ShareModal';

export default  function StoreItem({data}) {
  const [visible, setVisible] = useState(false);
  const [inStore, setInStore] = useState(false);

  return(
    <div className="card">
        {
          visible && <ShareModal visible={visible} setVisible={setVisible}/>
        }
              
        <a className="icon heart"><FaShoppingBasket /></a>
        
        <a className='icon share' onClick={() => setVisible(true)}><FaShareAlt /></a>
        <div className="image">
            <img src={data.image} alt="" />
        </div>
        <div className="content">
            <div className="meta">
                <span className='trailing'><FaStar className='star'/>{data.stars}K</span>
                <div className="duration">KSH {data.price}</div>
            </div> 
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>
              {
                data.categories && data.categories.map(category =>{
                  return <div className="hash">{category}</div>
                })
              }
            </p>
            {
              inStore ? <a className="btn" onClick={() => setInStore(!inStore)}>remove</a> : <a className="add" onClick={() => setInStore(!inStore)}>+</a>
            }
        </div>
    </div>)
}