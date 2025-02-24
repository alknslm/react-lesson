import React from 'react'

function Container({ children }) {
    // container'a props olarak Product componentini gönderdik
    // Product componentini container'ın childı olarak çağırdık
    return (
        <div>
            <div>
                Container componenti
            </div>

            <div>
                {children}
            </div>
        </div>
    )
}

export default Container