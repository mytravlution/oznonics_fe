import React, { Component } from 'react'
import "./header.scss"

export default class header extends Component {
    render() {
        return (
            <div className="header">
                <img src="logo.png" />
                 <button className="header-button">OZONICS   </button>
            </div>
           
        )
    }
}
