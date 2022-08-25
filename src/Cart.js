import React, { Component } from 'react'

export class Cart extends Component {
  removed=()=>{
    console.log(this)
    this.props.removed(this.props.prod)
  }
  plus =() =>{
    console.log('this', this);
    this.props.plus(this.props.prod)
  }
  minus =() =>{
    console.log('this', this);
    this.props.minus(this.props.prod)
  }
  render() {
    return (
      <div>
          <h1>Brand :{this.props.prod.brand}</h1>
          <h2>Price :{this.props.prod.price}</h2>
          <h3>Quantity :{this.props.prod.Quantity}</h3>
          <button onClick={this.removed}>REMOVE</button>
          <button onClick={this.plus}>+</button>
          <button onClick={this.minus}>-</button>
      </div>
    )
  }
}

export default Cart