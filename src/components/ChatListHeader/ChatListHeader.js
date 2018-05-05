import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./ChatListHeader.css";
import "../ChatTitle/ChatName/ChatName";
import {changeLayout} from "../../reducers/navigation/action";

class ChatListHeader extends React.Component {
    render() {
        return (
            <div className="chat-list-header">
                <div className="chat-list-header__button" onClick={() => this.props.changeLayout("profile")}>
                    <i className='fa fa-cog'/>
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
    changeLayout: PropTypes.func
};

export default connect(
    () => ({}), {
        changeLayout
    }
)(ChatListHeader);
