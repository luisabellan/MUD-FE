import React from 'react';

import * as Widget from '../StyledWidgets'

const Movement = () => {

    return (
        <Widget.MovementContainer>
            <button>N</button>
            <button>S</button>
            <button>E</button>
            <button>W</button>
        </Widget.MovementContainer>
    )
}

export default Movement;