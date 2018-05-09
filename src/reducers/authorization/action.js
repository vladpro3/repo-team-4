import api from "../../api";

export function authorization() {
    return (dispatch) => {
        api.checkAuth().then((user) => {
            if (user !== null) {
                dispatch({
                    type: "CHANGE_LAYOUT",
                    layout: "chatListLayout"
                });
            }
            dispatch({
                type: "AUTH_CHECKED"
            });
        });
    };
}

export function registerNewUser(user) {
    return () => {
        api.addUser(user).then((user) => {
            if (user !== null) document.location.reload();
            else console.log("Ошибка сохранения пользователя");
        });
    };
}

export function loginButtonHandler(name) {
    return () => {
        api.getUserByName(name).then((user) => {
            if (user !== null) document.location.reload();
            else console.log("Пользователя нет в принципе");
        });
    };
}

export function registrationButtonHandler() {
    return (dispatch) => {
        dispatch({
            type: "CHANGE_LAYOUT",
            layout: "registration"
        });
    };
}
