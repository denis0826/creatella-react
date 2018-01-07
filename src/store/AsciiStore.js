/* global fetch, API_HOST */
import React, { Component } from 'react';
import ndjsonStream from 'can-ndjson-stream';
import ProductGrid from '../../src/components/ProductGrid';

class AsciiStore extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    // TODO: some caching strategy
    // TODO: move to a redux action
    this.fetchProducts();
  }

  fetchProducts() {
    // Request products, read NDJSON stream, append products as they come through
    fetch(`${API_HOST}/products`)
      .then(data => ndjsonStream(data.body))
      .then((stream) => {
        const streamReader = stream.getReader();
        const readHandler = (result) => {
          if (result.done) return;

          this.setState({
            products: this.state.products.concat(result.value),
          });

          streamReader.read().then(readHandler);
        };
        streamReader.read().then(readHandler);
      });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Ascii Faces</h1>
        </header>
        <ProductGrid products={this.state.products} />
      </div>
    );
  }
}

export default AsciiStore;
