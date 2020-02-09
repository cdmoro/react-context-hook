import React, { useContext } from 'react'
import { Context, setTheme } from '../store'
// import { pre } from '../utils'
import Pre from './Pre'
import { useClasses } from '../hooks/useClasses'

function ComponentA() {
    const { store, dispatch } = useContext(Context)
    const theme = (store.theme === 'dark') ? 'light' : 'dark'
    const btnClasses = useClasses([
        'btn',
        {
            'btn-light': store.theme === 'dark',
            'btn-primary': store.theme === 'light'
        }
    ])

    const changeTheme = () => {
        dispatch(
            setTheme(theme)
        )
    }

    return (
        <div>
            <Pre>{ store }</Pre>
            <button className={btnClasses} onClick={changeTheme}>Cambiar theme</button>
        </div>
    )
}

export default ComponentA