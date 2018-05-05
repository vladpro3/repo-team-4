const initialState = {
    currentChatId: null,
    chatList: [],
    rooms: [],
    loading: true,
    inlineLoading: false,
    users: [],
    roomUsers: [],
    usersAvatars: [],
    messages: [],
    newMessage: null,
    pickedUsers: [],
    messagesNext: null,
    scrollPosition: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case "JOIN_CHAT": {
        return {
            ...state,
            currentChatId: action.id
        };
    }
    case "GET_ROOMS_SUCCESS": {
        return {
            ...state,
            rooms: action.rooms,
            loading: false,
        };
    }
    case "GET_ROOMS": {
        return {
            ...state,
            loading: true,
        };
    }
    case "GET_ROOMS_FAIL": {
        console.log("Ошибка загрузки чатов");
        return {
            ...state
        };
    }

    case "GET_USERS_AVATARS": {
        return {
            ...state,
            usersAvatars: []
        };
    }

    case "GET_USERS_AVATARS_SUCCESS": {
        return {
            ...state,
            usersAvatars: state.usersAvatars.concat(action.usersAvatars)
        };
    }

    case "GET_USERS_AVATARS_FAIL": {
        return {
            ...state
        };
    }

    case "GET_ROOM_USERS": {
        return {
            ...state,
            roomUsers: [],
            loading: true,
        };
    }

    case "GET_ROOM_USERS_SUCCESS": {
        return {
            ...state,
            roomUsers: state.roomUsers.concat(action.roomUsers),
            loading: false,
        };
    }

    case "GET_ROOM_USERS_FAIL": {
        console.log("Ошибка получения пользователей чата");
        return {
            ...state,
            loading: false,
        };
    }

    case "GET_CONTACTS_SUCCESS": {
        return {
            ...state,
            users: action.users,
            loading: false,
        };
    }
    case "GET_CONTACTS": {
        return {
            ...state,
            loading: true,
        };
    }
    case "GET_CONTACTS_FAIL": {
        console.log("Ошибка загрузки контактов");
        return {
            ...state,
            loading: false,
        };
    }
    case "GET_MESSAGES_SUCCESS": {
        return {
            ...state,
            messages: action.messages,
            messagesNext: action.next,
            scrollPosition: -1,
            loading: false
        };
    }
    case "GET_MESSAGES": {
        return {
            ...state,
            loading: true
        };
    }
    case "GET_MESSAGES_FAIL": {
        console.log("Ошибка загрузки сообщений");
        return {
            ...state,
            loading: false
        };
    }

    case "GET_NEXT_MESSAGES": {
        return {
            ...state,
            inlineLoading: true
        };
    }
    case "GET_NEXT_MESSAGES_SUCCESS": {
        const mockArr = [];
        return {
            ...state,
            messages: mockArr.concat(action.messages.reverse(), state.messages),
            messagesNext: action.next,
            scrollPosition: action.scrollPosition,
            inlineLoading: false
        };
    }
    case "GET_NEXT_MESSAGES_FAIL": {
        console.log("Ошибка загрузки прошлых сообщений");
        return {
            ...state,
            inlineLoading: false
        };
    }

    case "SET_NEW_SCROLL_POSITION": {
        return {
            ...state,
            scrollPosition: action.scrollPosition
        };
    }

    case "ON_NEW_MESSAGE": {
        return {
            ...state,
            messages: state.messages.concat(action.newMessage),
            scrollPosition: -1
        };
    }
    case "PICK_USER": {
        return {
            ...state,
            pickedUsers: action.users
        };
    }



    default: {
        return state;
    }
    }
}
