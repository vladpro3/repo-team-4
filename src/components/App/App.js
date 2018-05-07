import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import "./App.css";
import Contacts from "../Contacts/Contacts";
import {changeLayout} from "../../reducers/navigation/action";
import LoginLayout from "../LoginLayout/LoginLayout";
import ChatListLayout from "../ChatListLayout/ChatListLayout";
import MessagesLayout from "../MessagesLayout/MessagesLayout";
import Profile from "../Profile/Profile";
import CreateRoomLayout from "../CreateRoomLayout/CreateRoomLayout";
import ChatSettingsLayout from "../ChatSettingsLayout/ChatSettingsLayout";
import {authorization} from "../../reducers/authorization/action";

class App extends Component {
    componentWillMount() {
        this.props.authorization();
    }

    render() {
        let layout;

        switch (this.props.layout) {
        case "authorization":
            layout = <LoginLayout/>;
            break;
        case "chatListLayout":
            layout = <ChatListLayout/>;
            break;
        case "messagesLayout":
            layout = <MessagesLayout/>;
            break;
        case "contacts":
            layout = <Contacts/>;
            break;
        case "profile":
            layout = <Profile/>;
            break;
        case "createRoom":
            layout = <CreateRoomLayout/>;
            break;
        case "chatSettings":
            layout = <ChatSettingsLayout/>;
            break;
        default:
            layout = <LoginLayout/>;
            break;
        }

        return (
            <div className="App">
                {this.props.isAuth && layout}
            </div>
        );
    }
}

App.propTypes = {
    authorization: PropTypes.func,
    layout: PropTypes.string,
    isAuth: PropTypes.bool
};

export default connect(
    state => ({
        layout: state.navigation.layout,
        isAuth: state.authorization.isAuth
    }), {
        authorization,
        changeLayout
    }
)(App);
