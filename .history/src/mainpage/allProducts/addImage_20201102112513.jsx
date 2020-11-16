import React, { useState } from 'react'
import Header from './../../shared/header/header';
import { get, post, baseUrl, refreshCookies } from "../../shared/http-service";
import './allProducts.scss'
import 'font-awesome/css/font-awesome.min.css';

export default function AddImage() {

    const [imageStr, setImageStr] = useState('');

    const fileSelected = async (event) => {
        let files = event.target.files;

        // console.warn("dat file:", file);
        const fname = event.target.files[0].name;'
    
        var str = [];
        let reader = new FileReader();
        // var file=files[0];
        // // reader.readAsDataURL(files[0]);
        // reader.onload = (function(file){
        //     return function(){
        //         console.log("inside:"+file);
        //     };
        // })(file);   
        // reader.readAsText(file);
        // console.log("pouyt"+file.name);
        
          
        reader.readAsDataURL(files[0]);

        reader.onload = (event) => {
            str.push(event.target.result);
            // str = (event.target.result);
            setImageStr(str[0]);
            console.log("pic dataa:", imageStr);
            console.log("file name:" + fname);
          print();
        }
        const print = ()=>{
            console.log("Success");
            
        }
        const apiresponse = await post(baseUrl + "saveImage/", {
            imageStr: imageStr,
            fileName: fname
        });

        console.log(apiresponse);
        if (apiresponse.msg === "SUCCESS") alert("File uploaded successfully");
        else alert("Invalid USername or password");
    }
    const [img, setImg] = useState('');
    // const previewimage = () => {
    //     const defaultBtn = document.getElementById("default-btn");
    //     const customBtn = document.getElementById("custom-btn");
    //     setImg("img");

    //     defaultBtn.click();

    //     defaultBtn.addEventListener("change", function () {
    //         const file = this.files[0];

    //     });
    // }
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
                        <input type="file" id="file_name" name="img" onChange={fileSelected} multiple />
                    </div>



                </div>
            </div>
        </div>
    )
}
