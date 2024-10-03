import React from 'react'
import './Store.css';
import StoreItem from './StoreItem';
import { dishes } from '../../../data';
export default function Store() {
  return (
    <section className='cooking' id='cooking'>
        <h3 className="sub-heading">Discover Variety</h3>
        <h1 className="heading">Use search....</h1>
        <div className="container">
          {
            dishes && dishes.map(item => {
              return <StoreItem data={{...item}} key={item.id} />
            })
          }
        </div>
    </section>
  )
}
