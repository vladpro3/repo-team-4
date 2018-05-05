import React, {Component} from "react";
import PropTypes from "prop-types";

import "./dataMessage.css";

export class DateMessage extends Component {
    render() {
        return (
            <div className='balloon__data-message'>
                <span className='data-message'>
                    {this.props.dateMessage}
                </span>
                <span className='data-message'/>
            </div>
        );
    }
}

DateMessage.propTypes = {
    dateMessage: PropTypes.string
};
