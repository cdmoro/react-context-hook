export const reducer = (state, {type, payload}) => {
    switch(type) {
        case 'SET_USER':
            return {
                ...state,
                user: payload
            }

        case 'SET_THEME':
            return {
                ...state,
                theme: payload
            }

        default:
            return state
    }
}