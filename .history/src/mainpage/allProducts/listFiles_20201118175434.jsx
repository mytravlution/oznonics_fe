import React, { Component } from 'react'
import './listPopup.scss'

export default class midHeader extends Component {
   
    
    render() {
    return (
        <div>

<div className="file-popup">
          <div className="file-popup-inner">
            <div className="file-popup-header">
              <p>Search Results for HR300</p>
              <span onClick={this.props.closeFile}>&times;</span>
            </div>
             {this.props.dataValues.map((link)=>(
                   <div>
                       <p>{link}</p>
                         <img className="file-popup-img" src={require("../../images/download.png")} alt="download"/>
                         </div>)
                )}
          
          </div>
        </div>
        </div>
    )
}

}