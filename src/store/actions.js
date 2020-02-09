import * as Action from './actionType';

export const setTheme = (payload = 'dark') => ({
    type: Action.SET_THEME,
    payload
})

export const getUser = () => {
    return new Promise(async resolve => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * 10) + 1}`)
            const { username } = await response.json()
    
            resolve({
                type: Action.SET_USER,
                payload: username
            })
        } catch (error) {
            resolve({
                type: Action.SET_ERROR,
                payload: 'Oops!'
            })
        }
    })
}