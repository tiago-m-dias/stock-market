import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./toggler.scss";

class Toggler extends Component{
    static propTypes = {
        children: PropTypes.func,
        stockData: PropTypes.array
    }

    state = {
        activeIndex: 0
    }

    onChange = (event) => {
        // use props to select a single data set
        this.setState({
            activeIndex: event.target.value
        });
    }

    propCollection(){
        return {
            stockData: this.props.stockData,
            onChange: this.onChange,
            activeIndex: this.state.activeIndex
        };
    }

    render(){
        return(
            this.props.children(this.propCollection())
        );
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, null)(Toggler);