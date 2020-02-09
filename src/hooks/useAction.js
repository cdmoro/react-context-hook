import { useState } from "react"

const useAction = (dispatch, action) => {
    const [loading, setloading] = useState(false)

    async function fetchAction() {
        setloading(true)
        dispatch(await action())
        setloading(false)
    }

    const reFetch = () => {
        fetchAction()
    }

    return [
        loading,
        reFetch
    ]
}

export {
    useAction
}