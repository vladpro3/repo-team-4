const initialState = {
    currentUser: null,
    user: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case "GET_CURRENT_USER": {
        return {
            ...state,
            currentUser: action.currentUser,
        };
    }
    case "GET_USER": {
        return {
            ...state,
            user: action.user,
        };
    }
    default: {
        return state;
    }
    }
}
