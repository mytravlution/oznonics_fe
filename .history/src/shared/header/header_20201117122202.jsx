import React, { Component } from 'react'
import "./header.scss"

export default class header extends Component {
   
    state = {
        queryStr: '',
      };

    render() {
        return (
            <div className="header">
                <a href="/products/"><img className="header-button" src={require("../../images/logo.png")} alt="logo" /></a>
                {/* <button className="header-button">OZONICS   </button> */}
                <div className="search-bar">
                    <input type="text" placeholder="Search here.." name="search"
                        onChange={val => { this.setState({ queryStr: val }); }} 
                        value={this.state.queryStr}
                       />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>
            </div>

        )
    }
}
