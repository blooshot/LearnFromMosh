import React, { Component } from "react";
import "./products.css";
import { getProducts } from "@/dataHelper/fakeProducts";
import { Link, Route, Routes } from "react-router-dom";

class Products extends Component {
  state = {
    products: getProducts(),
  };
  render() {
    const { products } = this.state;

    console.log(products);
    const colors = [
      "dark",
      /* "bg-light-subtle", */
      "bg-danger-subtle",
      "bg-primary-subtle",
      "bg-success-subtle",
      "bg-warning-subtle",
      "bg-info-subtle",
      "dark",
      "bg-warning",
      "bg-info",
      "bg-dark-subtle",
      "bg-success",
    ];
    return (
      <div className="">
        {products.map((product) => (
          <div className={`card ${colors[product.id]}`} key={product.id}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <div className="text-section">
                <h5 className="card-title titlea">
                  <Link to={`/product/${product.id}`}>
                    {product.title.slice(0, 10)}
                  </Link>
                </h5>
                <p className="card-text">{product.description.slice(0, 55)}</p>
              </div>
              <div className="cta-section">
                <div>${product.price}</div>
                <a href="#" className="btn btn-light">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
