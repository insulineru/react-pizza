import React from 'react';

import { PizzaBlock, Categories, SortSelect } from '../components';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortByItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const [category, setCategory] = React.useState(null);
  const [sortBy, setSortBy] = React.useState(sortByItems[0]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories items={categories} onClickCategory={setCategory} activeCategory={category}/>
          <SortSelect items={sortByItems} onClickSort={setSortBy} activeSort={sortBy}/>
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
