import api from "../../api";

export function getCurrentUserInfo() {
    return (dispatch) => {
        api.getCurrentUser()
            .then((user) => {
                dispatch({
                    type: "GET_CURRENT_USER",
                    currentUser: user
                });
            });
    };
}

export function openUserProfile(userId) {
    return (dispatch) => {
        api.getUser(userId)
            .then((user) => {
                dispatch({
                    type: "GET_USER",
                    user: user
                });
                dispatch({
                    type: "CHANGE_LAYOUT",
                    layout: "profile"
                });
            });

    };
}
