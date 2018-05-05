import React from "react";
import PropTypes from "prop-types";

import "./NumberOfUsers.css";

export class NumberOfUsers extends React.Component {
    state = {
        online: true
    };

    render() {
        return(
            <span>Members: {this.props.number}</span>
        );
    }
}

NumberOfUsers.propTypes = {
    number: PropTypes.number
};
