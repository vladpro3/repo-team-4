import React, {Component} from "react";
import PropTypes from "prop-types";

import "./MessageAttachementList.css";

class MessageAttachementsList extends Component {
    state = {
        isOpen: this.props.isOpen
    };

    render() {
        if (this.props.isOpen !== this.state.isOpen) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
        return (
            <ul className={this.state.isOpen
                ? "message-attachements message-attachement_opened" : "message-attachements message-attachement_close"}>
                <li className="message-attachements__li"><i className="fa fa-images"/> Photo</li>
                <li className="message-attachements__li"><i className="fa fa-video"/> Video</li>
                <li className="message-attachements__li"><i className="fa fa-file"/> Document</li>
            </ul>
        );
    }
}

MessageAttachementsList.propTypes = {
    isOpen: PropTypes.bool
};

export default MessageAttachementsList;
