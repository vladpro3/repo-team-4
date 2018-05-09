import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import "./ListItem.css";
import Avatar from "../Avatar/Avatar";
import {joinExistingChat} from "../../reducers/chat/action";

class ListItem extends Component {
    clickHandler = () => {
        this.props.joinExistingChat(this.props.roomId);
    };

    render() {
        let currentTime = new Date(), dateMessage, lastMessage = this.props.lastMessage;
        const date = this.props.date;

        if ((currentTime - date) < (1000 * 60))
            dateMessage = "Только что";
        else if ((currentTime - date) < (5000 * 60))
            dateMessage = "Минуту назад";
        else if ((currentTime - date) < (7000 * 60))
            dateMessage = "5 минут назад";
        else {
            let messageDate = new Date(date);
            let day = messageDate.getDate() < 10 ? "0" + messageDate.getDate() : messageDate.getDate();
            let month = messageDate.getMonth();
            month++;
            month = month < 10 ? "0" + month : month;
            let hour = messageDate.getHours() < 10 ? "0" + messageDate.getHours() : messageDate.getHours();
            let minutes = messageDate.getMinutes() < 10 ? "0" + messageDate.getMinutes() : messageDate.getMinutes();
            let seconds = messageDate.getSeconds() < 10 ? "0" + messageDate.getSeconds() : messageDate.getSeconds();

            dateMessage = (day + "." + month + " " + hour + ":" + minutes + ":" + seconds);
        }

        if (!this.props.lastMessage) {
            dateMessage = "";
            lastMessage = <small>Сообщений пока нет</small>;
        }

        let chatName = this.props.name;
        if (chatName && chatName.split(", ").length > 1)
            chatName.split(", ").forEach((name) => {
                if (name !== this.props.currentUser.name)
                    chatName = name;
            });

        return (
            <div className="list-item" onClick={() => this.clickHandler()}>
                <div className="list-item__left-info">
                    <Avatar size={this.props.sizeAvatar} url={this.props.urlAvatar}/>
                    <div className="list-item__left-info__user-info">
                        <span className="list-item__left-info__user-info__name">
                            {chatName}
                        </span>
                        <span className="list-item__left-info__user-info__last-message">
                            {lastMessage}
                        </span>
                    </div>
                </div>

                <div className="list-item__new-messages">
                    <span className="list-item__new-messages__date">
                        {dateMessage}
                    </span>
                </div>
            </div>
        );
    }
}

ListItem.propTypes = {
    joinExistingChat: PropTypes.func,
    roomId: PropTypes.string,
    lastMessage: PropTypes.string,
    date: PropTypes.number,
    sizeAvatar: PropTypes.string,
    name: PropTypes.string,
    newMessages: PropTypes.number,
    urlAvatar: PropTypes.string,
    currentUser: PropTypes.object
};


export default connect(
    (state) => ({
        currentUser: state.currentUser.currentUser
    }), {
        joinExistingChat
    }
)(ListItem);
