import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {Avatar} from "../Avatar/Avatar";
import "../ContactItemMin/ContactItemMin.css";

class ChatContactItem extends PureComponent {
    render() {
        return (
            <div className="contact-item-min">
                <div className="contact-item-min__left-info">
                    <Avatar size={this.props.sizeAvatar} url={this.props.urlAvatar}/>
                    <div className="contact-item-min__left-info__user-info">
                        <span className="contact-item-min__left-info__user-info__name">
                            {this.props.name}
                        </span>
                        <span className="contact-item-min__left-info__user-info__last-message">
                            {this.props.lastMessage}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

ChatContactItem.propTypes = {
    sizeAvatar: PropTypes.string,
    urlAvatar: PropTypes.string,
    name: PropTypes.string,
    lastMessage: PropTypes.string
};
export default connect()(ChatContactItem);
