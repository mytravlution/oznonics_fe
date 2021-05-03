import React from 'react'
import IdleTimer from 'react-idle-timer'
import { useRef } from 'react';

function IdleTimerContainer() {
      
    const idleTimerRef = useRef(null);
    const onIdle = ()=>{console.log("it is idle");
    }
    return (
        <div>
            <IdleTimer ref={idleTimerRef} timeout={15*1000} onIdle={onIdle}> </IdleTimer>
        </div>
    )
}

export default IdleTimerContainer
