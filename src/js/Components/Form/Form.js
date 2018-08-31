import React, { Component } from "react";
import PropTypes            from "prop-types";
import { userInput }        from "../../Redux";
import { fetchData }        from "../../Redux";
import { connect }          from "react-redux";
import "./form.scss";

class Form extends Component{
    onSubmit = (event) => {
        let assetName = document.querySelector("#user-input").value.toUpperCase();
        if(assetName !== "")
        {
            this.props.userInput(assetName);
            this.props.fetchData(assetName);
            document.querySelector("#user-input").value = "";
        }
        event.preventDefault();
    }

    render(){
        console.log(this.props);
        return(
            <div className="user__form-container">
                <form onSubmit={ this.onSubmit } className="user__form">
                    <input
                        type="text"
                        placeholder={ this.props.placeholder }
                        id="user-input"
                        className="user__form-input"
                    />
                    <button
                        type="submit"
                        className="user__form-submit"
                    >
                       VIEW
                    </button>
                </form>
            </div>
        );
    }
}

// Map state to props
let mapState = (state) => {
    return {
        ...state.userInteraction,
        ...state.fetchedData
    };
};

// Map dispatch to props
let mapDispatch = (dispatch) => {
    return {
        userInput: (assetName) => {
            dispatch(userInput(assetName));
        },
        fetchData: (assetName) => {
            dispatch(fetchData(assetName));
        }
    };
};

// Prop type checking
Form.propTypes = {
    placeholder: PropTypes.string,
    userInput: PropTypes.func,
    fetchData: PropTypes.func
};

export default connect(mapState, mapDispatch)(Form);
