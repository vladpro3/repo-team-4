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

export function loginButtonHandler(name) {
    return () => {
        api.getUserByName(name).then((user) => {
            if (user !== null) {
                document.location.reload();
            } else {
                console.log("Пользователя нет в принципе");
            }
        });
    };
}
