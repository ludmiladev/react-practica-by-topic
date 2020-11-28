import React from "react";
import PropTypes from "prop-types";

const Product = ({ price, image, title, description, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3 className="card-title">{title}</h3>
      <p className="description">{description}</p>
      <span className="price">{price}</span>
      <button className="btn btn-primary">{buttonText}</button>
    </div>
  );
};

Product.defaultProps = {
  buttonText: "Buy",
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
