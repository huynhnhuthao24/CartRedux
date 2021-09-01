import React, { Component } from "react";
class CartTotal extends Component {
  render(){
    const { carts } = this.props;
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showTotal(carts)}</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
            <i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    );
  }
  showTotal = (carts) =>{
    var total = 0;
    if(carts.length > 0){
      for (var i = 0; i < carts.length; i++) {
          total += carts[i].product.price * carts[i].quantity;
      }
    }
    return total;

  }
}

export default CartTotal;
