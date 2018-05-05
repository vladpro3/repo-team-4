import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import {Avatar} from "../Avatar/Avatar";
import {changeLayout} from "../../reducers/navigation/action";
import {getCurrentUserInfo} from "../../reducers/currentUser/action";

class Profile extends Component {
    componentWillMount() {
        this.props.getCurrentUserInfo();
    }

    render() {
        return (
            <div className='Profile__wrapper'>
                <div className='wrapper-background'>
                    <ProfileHeader/>
                    <div className='Profile__main'>
                        <div className='Profile__avatar'>
                            <Avatar/>
                        </div>
                        <div className='Profile__info-container'>
                            <h2>{this.props.currentUser && this.props.currentUser.name}</h2>
                            <span>{this.props.currentUser && this.props.currentUser.email}</span>
                            <span>{this.props.currentUser && this.props.currentUser.phone}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    name: PropTypes.string,
    getCurrentUserInfo: PropTypes.func,
    currentUser: PropTypes.object
};

export default connect(
    state => ({
        currentUser: state.currentUser.currentUser
    }), {
        changeLayout,
        getCurrentUserInfo
    }
)(Profile);
