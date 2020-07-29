import React from 'react';
import PropTypes from 'prop-types';

function Categories({ items }) {
  return (
    <div className="categories">
      <ul>
        <li>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li key={index}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
}

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Categories.defaultProps = {
  items: [],
};
export default Categories;
