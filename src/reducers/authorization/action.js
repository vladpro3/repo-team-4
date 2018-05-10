import api from "../../api";

export function authorization() {
    return (dispatch) => {
        api.checkAuth().then((user) => {
            if (user !== null) {
                api.getCurrentUserRooms({limit: 0})
                    .then((rooms) => {
                        rooms.items.map((room) => {
                            return api.currentUserJoinRoom(room._id)
                                .then(() => {
                                    api.onMessage((mess) => {
                                        dispatch({
                                            type: "ON_NEW_MESSAGE",
                                            newMessage: [mess],
                                            fromRoomId: room._id
                                        });
                                    });
                                });
                        });
                    });
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
