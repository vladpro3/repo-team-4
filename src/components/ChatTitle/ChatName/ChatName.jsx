import React from "react";
import PropTypes from "prop-types";

import "./ChatName.css";

class ChatName extends React.Component {
    render() {
        return (
            <h2>{this.props.name}</h2>
        );
    }
}

ChatName.propTypes = {
    name: PropTypes.string
};

export default ChatName;
