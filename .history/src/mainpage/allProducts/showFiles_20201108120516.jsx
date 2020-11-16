import React from 'react'
import { get, post, baseUrl, refreshCookies } from "../../shared/http-service";
import axios from 'axios';

export default function ShowFiles() {
var parameter = "HR200/Mechnical/Product Drawing/2D Drawing/Main Unit";
    const fileUploader = (event)=>{

        axios.post("http://127.0.0.1:8080/ozonics/sendAllFiles/", null, {
        params:{
            id:"HR200/Mechnical/Product Drawing/2D Drawing/Main Unit"
        }
        }).then(res=>{
            console.log("full reponse:"+res.);
            console.log(res.statusText);
        })
    }
    
    return (
        <div>
            <button onClick={fileUploader}>Click</button>
        </div>
    )
}
