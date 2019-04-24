import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchIEXData } from "../../Redux/";
import { useSymbols } from "../../_hooks/";
import "./style.scss";

function validate(userInput) {
  const singleWord = /\w+/;
  const isValidInput = userInput.match(singleWord);

  if (isValidInput !== null) return isValidInput[0].toUpperCase();

  return isValidInput;
}

function InputStock(props) {
  const [input, setInput] = useState("");
  const symbols = useSymbols();
  const [matches, setMatches] = useState([]);

  const onChange = event => {
    setInput(event.target.value);

    // check for possible stock matches.
    const validInput = validate(event.target.value);
    const pattern = validInput ? new RegExp(`([^"]*${validInput}[^"]*)`, "g") : null;
    const possibleStocksToQuery = symbols.match(pattern);

    setMatches(possibleStocksToQuery);
  };

  const onSubmit = event => {
    event.preventDefault();
    event.target.children[0].value = ""; // clear user input

    const validInput = validate(input);

    // won't fetch duplicate entries
    const duplicateEntry = props.data.filter(item => item.company.symbol === validInput);

    if (duplicateEntry.length > 0) alert(`${validInput} is already in your list.`);
    else {
      // fetch stock market data from iex api
      if (validInput) props.fetchIEXData(validInput);
      else alert("Invalid input.");
    }
  };

  useEffect(() => {
    if (props.data.length === 0) {
      props.fetchIEXData("tsla");
    }
  }, []);

  return (
    <form className="row" onSubmit={onSubmit}>
      <div className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="text" className="validate" placeholder="Search Stocks"/>
            <span className="helper-text" data-error="wrong" data-success="right">
              Helper text
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}

InputStock.propTypes = {
  className: PropTypes.string,
  fetchIEXData: PropTypes.func,
  data: PropTypes.array
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  { fetchIEXData }
)(InputStock);
