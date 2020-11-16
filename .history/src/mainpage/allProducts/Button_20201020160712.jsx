import React, { Component } from 'react'

 class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked:false
        }
    }
    changeColor =()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        let btn_class = this.state.clicked ? "redButton" : "whiteButton";

        return (
            
            <div>
                
            </div>
        )
    }
}
