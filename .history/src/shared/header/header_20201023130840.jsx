import React, { Component } from 'react'
import "./header.scss"
import logo from '../../images/logo'

export default class header extends Component {
    render() {
        return (
            <div className="header">
                <img className="header-button" src={require(logo)} />
                 {/* <button className="header-button">OZONICS   </button> */}
            </div>
           
        )
    }
}
