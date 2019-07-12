import React from 'react'
import './CircleSelector.css'

function CircleSelector(props) {
    return(
        <div className='CircleSelector'>
            <button onClick={props.handleClick}>Circle 1 Selected</button>
            <button>Circle 2 Selected</button>
            <button>Circle 3 Selected</button>
            <button>Circle 4 Selected</button>
        </div>
    )
}

export default CircleSelector