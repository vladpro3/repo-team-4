import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import "./RegistrationLayout.css";
import {changeLayout} from "../../reducers/navigation/action";
import {registerNewUser} from "../../reducers/authorization/action";

class RegistrationLayout extends React.Component {
    state = {
        loading: true,
        hasErrors: false,
        errorMsg: ""
    };

    onRegistrationClick = () => {
        const newUser = {
            name : document.getElementById("registration_name").value,
            email : document.getElementById("registration_email").value,
            phone : document.getElementById("registration_tel").value,
            photo : document.getElementById("registration_url").value,
            password : "228"
        };
        if (newUser.name.length < 2)
            this.setState({
                hasErrors: true,
                errorMsg: "Короткий никнейм"
            });
        else if (newUser.email.length < 6 || !~newUser.email.indexOf("@"))
            this.setState({
                hasErrors: true,
                errorMsg: "Неверный email"
            });
        else if (newUser.phone.length < 7)
            this.setState({
                hasErrors: true,
                errorMsg: "Неверный номер"
            });
        else {
            this.setState({
                hasErrors: false,
                errorMsg: ""
            });
            this.props.registerNewUser(newUser);
        }
    };

    render() {
        return (
            <div className='registration-page'>
                <div className='registration-container'>
                    <h2>Регистрация</h2>
                    {this.state.hasErrors && <div className='registration-container_error'>{this.state.errorMsg}</div>}
                    <div className='registration-container__input-container'>
                        <div><span>Никнейм</span><span className='span_required'>*</span></div>
                        <input tabIndex="1" id='registration_name' type='text' required autoFocus/>
                        <div><span>Почта</span><span className='span_required'>*</span></div>
                        <input tabIndex="1" id='registration_email' type='email' required/>
                        <div><span>Номер телефона</span><span className='span_required'>*</span></div>
                        <input tabIndex="1" id='registration_tel' type='tel' required/>
                        <div><span>Ссылка на аватар</span></div>
                        <input tabIndex="1" id='registration_url' type='url'/>
                    </div>
                    <div className='registration-container__button-container'>
                        <div tabIndex="1" onClick={() => this.onRegistrationClick()}>Зарегистрировать</div>
                    </div>
                </div>
            </div>
        );
    }
}

RegistrationLayout.propTypes = {
    changeLayout: PropTypes.func,
    registerNewUser: PropTypes.func
};

export default connect(
    state => ({
        layout: state.navigation.layout
    }), {
        changeLayout,
        registerNewUser
    }
)(RegistrationLayout);
