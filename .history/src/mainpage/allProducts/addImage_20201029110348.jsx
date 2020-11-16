import React from 'react'
import Header from './../../shared/header/header';

export default function AddImage() {

    const []
    const  fileSelected=(event)=>{
        let file = event.target.files;
        // console.warn("dat file:", file);

        let reader = new FileReader();
        reader.readAsDataURL(file[0]);

        reader.onload=(event)=>{
                console.warn("pic data:", event.target.result);
        }
    }
    return (
        <div>
            <Header/>
            <h1>Upload file</h1>
            <input type="file" name="img" onChange={fileSelected} />

        </div>
    )   
}
