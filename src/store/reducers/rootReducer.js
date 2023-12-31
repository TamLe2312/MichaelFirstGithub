const initState = {
    users: [
        { id: 1, name: "TamLe" },
        { id: 2, name: "Michael" },
        { id: 3, name: "Hehe" },
        { id: 4, name: "Ok" },
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log("Run into delete user ", action)

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)

            return { ...state, users };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000);
            let user = { id: id, name: `random - ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
            break;
        default:
            return state;
    }
}

export default rootReducer;