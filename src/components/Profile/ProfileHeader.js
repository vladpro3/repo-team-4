import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./Profile.css";
import {goPrevLayout} from "../../reducers/navigation/action";

class ProfileHeader extends Component {
    clickGoBackButtonHandler = () => {
        this.props.goPrevLayout(this.props.prevLayout);
    };

    render() {
        return (
            <div className="header">
                <div className="button button-1" onClick={() => this.clickGoBackButtonHandler()}>
                    <i className="fa fa-arrow-left"/>
                </div>
                <h2>Профиль</h2>
                <div className="button button-2">
                    <i className="fa "/>
                </div>
            </div>
        );
    }
}

ProfileHeader.propTypes = {
    prevLayout: PropTypes.string,
    goPrevLayout: PropTypes.func,
};

export default connect(
    state => ({
        layout: state.navigation.layout,
    }), {
        goPrevLayout
    }
)(ProfileHeader);
