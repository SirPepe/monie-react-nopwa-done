import ResultBox from "../components/ResultBox";
import { setTravelAmount } from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    travelCurrency: state.travelCurrency,
    homeCurrency: state.homeCurrency,
    travelAmount: state.travelAmount,
    homeAmount: state.homeAmount,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTravelAmount: (amount) => dispatch(setTravelAmount(amount)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultBox);
