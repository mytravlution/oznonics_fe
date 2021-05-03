import React, { useState } from 'react'
import Header from './../../shared/header/header';
import './allProducts.scss'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MidHeader from '../../shared/midHeader/midHeader';
import { baseUrl, post, get } from "../../shared/http-service";
import Loader from '../../shared/loader/loader';
import MailPopup from './MailPopup';

export default class AddImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_type : localStorage.getItem('user-type'),
            id : useParams(),
            id_arr : id.split("_"),
            productSelectted : id_arr[0],
            category : id_arr[1],
            level1 : id_arr[2],
            level2 : id_arr[3],
             parameter :productSelectted + "/" + category + "/" + level1 + "/" + level2,
            str :[],
            fname :'',
            imageStr:'',
            loader:false,
            mailPopup:false,
            filename:'',
            buttonClicked:false,
            dataValue:[]
        };
    }

openMailPopup(){
    this.setState({
        mailPopup:true,
        filename: "fidfjis"
    })
       
        console.log(this.state.filename);
    }
    fileSelected = async (event) => {
        let files = event.target.files;
       
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (event) => {
            str.push(event.target.result);
      
            this.setState({
                fname: event.target.files[0].name,
                imageStr:str[0]
            })
            console.log("pic dataa:", str[0]);
            console.log("file name:" + this.state.fname);
          
            handleLogInClick();
        }
    }
 
    showFiles = async(event) => {
        this.setState({
            buttonClicked:true
        })
        const response = await get(baseUrl + "sendAllFiles/", null);
        if(response.msg === "SUCCESS"){
        console.log(response.data);
        this.setState({
            dataValue:response.data
        })
    }else{alert("Soemthing went wrong")}

    }
 
    
    handleLogInClick = async () => {
        setloader(true);
        const apiresponse = await post(baseUrl + "saveb64", {
            imageStr: str[0],
            fileName: this.state.fname,
            category: this.state.parameter
        });
        console.log(apiresponse);
        if (apiresponse.msg === "SUCCESS") {alert("File uploaded successfully")
        setloader(false);
    }
        else alert("Invalid USername or password");
    };

render(){
    return (
        <div className="bg-color">
            <Header />
            <div className="products-outer">
                {/* <MidHeader /> */}
                { this.state.user_type === "admin" ? <MidHeader /> : null}
                {this.state.loader ? <Loader /> : null}
                {this.state.mailPopup ? <MailPopup filename={filename} /> :null}
                <p></p>
                <h6>{this.state.parameter}</h6>
                <div>
                    <button onClick={this.showFiles.bind(this)}>Show all files</button>
                    <div className="showFiles">
                        {this.state.buttonClicked && <h6>{this.state.dataValue.map((link, index) => (

                            <div className="file-popup-body" key={index}>
                            <p>{link.file_name}</p>
                            
                            <i className="fa fa-envelope mail-icon"
                             value="bjbbuii" onClick={this.openMailPopup.bind(this)} 
                             title="Click to send file" ></i>
                            </div>)
                        )}</h6>}
                    </div>

                </div>
                <hr className="solid_files" />
                                <div >
                    <h5>Upload file</h5>
                    <input type="file" id="file_name" name="img" onChange={this.fileSelected.bind(this)} multiple />
                </div>
            </div>
         
        </div>
    )
}
}