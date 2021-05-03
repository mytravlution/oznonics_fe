import React, { Component } from 'react'

export default class EditUserPopup extends Component {
    render() {
        return (
            <div>
                {this.props.username}
                {this.props.phone_num}
                {this.props.password},
            </div>
        )
    }
}
