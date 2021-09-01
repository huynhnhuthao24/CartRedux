import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import PropTypes from "prop-types";
import { addToCart, changeMessage } from '../actions/index'
class ProductsContainer extends Component {
  render() {
    const { products } = this.props;
    return (
      <Products>
        {this.showProducts(products)}
      </Products>
    );
  }
  showProducts(products){
    var result = null;
    var {onAddToCart, onChangeMessage} = this.props;
    if(products.length > 0){
      result = products.map((product,index) =>{
        return(
          <Product product={product} key={index} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
        )
      })
    }
    else{
      return(
        <div>Nothing Products</div>
      )
    }
    return result;
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return {
    onAddToCart:  (product) =>{
        dispatch(addToCart(product, 1))
    },
    onChangeMessage: (message) =>{
      dispatch(changeMessage(message));
    },
  }
}
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      inventory: PropTypes.number,
      rating: PropTypes.number
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
