import React from 'react'
import IdleTimer from 'react-idle-timer'

function idleTimer() {
    const idleTimerRef = useRef(null);
    const onIdle = ()=>{console.log("it is idle");
    }
    return (
        <div>
            <IdleTimer ref={idleTimerRef} timeout={5*1000} > </IdleTimer>
        </div>
    )
}

export default idleTimer
