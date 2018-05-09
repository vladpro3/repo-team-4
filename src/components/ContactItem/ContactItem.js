import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import "./ContactItem.css";
import Avatar from "../Avatar/Avatar";
import {joinChat} from "../../reducers/chat/action";
import {getCurrentUserInfo} from "../../reducers/currentUser/action";

class ContactItem extends PureComponent {
    componentWillMount() {
        this.props.getCurrentUserInfo();

    }

    clickHandler = () => {
        this.props.joinChat(this.props.userId, this.props.currentUser);
    };

    render() {
        return (
            <div className="list-item" onClick={() => this.clickHandler()}>
                <div className="list-item__left-info">
                    <Avatar size={this.props.sizeAvatar} url={this.props.urlAvatar}/>
                    <div className="list-item__left-info__user-info">
                        <span className="list-item__left-info__user-info__name">
                            {this.props.name}
                        </span>
                        <span className="list-item__left-info__user-info__last-message">
                            {this.props.lastMessage}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

ContactItem.propTypes = {
    joinChat: PropTypes.func,
    userId: PropTypes.string,
    sizeAvatar: PropTypes.string,
    urlAvatar: PropTypes.string,
    name: PropTypes.string,
    lastMessage: PropTypes.string,
    getCurrentUserInfo: PropTypes.func,
    currentUser: PropTypes.object
};
export default connect(
    state => ({
        layout: state.navigation.layout,
        currentUser: state.currentUser.currentUser
    }), {
        joinChat,
        getCurrentUserInfo
    }
)(ContactItem);
