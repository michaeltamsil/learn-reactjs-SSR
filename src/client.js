import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
const html = template(body, gists)

ReactDOM.render(
    <App gists={window.gists} />,
    document.getElementById('app')
)
