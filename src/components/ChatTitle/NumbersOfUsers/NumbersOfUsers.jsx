import React from "react";
import PropTypes from "prop-types";


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
