import React from 'react';
import { db } from '../firebase';

import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { PizzaBlock, Categories, SortSelect, LoadingPizzaBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';

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
  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    db.collection('pizzas')
      .get()
      .then(querySnapshot => {
        const pizzas = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setPizzas(pizzas)
        setLoading(false)
      })
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories items={categories} onClickCategory={onClickCategoryHandler} activeCategory={category}/>
          <SortSelect items={sortByItems} onClickSort={onClickSortHandler} activeSort={sortBy}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {loading ?
            [...Array(12)].map( (item, index) => {
              return (<LoadingPizzaBlock key={ index }/>)
            }) :
            pizzas.map(item => {
              return (<PizzaBlock {...item} key={item.id} addToCart={setCartItems} />)
            })
          }
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  setCartItems: PropTypes.func.isRequired,
}

export default Home;
