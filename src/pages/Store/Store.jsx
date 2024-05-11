import React from 'react'
import './Store.css';
import StoreItem from './StoreItem';
import { dishes } from '../../../data';
import PopularStoreItem from './PopularStoreItem';
export default function Store() {
  return (
    <section className='cooking' id='cooking'>
        <h1 className="heading">Explore Brands</h1>
        <div className="container">
          {
            dishes && dishes.map(item => {
              return <PopularStoreItem data={{...item}} key={item.id} />
            })
          }
        </div>
        <h3 className="sub-heading">Discover Variety</h3>
        <h1 className="heading">Popular Drinks</h1>
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
