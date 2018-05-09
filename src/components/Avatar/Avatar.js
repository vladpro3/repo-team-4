import React, {Component} from "react";
import PropTypes from "prop-types";

import avatar_img from "./default-avatar.png";
import "./Avatar.css";
import {connect} from "react-redux";
import {openUserProfile} from "../../reducers/currentUser/action";


export class Avatar extends Component {
    constructor(props) {
        super(props);

        if (this.props.size === "small")
            this.classAvatarSize = "avatar__img__small";
        else if (this.props.size === "medium")
            this.classAvatarSize = "avatar__img__medium";
        else
            this.classAvatarSize = "avatar__img__large";

        if (this.props.url)
            this.image = this.props.url;
        else this.image = avatar_img;
    }

    onAvatarClickHandler = () => {
        if (this.props.userId)
            this.props.openUserProfile(this.props.userId);
    };

    render() {
        return (
            <div className={this.classAvatarSize} onClick={() => this.onAvatarClickHandler()}>
                <img src={this.image} className='avatar__img' alt="avatar"/>
            </div>
        );
    }
}

Avatar.propTypes = {
    userId: PropTypes.string,
    size: PropTypes.string,
    url: PropTypes.string,
    openUserProfile: PropTypes.func
};

export default connect(
    state => ({ }), {
        openUserProfile
    })(Avatar);
