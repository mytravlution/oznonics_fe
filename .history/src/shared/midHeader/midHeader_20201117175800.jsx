import React, { Component } from 'react'

export default class midHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue: ''
        };
      }
      updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
      }

      sendquery=async()=>{
        const response = await post(baseUrl + "searchQuery/", {
           username: this.state.inputValue
          });

        console.log(this.state.inputValue);
        console.log(response);
    if (response.msg === "SUCCESS") console.log("Success");
    else console.log("Failure");
    
    ;
      }
    render() {
        return (
            <div>
                 <div className="search-bar">
                    <input type="text" placeholder="Search here.." name="search"
                       />
                    <button type="submit" ><i className="fa fa-search"></i></button>
                </div>
                <div className="add-user">
                <img src={require("../../images/add_user.png")} alt="Add User" />
                <p>Add User</p>
                </div>
            </div>
        )
    }
}
