import React, { useState } from 'react'
import axios from 'axios';


export default function ShowFile() {
    const [buttonClicked, isButtonClicked] = useState(false);
    var parameter = "HR200/Mechnical/Product Drawing/2D Drawing/Main Unit";
    const [dataValue, setDatavalue] = useState("");

    const fileUploader = (event) => {
        isButtonClicked(true);
        axios({
            url: "http://127.0.0.1:8080/ozonics/sendFile",
            method: 'GET',
            responseType: "blob",
            params:{
                id:"1 (1).jpeg"
            }
        }).then(res => {
            console.log(res.data);
            console.log(res.statusText);
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.cre
         
        })
        

        // axios.post("http://127.0.0.1:8080/ozonics/sendFile/", null,
        //  {

        // }).then(res=>{
        //     console.log("full reponse:"+res.data['files']);
        //     setDatavalue(res.data['files']);
        //     console.log(res.statusText);
        // })
    }
    return (
        <div>
  <button onClick={fileUploader}>Click</button>
  <img src="https://lido.s3.ap-south-1.amazonaws.com/cafe-felix/cafe-felix-menu-page-1.jp2" />
  <div>
                {/* {buttonClicked && {dataValue}} */}
            </div>
        </div>
    )
}
