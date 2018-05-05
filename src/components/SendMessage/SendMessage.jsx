import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./SendMessage.css";
import {MessageInput} from "../MessageInput/MessageInput";
import {sendMessage} from "../../reducers/chat/action";

class SendMessage extends Component {
    clickTextHundler = () => {
        const valueText = document.querySelector(".sendmessage__textarea").value;
        document.querySelector(".sendmessage__textarea").value = "";
        this.props.sendMessage(this.props.roomId, valueText);
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter")
            this.clickTextHundler();
    };

    render() {
        return (
            <div className="sendmessage" onKeyPress={(e) => this.handleKeyPress(e)}>
                <MessageInput/>
                <div className="sendmessage__send-button">
                    <button className="send-button__button" onClick={() => this.clickTextHundler()}>
                        <i className="fa fa-paper-plane" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        );
    }
}

SendMessage.propTypes = {
    sendMessage: PropTypes.func,
    roomId: PropTypes.string
};

export default connect(
    state => ({
        roomId: state.chat.currentChatId,
        messages: state.chat.messages
    }), {
        sendMessage
    }
)(SendMessage);
