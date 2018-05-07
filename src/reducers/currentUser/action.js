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
