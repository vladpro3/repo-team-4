import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import "./MessagesLayout.css";
import Header from "../Header/Header";
import SendMessage from "../SendMessage/SendMessage";
import Message from "../Message/Message";
import {getNextMessages, getRoomMessages, getUsersAvatars, joinChat} from "../../reducers/chat/action";

import api from "../../api";
import {Spinner} from "../Loaders/Spinner/Spinner";
import {InlineLoader} from "../Loaders/InlineLoader/InlineLoader";

class MessagesLayout extends Component {
    state = {
        messages: [],
        currentUserId: "",
        incomingMessageAvatar: "https://dcnt5qvi2hv76.cloudfront.net/b833369/resize_cache/74316/2e7fb5fb2ab1ebdd663145ea3b6c2c2e/main/e51/e51a3c0243a0c3463d729bea7c5b18b7/photo.jpg?h=ncaby.bitrix24.by",
        myAvatar: "https://vignette.wikia.nocookie.net/borderlands/images/1/13/Awesome.png/revision/latest?cb=20091026223409"
    };

    componentDidMount() {
        this.props.getUsersAvatars(this.props.roomId);
        this.props.getRoomMessages(this.props.roomId);

        api.getCurrentUser()
            .then((user) => {
                const currentUser = user._id;
                this.setState({currentUserId: currentUser});
            });
        api.getRoom(this.props.roomId)
            .then((room) => {
                this.setState({room: room});
            });
    }

    componentDidUpdate() {
        if (!this.props.inlineLoading) {
            if (this.props.scrollPosition === -1) document.getElementById("messages-layout__messages")
                .scrollTo(0, document.getElementById("messages-layout__messages").scrollHeight);
            else document.getElementById("messages-layout__messages").scrollTo(0, this.props.scrollPosition);
        }
    }

    onScrollHandler = () => {
        let scrolled = window.pageYOffset || document.getElementById("messages-layout__messages").scrollTop;
        if (scrolled === 0 && this.props.messagesNext)
            this.props.getNextMessages();
    };

    render() {
        let messages = this.props.messages;
        let currentUserId = this.state.currentUserId;
        let roomData = this.state.room;
        let isLoading = this.props.loading;

        return (
            <div className='messages-layout'>
                <div className='messages-layout__header'>
                    <Header chatName={roomData && roomData.name}/>
                </div>
                {this.props.inlineLoading && <InlineLoader/>}
                <div className='messages-layout__messages' id='messages-layout__messages' onScroll={() => this.onScrollHandler()}>
                    {isLoading && <Spinner/>}
                    {!isLoading && messages && messages.map(function (message) {
                        return <Message
                            key={message._id}
                            message={message}
                            isMyMessage={message.userId === currentUserId}
                            userId={message.userId}
                        />;
                    })}
                </div>
                <div className='messages-layout__send-message'>
                </div>
                <SendMessage roomId={this.props.roomId}/>
            </div>
        );
    }
}

MessagesLayout.propTypes = {
    getRoomMessages: PropTypes.func,
    getNextMessages: PropTypes.func,
    getUsersAvatars: PropTypes.func,
    roomId: PropTypes.string,
    messages: PropTypes.array,
    messagesNext: PropTypes.object,
    scrollPosition: PropTypes.number,
    loading: PropTypes.bool,
    inlineLoading: PropTypes.bool
};

export default connect(
    state => ({
        roomId: state.chat.currentChatId,
        messages: state.chat.messages,
        messagesNext: state.chat.messagesNext,
        scrollPosition: state.chat.scrollPosition,
        loading: state.chat.loading,
        inlineLoading: state.chat.inlineLoading
    }), {
        joinChat,
        getRoomMessages,
        getNextMessages,
        getUsersAvatars
    }
)(MessagesLayout);
