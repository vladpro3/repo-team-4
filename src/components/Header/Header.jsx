import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./Header.css";
import "../ChatTitle/ChatName/ChatName";
import {ChatTitle} from "../ChatTitle/ChatTitle";
import {changeLayout} from "../../reducers/navigation/action";

class Header extends React.Component {
    clickGoBackButtonHandler = () => {
        this.props.changeLayout("chatListLayout");
    };

    clickRightButtonHandler = () => {
        this.props.changeLayout("chatSettings");
    };

    render() {
        let headerClass = "header-default";
        let chatName = this.props.chatName;
        if (this.props.chatName && this.props.chatName.split(", ").length > 1) {
            this.props.chatName.split(", ").forEach((name) => {
                if (name !== this.props.currentUser.name) {
                    chatName = name;
                }
            });
        }
        return (
            <div className={headerClass}>
                <div className="button button-1" onClick={() => this.clickGoBackButtonHandler()}>
                    <i className="fa fa-arrow-left"/>
                </div>
                <ChatTitle chatName={chatName}/>
                <div className="button button-2" onClick={() => this.clickRightButtonHandler()}>
                    <i className="fa fa-cog"/>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    changeLayout: PropTypes.func,
    goPrevLayout: PropTypes.func,
    prevLayout: PropTypes.string,
    chatName: PropTypes.string,
    currentUser: PropTypes.object
};

export default connect(
    state => ({
        layout: state.navigation.layout,
        currentUser: state.currentUser.currentUser
    }), {
        changeLayout
    }
)(Header);
