import React, { Component } from "react";
import * as Message from "../constants/Message" 
class CartItem extends Component {
  render(){
    const { cart } = this.props;
    console.log(cart);
    const { quantity } = cart;
    console.log(quantity);
    return(
      <tr>
      <th scope="row">
        <img src={cart.product.image}
          alt={cart.product.name} className="img-fluid z-depth-0" />
      </th>
      <td>
        <h5>
          <strong>{cart.product.name}</strong>
        </h5>
      </td>
      <td>{cart.product.price}</td>
      <td className="center-on-small-only">
        <span className="qty">{quantity}</span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label 
          className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
          onClick={ () =>{ this.onUpdateQuantity(cart.product, cart.quantity - 1)}}
          >
            <a href="#">  - </a>
          </label>
          <label 
          className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
          onClick={ () =>{ this.onUpdateQuantity(cart.product, cart.quantity + 1)}}
          >
            <a href="#">+</a>
          </label>
        </div>
      </td>
      <td>{this.showSubTotal(cart.product.price,cart.quantity)}</td>
      <td>
        <button 
          type="button" 
          className="btn btn-sm btn-primary waves-effect waves-light" 
          data-toggle="tooltip" 
          data-placement="top"
          title="" 
          data-original-title="Remove item"
          onClick={ () => this.onDelCart(cart) }
          >
          X
        </button>
      </td>
    </tr>
    )
  }
  onUpdateQuantity = (product,quantity) =>{
    if(quantity > 0){
      this.props.onUpdateCart(product,quantity);
      this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCSESS);
    }

  }
  onDelCart = (cart) =>{
    this.props.onDelCart(cart);
    this.props.onChangeMessage(Message.MSG_DEL_CART_SUCCESS);
  }
  showSubTotal = (price,quantity) =>{
      return price * quantity;
  }
  
}

export default CartItem;
