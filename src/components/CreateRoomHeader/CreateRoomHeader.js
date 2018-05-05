import React from "react";
import "./CreateRoomHeader.css";
import PropTypes from "prop-types";
import "../ChatTitle/ChatName/ChatName";
import {connect} from "react-redux";
import {changeLayout} from "../../reducers/navigation/action";

class CreateRoomHeader extends React.Component {
    clickLeftButtonHandler = () => {
        this.props.changeLayout("chatListLayout");
    };

    onCreateClick = () => {
        this.props.createRoom(this.input.value, this.props.pickedUsers);
    };

    render() {
        return (
            <div className="CreateRoomHeader">
                <div className="button button-1" onClick={() => this.clickLeftButtonHandler()}>
                    <i className='fa fa-arrow-left'/>
                </div>
                <h2>Создать чат</h2>
                <div className="button button-2" onClick={() => this.onCreateClick()}>
                    <i className='fa fa-plus'/>
                </div>
            </div>
        );
    }
}

CreateRoomHeader.propTypes = {
    changeLayout: PropTypes.func,
    pickedUsers: PropTypes.array,
    createRoom: PropTypes.func
};

export default connect(
    () => ({}), {
        changeLayout
    }
)(CreateRoomHeader);
