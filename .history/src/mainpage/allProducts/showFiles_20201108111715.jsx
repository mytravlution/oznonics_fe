import React from 'react'
import { get, post, baseUrl, refreshCookies } from "../../shared/http-service";

export default function ShowFiles() {
var parameter = "HR200/Mechnical/Product Drawing/2D Drawing/Main Unit";
    const fileUploader = (event)=>{
        let selectedFile= event.target.files[0];
        const data = new FormData();

        data.append('file', selectedFile);
        axios.post("http://127.0.0.1:8080/ozonics/saveImage/", data, {
        params:{
            id:{parameter}
        }
        }).then(res=>{
            log
            console.log(res.statusText);
        })
    }
    
    return (
        <div>
            <button onClick={fileUploader}>Click</button>
        </div>
    )
}
