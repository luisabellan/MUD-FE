//link to setup
//https://medium.com/swlh/creating-a-progress-bar-in-react-181501bc22f1

import React, {useState, useContext} from 'react'
import * as Widgets from '../../StyledWidgets'







export default function ProgressBar( props ) {

    return (
        <Widgets.Tracker>
            <Widgets.ProgressInTracker width={`${props.playerInfo}%`} color={props.color}>
                <p style={{color: 'white'}}>{`${props.playerInfo}/100`}</p>
            </Widgets.ProgressInTracker>
        </Widgets.Tracker>
    )
}