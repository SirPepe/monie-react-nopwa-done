import CurrencyBox from "../components/CurrencyBox";
import { setTravelCurrency, setHomeCurrency } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    travelCurrency: state.travelCurrency,
    homeCurrency: state.homeCurrency,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTravelCurrency: (code) => dispatch(setTravelCurrency(code)),
    setHomeCurrency: (code) => dispatch(setHomeCurrency(code)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyBox);
