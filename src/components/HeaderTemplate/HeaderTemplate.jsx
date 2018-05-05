import React from "react";
import PropTypes from "prop-types";

import "./HeaderTemplate.css";
import "../ChatTitle/ChatName/ChatName";

export class HeaderTemplate extends React.Component {
    render() {
        return(
            <div className="header-template">
                <div className="header-template__button">
                    <i className={this.props.leftButtonClass}/>
                </div>
                <h2>{this.props.title}</h2>
                <div className="header-template__button">
                    <i className={this.props.rightButtonClass}/>
                </div>
            </div>
        );
    }
}

HeaderTemplate.propTypes = {
    title: PropTypes.string,
    rightButtonClass: PropTypes.string,
    leftButtonClass: PropTypes.string
};
