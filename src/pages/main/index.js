import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Main extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("/products");

    this.setState({ products: response.data.docs });
  };

  render() {
    const { products } = this.state;

    return (
      <div className="product-list">
        {products.map(p => (
          <article key={p._id}>
            <strong>{p.title}</strong>
            <p>{p.description}</p>

            <a href="">Acessar</a>
          </article>
        ))}
      </div>
    );
  }
}
