import React, { useState } from 'react'
import Header from './../../shared/header/header';
import { get, post, baseUrl, refreshCookies } from "../../shared/http-service";

export default function AddImage() {

    const [imageStr, setImageStr] = useState('');

    const  fileSelected=async(event)=>{
        let file = event.target.files;
        // console.warn("dat file:", file);

        let reader = new FileReader();
        reader.readAsDataURL(file[0]);

        reader.onload=(event)=>{
                console.warn("pic data:", event.target.result);
                setImageStr(event.target.result);
        }
        const response = await post(baseUrl + "saveImage/", {
            username,
            password
          });
          console.log(response);
          if (response.msg === "SUCCESS") setLoggedIn(true);
          // if (username === "admin" && password === "admin12") setLoggedIn(true);
          else alert("Invalid USername or password");
    }
    return (
        <div>
            <Header/>
            <h1>Upload file</h1>
            <input type="file" name="img" onChange={fileSelected} />

        </div>
    )   
}
