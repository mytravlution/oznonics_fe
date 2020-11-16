import React from 'react'
import Header from './../../shared/header';

export default function AddImage() {
    return (
        <div>
            <Header/>
            <h1>Upload file</h1>
            <input type="file" name="img" />

        </div>
    )   
}
