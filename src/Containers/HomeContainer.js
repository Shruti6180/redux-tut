import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../Services/Actions/Action";
import Home from "../Components/Home";

const mapStateToProps = (state) => ({
  cartData: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
