const initialState = {
    user: [],
    isAuth: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case "CHECK_AUTH_NAME": {
        if (action.user !== null) {
            //register user with name and sid
            return {state};
        }
        break;
    }

    case "AUTH_CHECKED": {
        return {
            ...state,
            isAuth: true
        };
    }

    default: {
        return state;
    }
    }
}
