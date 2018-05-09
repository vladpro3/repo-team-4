import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import "./LoginLayout.css";
import {changeLayout} from "../../reducers/navigation/action";
import {loginButtonHandler, registrationButtonHandler} from "../../reducers/authorization/action";

class LoginLayout extends React.Component {
    state = {
        loading: true
    };

    onLoginClick = () => {
        this.props.loginButtonHandler(document.getElementById("login").value);
    };

    onRegistrationClick = () => {
        this.props.registrationButtonHandler();
    };

    render() {
        return (
            <div className='login-page'>
                <div className='login-container'>
                    <h2>Авторизация</h2>
                    <div className='login-container__input-container'>
                        <span>Введите Ваш никнейм:</span>
                        <input tabIndex="1" id='login' type='text' autoFocus/>
                    </div>
                    <div className='login-container__button-container'>
                        <div tabIndex="1" className='login-container__button-container__login'
                            onClick={() => this.onLoginClick()}>Войти</div>
                        <span tabIndex="1" className='login-container__button-container__registration'
                            onClick={() => this.onRegistrationClick()}>Нажмите сюда для регистрации</span>
                    </div>
                </div>
            </div>
        );
    }
}

LoginLayout.propTypes = {
    changeLayout: PropTypes.func,
    loginButtonHandler: PropTypes.func,
    registrationButtonHandler: PropTypes.func
};

export default connect(
    state => ({
        layout: state.navigation.layout
    }), {
        changeLayout,
        loginButtonHandler,
        registrationButtonHandler
    }
)(LoginLayout);
