import React, { Component } from 'react'

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
             Success
             {this.props.dataValues.map((link)=>(
                   <div>{link}</div>)
                )}
          </div>
        </div>
        </div>
    )
}

}