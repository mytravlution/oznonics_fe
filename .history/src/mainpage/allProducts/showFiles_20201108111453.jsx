import React from 'react'
import { get, post, baseUrl, refreshCookies } from "../../shared/http-service";

export default function ShowFiles() {
var para
    const fileUploader = (event)=>{
        let selectedFile= event.target.files[0];
        const data = new FormData();

        data.append('file', selectedFile);
        axios.post("http://127.0.0.1:8080/ozonics/saveImage/", data, {
        params:{
            id:{parameter}
        }
        }).then(res=>{
            console.log(res.statusText);
        })
    }
    
    return (
        <div>
            <button onClick={fileUploader}>Click</button>
        </div>
    )
}
