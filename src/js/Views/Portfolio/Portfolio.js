import React               from "react";
import { Component }       from "react";
import { RiskReturnChart } from "../../Components/";
import { Input }           from "../../Components/";
import { Dialog }          from "../../Components/";
import { SelectFrequency } from "../../Components/";
//import { Loader }          from "../../Components/";
import "./portfolio.scss";

class Portfolio extends Component{
    render(){
        return(
            <>
            <section className="main-sidebar">
                <div className="sidebar-container">
                    <SelectFrequency/>
                    <Input/>
                    <Dialog>
                        <Dialog.Errors/>
                        <Dialog.Warnings/>
                        <Dialog.Duplicate/>
                    </Dialog>
                </div>
            </section>
            <section className="main-content">
                <RiskReturnChart/>
            </section>
            </>
        );
    }
}

export default Portfolio;
