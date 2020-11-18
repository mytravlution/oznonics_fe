import React, { Component } from 'react'
import { post, baseUrl } from "../../shared/http-service";
import Popup from "./popup";
export default class midHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      showPopup: false,
      showFiles: false
    };
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
      showFiles: !this.state.showFiles

    })
  }
  sendquery = async () => {
    this.setState({
      showFiles: !this.state.showFiles
    })
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
            onChange={evt => this.updateInputValue(evt)}
            value={this.state.inputValue}
          />
          <button type="submit" onClick={this.sendquery} ><i className="fa fa-search"></i></button>
          {(this.state.showFiles) && <ListFiles />}
        </div>
        <div className="add-user">
          <img className="user-img" src={require("../../images/add_user.png")} alt="Add User" onClick={this.togglePopup.bind(this)} />
          {this.state.showPopup ? <Popup

            closePopup={this.togglePopup.bind(this)}
          /> : null}
          <p>Add User</p>

        </div>

      </div>
    )
    function ListFiles() {
      return (
        <div className="popup">
          <div className="popup-inner">       
            <div className="popup-header">
              <p>Search Results for HR300</p>
              <span onClick={this.}>&times;</span>
            </div>
             Success
          </div>

        </div>
      )
    }

  }
}
