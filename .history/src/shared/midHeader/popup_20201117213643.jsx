import React, { Component } from 'react'

export default class popup extends Component {
    render() {
        return (
            <div className="popup">
                    <div className="popup-inner">
                        <h1>Hello</h1>
            closePopup={this.togglePopup.bind(this)}
                        <button onClick={this.props.}>Close</button>
                        </div>                
            </div>
        )
    }
}
