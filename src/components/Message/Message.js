import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Avatar from "../Avatar/Avatar";
import {Balloon} from "../Balloon/Balloon";
import "./Message.css";

class Message extends Component {
    render() {
        let avatars = this.props.usersAvatars[this.props.usersAvatars.indexOf(this.props.userId) + 1];
        if (avatars && !~avatars.indexOf("http://") && !~avatars.indexOf("https://"))
            avatars = null;
        return (
            <div className={this.props.isMyMessage ?
                "outgoing-message  messages-layout__message" : "incoming-message messages-layout__message"}>
                {!avatars && <Avatar size='small' userId={this.props.userId}/>}
                {avatars && <Avatar size='small' url={avatars} userId={this.props.userId}/>}
                <Balloon message={this.props.message.message} typeMessage={!this.props.isMyMessage}
                    dateMessage={this.props.message.created_at}/>
            </div>
        );
    }
}

Message.propTypes = {
    isMyMessage: PropTypes.bool,
    url: PropTypes.string,
    message: PropTypes.object,
    usersAvatars: PropTypes.array,
    userId: PropTypes.string
};

export default connect(
    state => ({
        usersAvatars: state.chat.usersAvatars
    }), {})(Message);
