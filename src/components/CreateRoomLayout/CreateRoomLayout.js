import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./CreateRoomLayout.css";
import {changeLayout} from "../../reducers/navigation/action";
import {createRoom, getContacts} from "../../reducers/chat/action";
import CreateRoomHeader from "../CreateRoomHeader/CreateRoomHeader";
import ContactItemMin from "../ContactItemMin/ContactItemMin";

class CreateRoomLayout extends React.Component {
    componentDidMount() {
        this.props.getContacts();
    }

    onCreateClick = () => {
        this.props.createRoom(this.input.value, this.props.pickedUsers);
    };

    render() {
        let users = this.props.users;

        return (
            <div>
                <CreateRoomHeader/>
                <div className='container'>
                    <span>Название чата:</span>
                    <input type='text' ref={(input) => {
                        this.input = input;
                    }}/>
                </div>
                <div className='container'>
                    <span>Пригласить:</span>
                    <div className='contactList'>
                        {users && users.map(function (user) {
                            return <ContactItemMin
                                sizeAvatar={"small"}
                                key={user._id}
                                name={user.name}
                                userId={user._id}
                            />;
                        })}
                    </div>
                </div>
                <div className='buttonContainer'>
                    <div className='button' onClick={() => this.onCreateClick()}>Создать</div>
                </div>
            </div>
        );
    }
}

CreateRoomLayout.propTypes = {
    changeLayout: PropTypes.func,
    getContacts: PropTypes.func,
    createRoom: PropTypes.func,
    pickedUsers: PropTypes.array,
    users: PropTypes.array
};

export default connect(
    state => ({
        users: state.chat.users,
        pickedUsers: state.chat.pickedUsers
    }), {
        changeLayout,
        getContacts,
        createRoom
    }
)(CreateRoomLayout);
