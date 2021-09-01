import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from '../components/Cart'
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { delCart,changeMessage, updateCart } from '../actions/index'
class CartContainer extends Component {
  render() {
    const { carts } = this.props;
    return (
        <Cart>
          {this.showCarts(carts)}
          {this.showTotalAmount(carts)}
        </Cart>
        
  
    );
  }
  showCarts(carts) {
    var result = null;
    var { onDelCart,onChangeMessage,onUpdateCart } = this.props
    if (carts.length > 0) {
      result = carts.map((cart, index) => {
        return (
          <CartItem onUpdateCart={onUpdateCart} cart={cart} key={index} onDelCart={onDelCart} onChangeMessage={onChangeMessage} />
        )
      })
    }
   
    return result;
  }
  showTotalAmount = (carts) =>{
    var totalAmount = null;
    if(carts.length > 0){
      totalAmount = <CartTotal carts={carts} />
      
    }
    return totalAmount;
  }
}
const mapStateToProps = (state) => {
  return {
    carts: state.carts,
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return {
   onDelCart: (product,quantity) =>{
      dispatch(delCart(product, quantity))
    },
    onChangeMessage: (message) =>{
      dispatch(changeMessage(message));
    },
    onUpdateCart: (product,quantity) =>{
      dispatch(updateCart(product,quantity));
    }
  }
}
CartContainer.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      inventory: PropTypes.number,
      rating: PropTypes.number
    }).isRequired,
    quantity: PropTypes.number.isRequired
  })
  ).isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
