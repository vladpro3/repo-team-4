import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import "../ContactItem/ContactItem";
import ContactsList from "../ContactsList/ContactsList";
import {HeaderTemplate} from "../HeaderTemplate/HeaderTemplate";
import {changeLayout} from "../../reducers/navigation/action";

class Contacts extends Component {
    onFooterClick = () => {
        this.props.changeLayout("chatListLayout");
    };

    render() {
        return (
            <div className="contacts">
                <HeaderTemplate title='Контакты'/>
                <ContactsList/>
                <div className='chat-list__footer' onClick={() => this.onFooterClick()}>Чаты</div>
            </div>
        );
    }
}

Contacts.propTypes = {
    changeLayout: PropTypes.func
};

export default connect(
    () => ({}), {
        changeLayout,
    }
)(Contacts);
