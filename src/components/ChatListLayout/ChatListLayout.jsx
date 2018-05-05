import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./ChatListLayout.css";
import ChatList from "../ChatList/ChatList";
import ChatListHeader from "../ChatListHeader/ChatListHeader";
import {changeLayout} from "../../reducers/navigation/action";
import {getCurrentUserInfo} from "../../reducers/currentUser/action";

class ChatListLayout extends React.Component {
    componentWillMount() {
        this.props.getCurrentUserInfo();
    }

    render() {
        return (
            <div>
                <ChatListHeader/>
                <ChatList/>
                <div className='chat-list__footer' onClick={() => this.props.changeLayout("contacts")}>Контакты</div>
            </div>
        );
    }
}

ChatListLayout.propTypes = {
    getCurrentUserInfo: PropTypes.func,
    changeLayout: PropTypes.func
};

export default connect(
    () => ({}), {
        changeLayout,
        getCurrentUserInfo
    }
)(ChatListLayout);
