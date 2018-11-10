import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { select }     from "d3-selection";
import { axisRight }  from "d3-axis";

class YAxis extends Component{
    static propTypes = {
        scale: PropTypes.func,
        width: PropTypes.number,
        padding: PropTypes.number
    }

    findYAxis(){
        let { scale }    = this.props;
        let { padding }  = this.props;
        let { width }    = this.props;
        let axisLocation = `translate(${width - padding}, 0)`;

        // Append y-axis
        select(this.node)
            .attr("transform", axisLocation)
            .call(axisRight(scale));
    }

    render(){
        return(
            <g ref={ node => this.node = node }></g>
        );
    }

    componentDidMount(){
        this.findYAxis();
    }

    componentDidUpdate(){
        this.findYAxis();
    }
}

export default YAxis;
