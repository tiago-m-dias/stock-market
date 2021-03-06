import React from "react";
import { connect } from "react-redux";
import { InputStock } from "../../Components/";
import { StockDescription } from "../../Components/";
import { ActiveChart } from "../../Components/";
import { StockNews } from "../../Components/";
import "./style.scss";

function Home(props) {
  return (
    <section className={props.data.length === 0 ? "fill-viewport" : ""}>
      <InputStock />
      <ActiveChart />
      <StockDescription />
      <StockNews />
    </section>
  );
}

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(Home);
