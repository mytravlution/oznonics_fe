import axios from 'axios';
import Popup from "./add_user-popup";
import ListFiles from "../../mainpage/allProducts/listFiles";
import { baseUrl } from "../../shared/http-service";
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class midHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      showPopup: false,
      showFiles: false,
      dataValues: [],
      hbclicked: false,
      showEditUser: false,
      userType: localStorage.getItem('user-type')
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
      hbclicked: !this.state.hbclicked
    })
  }

  toggleFilePopup() {
    this.setState({
      showFiles: !this.state.showFiles,

    })
  }
  sendquery = async () => {
    this.setState({
      showFiles: !this.state.showFiles,
      searchStr: this.state.inputValue
    })

    axios.post(baseUrl + "searchQuery/",
      { searchStr: this.state.inputValue }, {

    }).then(res => {
      this.setState({
        dataValues: res.data['files']
      })
      console.log("full reponse:" + this.state.dataValues);
      console.log(res.statusText);
    })

  }

  checkUser() {
    this.setState({
      hbclicked: !this.state.hbclicked
    })
    console.log(this.state.hbclicked);

  }
  checkEditUser() {
    this.setState({
      hbclicked: !this.state.hbclicked,
      showEditUser: !this.state.showEditUser
    })
  }
  logout() {
    window.localStorage.clear();
  }
  render() {
    return (
      <div className="search-parent">
        {/* start search bar */}
        <div className="search">
        <div>
          <input type="text" name="search"
            className="form-control input-sm"
            maxlength="64" placeholder="Use “,” to search multiple phrases"
            onChange={evt => this.updateInputValue(evt)}
            value={this.state.inputValue} />
            </div>
            <button type="submit" className="search-button" onClick={this.sendquery}>
              <i className="fa fa-search" style={{ fontSize: "25px" }}></i></button>
              {(this.state.showFiles) && <ListFiles searchStr={this.state.searchStr} dataValues={this.state.dataValues} closeFile={this.toggleFilePopup.bind(this)} />}

        
        </div>
        {/* <div className="search-bar">
          <div>
            <input type="text" placeholder="Use “,” to search multiple phrases" name="search"
              onChange={evt => this.updateInputValue(evt)}
              value={this.state.inputValue}
            />
          </div>
          <button type="submit" onClick={this.sendquery} ><i className="fa fa-search"></i></button>
          {(this.state.showFiles) && <ListFiles searchStr={this.state.searchStr} dataValues={this.state.dataValues} closeFile={this.toggleFilePopup.bind(this)} />}

        </div> */}
        {/* end search bar */}
        <div className="add-user">
          <i className="fa fa-bars" onClick={this.checkUser.bind(this)} />
          {this.state.hbclicked ?
            <div className="myLinks">
              {this.state.userType === "admin" ?
                <div className="user-dropdown" onClick={this.togglePopup.bind(this)} >
                  <img className="user-img" src={require("../../images/add_user.png")} alt="Add User" />
                  <p>Add User</p>
                </div>
                : null
              }
              {this.state.userType === "admin" ?

                <div className="user-dropdown" onClick={this.checkEditUser.bind(this)}>
                  <img className="user-img" src={require("../../images/edit_user.png")} alt="Edit User" />
                  <p>Edit User</p>
                </div>
                : null
              }
              <a href="/"><div className="user-dropdown" onClick={this.logout.bind(this)}>
                <img className="user-img" src={require("../../images/logout.png")} alt="Logout" />
                <p>Logout</p>
              </div></a>


            </div>
            : null
          }

          {/* <img className="user-img" src={require("../../images/add_user.png")} alt="Add User" onClick={this.togglePopup.bind(this)} /> */}
          {this.state.showPopup ?
            // <Redirect to="/add-user" closePopup={this.togglePopup.bind(this)} />
            <Popup
              closePopup={this.togglePopup.bind(this)} />
            : null}

          {this.state.showEditUser ?
            <Redirect to="/showUsers" /> : null}
          {/* <p>Add User</p> */}

        </div>

      </div>
    )


  }
}
