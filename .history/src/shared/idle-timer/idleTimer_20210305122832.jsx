import React from 'react'
import IdleTimer from 'react-idle-timer'

function idleTimer() {
    const IdleTimerRef = useRef(null);
    const onIdle = ()=>{console.log("it is idle");
    }
    return (
        <div>
            <IdleTimer> </IdleTimer>
        </div>
    )
}

export default idleTimer
