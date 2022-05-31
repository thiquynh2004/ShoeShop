import React, { Component } from "react";
import ProductList from "./productList";
import data from "./data.json";

class ShoeShop extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center">ShoeShop</h1>
          <ProductList products={data} onSelect={this.showDetailProduct}/>
         
        </div>
      </div>
    );
  }
}

export default ShoeShop;
