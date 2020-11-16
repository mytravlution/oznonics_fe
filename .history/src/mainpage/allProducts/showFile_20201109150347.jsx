import React from 'react'
import axios from 'axios';


export default function showFile() {
    const [buttonClicked, isButtonClicked] = useState(false); 
    var parameter = "HR200/Mechnical/Product Drawing/2D Drawing/Main Unit";
    const [dataValue, setDatavalue] = useState([]);

    const fileUploader = (event)=>{
        isButtonClicked(true);
        axios({
            url:"",
            method:'GET',
            responseType:"blob"
        }).then(res=>{
            console.log(res.data);
            
        })

        axios.post("http://127.0.0.1:8080/ozonics/sendFile/", null,
         {

        }).then(res=>{
            console.log("full reponse:"+res.data['files']);
            setDatavalue(res.data['files']);
            console.log(res.statusText);
        })
    }
    return (
        <div>
            
        </div>
    )
}
