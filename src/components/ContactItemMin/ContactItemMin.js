import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./ContactItemMin.css";
import Avatar from "../Avatar/Avatar";
import {joinChat, pickUser} from "../../reducers/chat/action";

class contactItemMin extends PureComponent {
    clickHandler = () => {
        this.props.pickUser(this.props.pickedUsers, this.props.userId);
        let nodeClass = this.node.className;

        if (!nodeClass.includes("selected"))
            this.node.className = nodeClass.concat(" selected");
        else
            this.node.className = "contact-item-min";
    };

    render() {
        return (
            <div className="contact-item-min" onClick={() => this.clickHandler()} ref={(node) => {
                this.node = node;
            }}>
                <div className="contact-item-min__left-info">
                    <Avatar size={this.props.sizeAvatar} url={this.props.urlAvatar}/>
                    <div className="contact-item-min__left-info__user-info">
                        <span className="contact-item-min__left-info__user-info__name">
                            {this.props.name}
                        </span>
                    </div>
                </div>
            </div>

        );
    }
}

contactItemMin.propTypes = {
    joinChat: PropTypes.func,
    userId: PropTypes.string,
    sizeAvatar: PropTypes.string,
    urlAvatar: PropTypes.string,
    name: PropTypes.string,
    lastMessage: PropTypes.string,
    pickUser: PropTypes.func,
    pickedUsers: PropTypes.array
};
export default connect(
    state => ({
        pickedUsers: state.chat.pickedUsers
    }), {
        joinChat,
        pickUser
    }
)(contactItemMin);
