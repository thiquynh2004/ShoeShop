/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import ProductItem from "./productItem";

class ProductList extends Component {
  state = {
    detailProduct: null,
  };
  showDetailProduct = (product) => {
    this.setState({ detailProduct: product });
    console.log(product);
  };
  render() {
    const { products } = this.props;

    return (
      <>
        <div className="row">
          {products.map((product) => {
            return (
              <div key={product.id} className="col-sm-4">
                <ProductItem
                  product={product}
                  onSelect={this.showDetailProduct}
                />
                <div>
                  <div
                    class="modal fade"
                    id="productDetail"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-xl">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Chi tiết sản phẩm
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <div className="row">
                            <div className="col-lg-4">
                              <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: "100%" }}
                              ></img>
                            </div>
                            <div className="col-lg-8">
                              <div className="card-header">
                                <h3>Thông tin</h3>
                              </div>
                              <div className="card-body">
                                <h5 className="card-title">
                                  Tên sản phẩm:{product.name}
                                </h5>
                                <p className="card-text">
                                  Loại sản phẩm:
                                  {product.alias}
                                </p>
                                <p className="card-text">
                                  Giá:
                                  {product.price}
                                </p>

                                <p className="card-text">
                                  Miêu tả:
                                  {product.description}
                                </p>
                                <p className="card-text">
                                  Miêu tả tóm tắt:
                                  {product.shortDescription}
                                </p>
                                <p className="card-text">
                                  Số lượng:
                                  {product.quantity}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <Modal product={this.state.detailProduct} /> */}
      </>
    );
  }
}

export default ProductList;
