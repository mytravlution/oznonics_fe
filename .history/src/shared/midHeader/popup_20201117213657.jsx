import React, { Component } from 'react'

export default class popup extends Component {
    render() {
        return (
            <div className="popup">
                    <div className="popup-inner">
                        <h1>Hello</h1>
                        <button onClick={this.props.closePopup}>Close</button>
                        </div>                
            </div>
        )
    }
}
