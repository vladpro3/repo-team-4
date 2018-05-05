import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {changeLayout} from "../../reducers/navigation/action";
import {getRoomUsers, getContacts, addUsers, leaveRoom} from "../../reducers/chat/action";
import ChatSettingsHeader from "../ChatSettingsHeader/ChatSettingsHeader";
import ChatContactItem from "../ChatContactItem/ChatContactItem";
import ContactItemMin from "../ContactItemMin/ContactItemMin";

class ChatSettingsLayout extends React.Component {
    state = {
        addList: false,
        roomUsersId: []
    };

    componentDidMount() {
        this.props.getRoomUsers(this.props.roomId);
        this.props.getContacts(this.props.roomUsers);
    }

    addSelectedUsers = () => {
        this.props.addUsers(this.props.pickedUsers, this.props.roomId);
        this.props.getRoomUsers(this.props.roomId);
        this.setState({addList: false});
    };

    showAddList = () => {
        let arr = [];
        this.props.roomUsers.forEach((elem) => {
            arr.push(elem._id);
        });

        this.setState({
            addList: true,
            roomUsersId: arr
        });
    };

    leaveChat = () => {
        this.props.leaveRoom(this.props.roomId);
        this.props.changeLayout("chatListLayout");
    };

    render() {
        const usersInRoom = this.props.roomUsers;
        const users = this.props.users;
        const roomUsersId = this.state.roomUsersId;

        return (
            <div>
                <ChatSettingsHeader/>
                {!this.state.addList && <div>
                    <div className='container'>
                        <span>Участники чата:</span>
                        <div className='contactList'>
                            {usersInRoom && usersInRoom.map((user) => (
                                <ChatContactItem
                                    sizeAvatar={"small"}
                                    key={user._id}
                                    name={user.name}
                                    userId={user._id}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='buttonContainer'>
                        <div className='button' onClick={() => this.showAddList()}>Добавить участников</div>
                        <div className='button' onClick={() => this.leaveChat()}>Покинуть чат</div>
                    </div>
                </div>}
                {this.state.addList && <div>
                    <div className='container'>
                        <span>Выделите людей, которых хотите пригласить:</span>
                        <div className='contactList'>
                            {users && users.map((user) => {
                                if (roomUsersId.indexOf(user._id) === -1)
                                    return <ContactItemMin
                                        sizeAvatar={"small"}
                                        key={user._id}
                                        name={user.name}
                                        userId={user._id}
                                    />;
                                return null;
                            })}
                        </div>
                    </div>
                    <div className='buttonContainer'>
                        <div className='button' onClick={() => this.addSelectedUsers()}>Добавить</div>
                        <div className='button' onClick={() => this.setState({addList: false})}>Отмена</div>
                    </div>
                </div>}
            </div>

        );
    }
}

ChatSettingsLayout.propTypes = {
    changeLayout: PropTypes.func,
    getRoomUsers: PropTypes.func,
    getContacts: PropTypes.func,
    addUsers: PropTypes.func,
    pickedUsers: PropTypes.array,
    users: PropTypes.array,
    roomId: PropTypes.string,
    roomUsers: PropTypes.array,
    leaveRoom: PropTypes.func
};

export default connect(
    state => ({
        roomId: state.chat.currentChatId,
        roomUsers: state.chat.roomUsers,
        users: state.chat.users,
        pickedUsers: state.chat.pickedUsers
    }), {
        changeLayout,
        getRoomUsers,
        getContacts,
        addUsers,
        leaveRoom
    }
)(ChatSettingsLayout);
