import React from "react";
import PropTypes from "prop-types";

import ChatName from "./ChatName/ChatName";

export class ChatTitle extends React.Component {
    state = {
        isGroup: false,
        online: true
    };

    render() {
        return(
            <div>
                <ChatName online={this.state.isGroup ? false : this.state.online} name={this.props.chatName}/>
            </div>
        );
    }
}

ChatTitle.propTypes = {
    chatName: PropTypes.string
};
