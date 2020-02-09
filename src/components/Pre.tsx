import React from 'react'

function Pre({ children }: any): JSX.Element {
    return (
        <pre>
            {JSON.stringify(children, null, 2)}
        </pre>
    )
}

export default Pre
