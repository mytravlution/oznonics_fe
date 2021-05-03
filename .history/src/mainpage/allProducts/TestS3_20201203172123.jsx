import React, { Component } from 'react'

export default class TestS3 extends Component {
    constructor(props){
        super(props);
        this.state = {
          success : false,
          url : ""
        }
      }

    render() {
        const success_message = ()=>(
            <div>
                 <h3 style={{color: 'green'}}>SUCCESSFUL UPLOAD</h3>
        <a href={this.state.url}>Access the file here</a>
        <br/>
            </div>
        )
        return (
            <div>
                
            </div>
        )
    }
}
