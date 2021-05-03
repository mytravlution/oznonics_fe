import React, { Component } from 'react'

export default class TestS3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            url: ""
        }
    }
    handleChange = (ev) => {
        this.setState({success: false, url : ""});
        
      }
    render() {
        const success_message = () => (
            <div style={{ padding: 50 }}>
                <h3 style={{ color: 'green' }}>SUCCESSFUL UPLOAD</h3>
                <a href={this.state.url}>Access the file here</a>
                <br />
            </div>
        )
        return (
            <div className="App">
            <center>
              <h1>UPLOAD A FILE</h1>
              {this.state.success ? <Success_message/> : null}
              <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/>
              <br/>
              <button onClick={this.handleUpload}>UPLOAD</button>
            </center>
          </div>
        )
    }
}
