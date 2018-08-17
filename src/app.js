import React from 'react'
import { getMaxListeners } from 'cluster';

const App = ({ giist }) => (
    <ul>
        {gists.map(gist => {
            <li key={gist.id}>{gist.description}</li>
        })}
    </ul>
)

App.propTypes = {
    gists: React.PropTypes.array,
}
export default App