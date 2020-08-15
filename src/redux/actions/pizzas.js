import { db } from '../../firebase';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false))

  let items = db.collection('pizzas')

  if (category) items = items.where('category', '==', category)
  if (sortBy) {
    items = items.orderBy(sortBy.type, sortBy.order)
  }

  items.get()
    .then(querySnapshot => {
      const pizzas = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      dispatch(setPizzas(pizzas))
    })
}

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
