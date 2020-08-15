import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import Button from "./Button";
import { addToCart } from "../redux/actions/cart";

const allTypes = ["тонкое", "традиционное"];
const allSizes = [26, 30, 40];

function PizzaBlock({ imageUrl, id, name, types, sizes, price }) {
  const dispatch = useDispatch();
  const [activeType, setActiveType] = React.useState(allTypes[0]);
  const [activeSize, setActiveSize] = React.useState(allSizes[0]);

  const onClickHandler = () => {
    const obj = {
      id,
      imageUrl,
      name,
      price,
      size: activeSize,
      type: activeType,
    };
    dispatch(addToCart(obj));
  };

  React.useEffect(() => {
    setActiveSize(sizes[0]);
    setActiveType(allTypes[types[0]]);
  }, [sizes, types]);

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {allTypes.map((type, index) => (
            <li
              key={type}
              className={classNames({
                disabled: !types.includes(index),
                active: activeType === type,
              })}
              onClick={() => setActiveType(type)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {allSizes.map((size) => (
            <li
              key={size}
              className={classNames({
                disabled: !sizes.includes(size),
                active: activeSize === size,
              })}
              onClick={() => setActiveSize(size)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button className="button--add" onClick={onClickHandler}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </Button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default PizzaBlock;
