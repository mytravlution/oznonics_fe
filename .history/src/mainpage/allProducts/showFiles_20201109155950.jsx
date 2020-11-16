import React, { useState } from 'react'
import { get, post, baseUrl, refreshCookies } from "../../shared/http-service";
import axios from 'axios';

export default function ShowFiles() {
   c
    
    return (
        <div>
            <button onClick={fileUploader}>Click</button>
            <div>
                {buttonClicked && <h4>{dataValue.map((link)=>(
                   <div>{link}</div>)
                )}</h4>}
            </div>
        </div>
    )
}
