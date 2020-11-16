import React, { Component } from 'react'
import "./allProducts.scss";

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
        let btn_class = this.state.clicked ? "clicked-button":"sub-category-inner";

        return (
            
            <div>
                <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  {this.props.name}
             </button>
            </div>
        )
    }
}
export default Button;
