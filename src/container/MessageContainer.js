import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Message from '../components/Message';
class MessageContainer extends Component {
    
  render() {
    const { message } =this.props;
    return (
      <Message message={message} />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    message: state.message,
  }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
  }


export default connect(mapStateToProps, null)(MessageContainer);
