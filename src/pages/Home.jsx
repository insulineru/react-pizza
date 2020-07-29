import React from 'react';

import { PizzaBlock, Categories, SortSelect } from '../components';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortByItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories items={categories} />
          <SortSelect items={sortByItems} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            [...Array(12)].map( (item, index) => {
              return (<PizzaBlock key={ index }/>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
