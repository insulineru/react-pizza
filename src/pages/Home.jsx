import React from 'react';

import { PizzaBlock, Categories, SortSelect } from '../components';
function Home() {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <SortSelect />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            [...Array(12)].map( index => {
              return (<PizzaBlock key={ index }/>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
