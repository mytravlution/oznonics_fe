import React, { Component } from 'react'

import "./header.scss"

export default class header extends Component {
   
    render() {
        return (
          
            <div className="header">
                <a href="/landing/"><img className="header-button" src={require("../../images/logo.png")} alt="logo" /></a>
               
            </div>

        )
    }
}
