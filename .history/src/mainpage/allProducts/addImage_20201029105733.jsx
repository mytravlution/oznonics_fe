import React from 'react'
import Header from './../../shared/header/header';

export default function AddImage() {

    const  fileSelected=(event)=>{
        let file = event.target.files;
        console.warn("dat file:", file);

        let reader = new FileReader
        
    }
    return (
        <div>
            <Header/>
            <h1>Upload file</h1>
            <input type="file" name="img" onChange={fileSelected} />

        </div>
    )   
}
