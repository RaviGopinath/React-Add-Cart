import React, { Component } from 'react';


export class Product extends Component {
    addToCart(){
        console.log('this', this);
        this.props.addToCart(this.props.prod);
    }
  render() {
    return (
      <div>
          <div>
                <h1>Brand :{this.props.prod.brand}</h1>
                <h2>Price :{this.props.prod.price}</h2>
                
                <button onClick={this.addToCart.bind(this)}>ADD TO CART</button>

            </div>
      </div>
    )
  }
}

export default Product