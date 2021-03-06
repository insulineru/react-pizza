import React from "react";
import PropTypes from "prop-types";

function Categories({ items, activeCategory, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={index}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.oneOf([PropTypes.number, PropTypes.null]),
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  items: [],
  activeCategory: null,
};
export default Categories;
