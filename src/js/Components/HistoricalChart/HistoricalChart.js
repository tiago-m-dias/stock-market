import React from "react";
import { connect } from "react-redux";
import { GGPLOT } from "react-d3-ggplot";
import { Line } from "react-d3-ggplot";
import { useDimensions } from "../../_hooks/";

function HistoricalChart(props) {
  const dimensions = useDimensions();
  const { data, activeIndex } = props;

  // format data
  const formatted =
    data.length > 0
      ? data[activeIndex].chart.map(item => ({
          ...item,
          date: new Date(item.date)
        }))
      : null;

  if (!formatted) {
    return null;
  }

  const stockTrend = data[activeIndex].quote.change < 0 ? "#f72121" : "#19be87";

  return (
    <GGPLOT data={formatted} aes={["date", "close"]} dimensions={dimensions}>
      <Line fill={stockTrend} />
    </GGPLOT>
  );
}

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(HistoricalChart);
