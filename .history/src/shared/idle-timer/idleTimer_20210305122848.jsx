import React from 'react'
import IdleTimer from 'react-idle-timer'

function idleTimer() {
    const idleTimerRef = useRef(null);
    const onIdle = ()=>{console.log("it is idle");
    }
    return (
        <div>
            <IdleTimer ref={idleTimerRef}> </IdleTimer>
        </div>
    )
}

export default idleTimer
