import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./ChatListHeader.css";
import "../ChatTitle/ChatName/ChatName";
import {changeLayout} from "../../reducers/navigation/action";
import {openUserProfile} from "../../reducers/currentUser/action";

class ChatListHeader extends React.Component {
    openCurrentUserProfile = () => {
        this.props.openUserProfile(this.props.currentUser._id);
    };

    render() {
        return (
            <div className="chat-list-header">
                <div className="chat-list-header__button" onClick={() => this.openCurrentUserProfile()}>
                    <i className='fa fa-user'/>
                </div>
                <h2>Диалоги</h2>
                <div className="chat-list-header__button" onClick={() => this.props.changeLayout("createRoom")}>
                    <i className='fa fa-plus'/>
                </div>
            </div>
        );
    }
}

ChatListHeader.propTypes = {
    changeLayout: PropTypes.func,
    currentUser: PropTypes.object,
    openUserProfile: PropTypes.func
};

export default connect(
    state => ({
        currentUser: state.currentUser.currentUser
    }), {
        changeLayout,
        openUserProfile
    }
)(ChatListHeader);
