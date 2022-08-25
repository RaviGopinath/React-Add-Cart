import React, { Component } from 'react';
import Cart from './Cart';
import Product from './Product';
import './Proucts.css';

export default class main extends Component {
    constructor(){
        super();
        this.state = {
            cartItems : [],
            products : [
                { brand :"Boat", price : "1299", Quantity : 1},
                {brand :"Samsung", price : "699", Quantity : 1},
                { brand :"JBL", price : "1299", Quantity : 1},
                { brand :"Apple", price : "4999",  Quantity : 1}
            ]
        }
    }
    addToCart = (data) =>{
        console.log('data', data, this.state.cartItems);
        let x = this.state.cartItems
        let a = x.includes(data)
        if(a == false){
        this.setState({ cartItems : [...this.state.cartItems,data]});
        }
        else{
          data.Quantity++
          this.setState({ cartItems : [...this.state.cartItems]});
        }
    }
    removed=(prop)=>{
console.log(prop)
let value = this.state.cartItems;
let found = value.includes(prop)
console.log(found)
if(found){
  let index = value.indexOf(prop)
  console.log(index)
  value.splice(index ,1)
  prop.Quantity=1
  this.setState({ cartItems : [...this.state.cartItems]});
}
    }
  render() {
    return (
      <div>
        <div className='products'>
        {this.state.products.map((prod, index) => (
          <Product key={index} prod = {prod} addToCart = {this.addToCart}  />
        
        ))}
        </div>
        <div className='carts'>
        {this.state.cartItems.map((prod, index) =>(
            <Cart key={index} prod ={prod}  removed={this.removed}/> 
        ))}
        </div>
      </div>
    )
  }
}
