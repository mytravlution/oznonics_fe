import React, { Component } from 'react'

export default class midHeader extends Component {
   
    
    render() {
    return (
        <div>

<div className="popup">
          <div className="popup-inner">
            <div className="popup-header">
              <p>Search Results for HR300</p>
              <span>&times;</span>
            </div>
             Success
             {this.state.dataValues.map((link)=>(
                   <div>{link}</div>)
                )}
          </div>
        </div>
        </div>
    )
}

}