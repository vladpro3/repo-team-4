import React from "react";
import PropTypes from "prop-types";


export class OnlineInfo extends React.Component {
    render() {
        if (this.props.online)
            return (
                <span>Online</span>
            );
        else return (
            <span>Last visit: {this.props.time}</span>
        );
    }
}

OnlineInfo.propTypes = {
    time: PropTypes.string,
    online: PropTypes.bool
};
