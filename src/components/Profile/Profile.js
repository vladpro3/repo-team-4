import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import Avatar from "../Avatar/Avatar";
import {changeLayout} from "../../reducers/navigation/action";
import {getCurrentUserInfo} from "../../reducers/currentUser/action";

class Profile extends Component {
    render() {
        return (
            <div className='Profile__wrapper'>
                <div className='wrapper-background'>
                    <ProfileHeader/>
                    <div className='Profile__main'>
                        <div className='Profile__avatar'>
                            <Avatar url={this.props.user && this.props.user.photo}/>
                        </div>
                        <div className='Profile__info-container'>
                            <h2>{this.props.user && this.props.user.name}</h2>
                            <span>{this.props.user && this.props.user.email}</span>
                            <span>{this.props.user && this.props.user.phone}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    getCurrentUserInfo: PropTypes.func,
    getUserInfo: PropTypes.func,
    user: PropTypes.object
};

export default connect(
    state => ({
        user: state.currentUser.user
    }), {
        changeLayout,
        getCurrentUserInfo
    }
)(Profile);
