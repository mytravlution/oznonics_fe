import React, { Component } from 'react'

export default class midHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue: '',
          showPopup: false,
          showFiles: false,
          dataValues: []
        };
      }
    
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
             {dataValues.map((link)=>(
                   <div>{link}</div>)
                )}
          </div>
        </div>
        </div>
    )
}

}