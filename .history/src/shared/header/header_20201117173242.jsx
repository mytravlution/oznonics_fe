import React, { Component } from 'react'
import {  post, baseUrl } from "../../shared/http-service";

import "./header.scss"

export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue: ''
        };
      }
      updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
      }

      sendquery=async()=>{
        const response = await post(baseUrl + "searchQuery/", {
           username: this.state.inputValue
          });

        console.log(this.state.inputValue);
        console.log(response);
    if (response.msg === "SUCCESS") console.log("Success");
    else console.log("Failure");
    
    ;
      }
    render() {
        return (
            <div className="header">
                <a href="/products/"><img className="header-button" src={require("../../images/logo.png")} alt="logo" /></a>
                {/* <button className="header-button">OZONICS   </button> */}
                <div className="search-bar">
                    <input type="text" placeholder="Search here.." name="search"
                        onChange={evt => this.updateInputValue(evt) } 
                        value={this.state.inputValue}
                       />
                    <button type="submit" onClick={this.sendquery}><i className="fa fa-search"></i></button>
                </div>
                <img src={require("../../images/add")}/>
            </div>

        )
    }
}
