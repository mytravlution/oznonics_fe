import React, { useState } from 'react'
import Header from './../../shared/header/header';
import { get, post, baseUrl, refreshCookies } from "../../shared/http-service";
import './allProducts.scss'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function AddImage({ detailSelected, subCategorySelected, secondLevelSelected,productselected }) {
    var id = useParams();
    var id_arr = {i
    const [imageStr, setImageStr] = useState('');
    var str = [];
    let fname = '';
    const fileSelected = async (event) => {
        let files = event.target.files;
        fname = event.target.files[0].name;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (event) => {
            str.push(event.target.result);
            // str = (event.target.result);
            setImageStr(str[0]);
            console.log("pic dataa:", str[0]);
            console.log("file name:" + fname);
            handleLogInClick();
        }
    }

    const handleLogInClick = async () => {
        const apiresponse = await post(baseUrl + "saveImage/", {
            imageStr: str[0],
            fileName: fname
        });
        console.log(apiresponse);
        if (apiresponse.msg === "SUCCESS") alert("File uploaded successfully");
        else alert("Invalid USername or password");
    };

    const fileUploader = (event)=>{
        let selectedFile= event.target.files[0];
        const data = new FormData();

        data.append('file', selectedFile);
        axios.post("http://127.0.0.1:8080/ozonics/saveImage/", data, {
        params:{
            id:'HR200/Mechnical/Product Drawing/2D Drawing/Main Unit'
        }
        }).then(res=>{
            console.log(res.statusText);
        })

    }
    return (
        <div className="bg-color">
            <Header />
            <div className="products-outer">
                <p></p>
                <h6>Mechnical/Product Drawing/2D Drawing/Main Unit</h6>
                <div className="imageCont">
                    <div className="container">
                        <div className="wrapper">
                            <div className="image">
                                <img src={imageStr} alt="" />
                            </div>
                            <div className="content">
                                <div className="icon">
                                    <i className="fas fa-cloud-upload-alt"></i>
                                </div>
                                <div className="text">
                                    No file chosen
                            </div>
                            </div>

                            <div className="cancel-btn">
                                <i className="fas fa-times"></i>
                            </div>
                            <div className="file-name">
                                File name here
                            </div>

                        </div>
                        {/* <input type="file" name="img" id="default-btn" hidden />
                    <button id="custom-btn" onPress="document.getElementById('custom-btn').click()" >Choose a file</button> */}

                        <h5>Upload file</h5>
                        <input type="file" id="file_name" name="img" onChange={fileUploader} multiple />
                    </div>



                </div>
            </div>
        </div>
    )
}
