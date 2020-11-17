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
                // console.warn("pic data:", event.target.result);
                const str = event.target.result;
                setImageStr(str);
                console.log("pic dataa:", str);
                
        }
        const response = await post(baseUrl + "saveImage/", {
            imageStr
          });
          console.log(response);
          if (response.msg === "SUCCESS") alert("File uploaded successfully");
          // if (username === "admin" && password === "admin12") setLoggedIn(true);
          else alert("Invalid USername or password");
    }
    return (
        <div className="bg-color">
            <Header/>
            <h1>Upload file</h1>
            <input type="file" name="img" onChange={fileSelected} />
        </div>
    )   
}