import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { PizzaBlock, Categories, SortSelect, LoadingPizzaBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortByItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home({ setCartItems }) {
  const dispatch = useDispatch();
  const onClickCategoryHandler = (index) => dispatch(setCategory(index));
  const onClickSortHandler = (sortBy) => dispatch(setSortBy(sortBy));
  const category = useSelector(state => state.filters.category);
  const sortBy = useSelector(state => state.filters.sortBy);
  const pizzas = useSelector(state => state.pizzas.items);
  const isLoaded = useSelector(state => state.pizzas.isLoaded);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, dispatch, sortBy]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories items={categories} onClickCategory={onClickCategoryHandler} activeCategory={category}/>
          <SortSelect items={sortByItems} onClickSort={onClickSortHandler} activeSort={sortBy}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded ?
            pizzas.map(item => {
              return (<PizzaBlock {...item} key={item.id} addToCart={setCartItems} />)
            }) :
            [...Array(12)].map( (item, index) => {
              return (<LoadingPizzaBlock key={ index }/>)
            })
          }
        </div>
      </div>
    </div>
  )
}


export default Home;
