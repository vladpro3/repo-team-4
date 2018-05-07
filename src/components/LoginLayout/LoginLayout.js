import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import "./LoginLayout.css";
import {changeLayout} from "../../reducers/navigation/action";
import {loginButtonHandler} from "../../reducers/authorization/action";

// import api from "../../api";

class LoginLayout extends React.Component {
    state = {
        loading: true
    };

    onLoginClick = () => {
        // const newUser = {
        //     email : "Bondarovich77@gmail.com",
        //     name : "Бондарович Влад",
        //     password : "228",
        //     phone : "(111)272-34-44",
        //     photo : "https://image.ibb.co/nA0sES/photo_2018_05_05_16_35_30.jpg"
        // };
        // const u = api.saveUser(newUser);
        // console.log('----', u);
        // api.getUsers({limit: 20}).then((user) => console.log(user));
        this.props.loginButtonHandler(document.getElementById("login").value);
    };

    render() {
        return (
            <div className='loginPage'>
                <div className='loginContainer'>
                    <div className='inputContainer'>
                        <span>Логин:</span>
                        <input id='login' type='text'/>
                    </div>
                    <div className='buttonContainer'>
                        <div className='button' onClick={() => this.onLoginClick()}>Войти</div>
                    </div>
                </div>
            </div>
        );
    }
}

LoginLayout.propTypes = {
    changeLayout: PropTypes.func,
    loginButtonHandler: PropTypes.func
};

export default connect(
    state => ({
        layout: state.navigation.layout
    }), {
        changeLayout,
        loginButtonHandler
    }
)(LoginLayout);
