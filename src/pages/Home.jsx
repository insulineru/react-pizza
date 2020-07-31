import React from 'react';
import axios from 'axios';

import { PizzaBlock, Categories, SortSelect, LoadingPizzaBlock } from '../components';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortByItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const [category, setCategory] = React.useState(null);
  const [sortBy, setSortBy] = React.useState(sortByItems[0]);

  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:1337/pizzas', {})
      .then(({ data }) => {
        setPizzas(data);
        setLoading(false);
      });
  }, [sortBy, category]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories items={categories} onClickCategory={setCategory} activeCategory={category}/>
          <SortSelect items={sortByItems} onClickSort={setSortBy} activeSort={sortBy}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {loading ?
            [...Array(12)].map( (item, index) => {
              return (<LoadingPizzaBlock key={ index }/>)
            }) :
            pizzas.map(item => {
              return (<PizzaBlock item={item} key={item.id}/>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
