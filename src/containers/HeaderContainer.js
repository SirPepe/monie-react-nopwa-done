import Header from "../components/Header";
import { fetchRates } from "../actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRates: () => dispatch(fetchRates()),
  }
};

export default connect(null, mapDispatchToProps)(Header);
