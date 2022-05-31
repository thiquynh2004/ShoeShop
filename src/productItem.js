/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { product, onSelect } = this.props;
    // console.log(product)
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
            <button className="btn btn-dark">
              Add to cart
            </button>
            <button className="btn btn-info" 
             data-bs-toggle="modal"
             data-bs-target="#productDetail"
            onClick={() => onSelect(product)}
            style={{margin: '0 10px'}}>
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
