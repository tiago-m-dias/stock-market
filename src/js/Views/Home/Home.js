import React, { Component }  from "react";
import { Form, Table }       from "../../Components";
import { DataSelector }      from "../DataSelector";
//import { LineChart }         from "../../Components";
//import { Histogram }        from "../../Components";
//import { url, apiKey }       from "./api";
//import { findPercentChange } from "./Utilities";
import "./home.scss";

class Home extends Component{
    // Get user input
    onSubmit = (event) => {
        // Need variable for userInput.
        let userInput = document.getElementById("section__form-input").value.toUpperCase();
        console.log(userInput);

        // Reset user form field.
        document.getElementById("section__form-input").value = "";

        // Prevent refresh of the page when submitting stock to view.
        event.preventDefault();
    }

    onChange = (event) => {
        let typeOfDataToRequest = event.target.value;
        console.log(typeOfDataToRequest);
    }

    render(){
        return(
            <section>
                <DataSelector onChange={ this.onChange }/>
                <Form onSubmit={ this.onSubmit }/>
                {/*
                <Table data={ this.state }/>
                <LineChart
                    errorMessage={ this.state.errorMessage }
                    xValues={ this.state.dates }
                    yValues={ this.state.adjustedClose }
                    width={ 600 }
                    height={ 400 }
                    color={ "orange" }
                    padding={ 55 }
                    percent={ false }
                />
                <LineChart
                    errorMessage={ this.state.errorMessage }
                    xValues={ this.state.dates }
                    yValues={ this.state.percentChange }
                    width={ 600 }
                    height={ 400 }
                    color={ "crimson" }
                    padding={ 55 }
                    percent={ true }
                />
                <Histogram
                    data={ this.state }
                    width={ 600 }
                    height={ 400 }
                    padding={ 1 }
                    scalar={ 15 }
                    color="crimson"
                />
                */}
            </section>
        );
    }
}

export default Home;
