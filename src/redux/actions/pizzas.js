import { db } from '../../firebase';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false))

  db.collection('pizzas')
    .get()
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
