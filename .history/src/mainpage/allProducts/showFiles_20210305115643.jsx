import React, { Component } from 'react'
import { baseUrl } from "../../shared/http-service"
import Axios from 'axios';
import Loader from '../../shared/loader/loader';

export default class ShowFiles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false,
            dataValue: [],
           
        };
    }
    fileUploader12 = (val) => {
        console.log("id:" + val);

        this.setState({
            filename: val,
        
        })
        // isButtonClicked(true);
        Axios({
            url: baseUrl + "sendFile/",
            method: 'GET',
            responseType: "blob",
            params: {
                id: val
            }
        }).then(res => {
            console.log(res.data);
            console.log(res.statusText);
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', this.state.filename);
            document.body.appendChild(link);
            link.click();
           
        })


    }
    // fileUploader = (event) => {
    //     this.setState({
    //         buttonClicked: true
    //     })
    //     axios.post(baseUrl + "sendAllFiles/", null, {
    //         params: {
    //             id: "HR200/Mechnical/Product Drawing/2D Drawing/Main Unit"
    //         }
    //     }).then(res => {
    //         this.setState({
    //             dataValue: res.data
    //         })
    //         console.log("full reponse:" + this.state.dataValue);
    //         console.log(res.statusText);


    //         // console.log("full reponse:"+res.data['files']);
    //         // setDatavalue(res.data['files']);
    //         // console.log(res.statusText);
    //     })
    // }
    render() {
        return (
            <div>
              {this.state.loader ? <Loader file="file" loaderCategory="download" /> : null}

                <button onClick={this.fileUploader.bind(this)}>Click</button>
                <div>
                    {this.state.buttonClicked &&
                        <h4>{this.state.dataValue.map((link, index) => (
                            <div>
                                <div key={index}>{link.file_name}</div>
                                <div onClick={this.fileUploader12.bind(this, link.file_name)} >
                                    <img className="file-popup-img" src={require("../../images/download.png")} alt="download" />
                                </div>
                                {/* <a href="/home/garima/Documents/react_projects/ozonics/src/images/add_user.png" 
                             target="_blank" rel="noopener noreferrer"  download = "abc.png">
                                <img className="file-popup-img" src={require("../../images/download.png")} alt="download" />
                            </a> */}
                            </div>
                        )
                        )}</h4>}
                </div>
            </div>
        )
    }
}