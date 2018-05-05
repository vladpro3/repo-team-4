import api from "../../api";

export function authorization() {
    return (dispatch) => {
        api.checkAuth().then((user) => {
            console.log(user);
            if (user !== null) {
                dispatch({
                    type: "CHANGE_LAYOUT",
                    layout: "chatListLayout"
                });
            }
        });
    };
}

export function loginButtonHandler(name) {
    return (dispatch) => {
        api.getUserByName(name).then((user) => {
            console.log(user);
            if (user !== null) {
                dispatch({
                    type: "CHANGE_LAYOUT",
                    layout: "chatListLayout"
                });
            } else {
                console.log("Пользователя нет в принципе");
            }
        });
    };
}
