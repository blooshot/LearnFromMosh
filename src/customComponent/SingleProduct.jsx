import React, { Component } from "react";
// import { getSingleProduct } from "../dataHelper/fakeProducts";
import { getProducts, getSingleProduct } from "@/dataHelper/fakeProducts";
import { useLocation, useMatches } from "react-router-dom";
import queryString from "query-string";

const SingleProduct = () => {
  /* const product = getSingleProduct(); */
  const getAllProducts = getProducts();
  let location = useLocation();
  const matches = useMatches();
  const result = queryString.parse(location.search);
  console.log("mat", matches);
  console.log("loc", result);

  const product1 = getAllProducts.filter((product) => {
    if (product.id == matches[1].params.id) return product;
  });

  return (
    <main className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product1[0].image}
            className="img-fluid"
            alt={product1[0].title}
          />
        </div>
        <div className="col-md-6">
          <h1>ID: {matches[1].params.id}</h1>
          <h2>{product1[0].title}</h2>
          <p className="text-muted lead">$49.99</p>
          <p>{product1[0].description}</p>
          <div className="d-flex align-items-center mb-3">
            <span className="text-muted me-2">Quantity:</span>
            <select className="form-select" aria-label="Quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
