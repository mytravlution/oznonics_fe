import React from 'react'
import axios from 'axios';
import {baseUrl} from "../../shared/http-service"

export default function ShowFile() {
    // const [buttonClicked, isButtonClicked] = useState(false);
    // var parameter = "HR200/Mechnical/Product Drawing/2D Drawing/Main Unit";
    let filename = "news popup@2x.png";
    // const [dataValue, setDatavalue] = useState("");

    const fileUploader = (event) => {
        // isButtonClicked(true);
        axios({
            url: "http://127.0.0.1:8080/ozonics/sendFile",
            method: 'GET',
            responseType: "blob",
            params:{
                id:filename
            }
        }).then(res => {
            console.log(res.data);
            console.log(res.statusText);
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
         
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
  <div>
                {/* {buttonClicked && {dataValue}} */}
            </div>
        </div>
    )
}
