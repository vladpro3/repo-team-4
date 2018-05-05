import React, {Component} from "react";
import MessageAttachementList from "../MessageAttachementsList/MessageAttachementList";

export class MessageAttachement extends Component {
    state = {
        attachementIsOpen: false
    };

    toggleAttachement = () => {
        this.setState({
            attachementIsOpen: !this.state.attachementIsOpen
        });
    };

    render() {
        return (
            <div className="sendmessage__attachement">
                <div className="attachement__icon" onClick={() => this.toggleAttachement()}>
                    <i className="fa fa-paperclip"/>
                </div>
                <MessageAttachementList isOpen={this.state.attachementIsOpen}/>
            </div>
        );
    }
}
