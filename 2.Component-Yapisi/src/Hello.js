import React from 'react'

function Hello() {
    // jsx ve js uzantı farkı. Eğer js ile yazarsan bu şekilde yazman gerekiyor
    return (
        React.createElement('div', null, "hello world")
    )
}

export default Hello