import React, { Component } from 'react'
import './allProducts.scss'
import { baseUrl } from '../../shared/http-service';
import Axios from 'axios';
import MailPopup from './MailPopup';
import ShowCommentPopup from './showCommentPopup';

export default class midHeader extends Component {


  constructor(props) {
    super(props);
    this.state = {
      filename: '',
      mailPopup: false,
      id: '',
      comments:'',
      commentPopup:false,
      loader:true
    };
  }

  openMailPopup12 = (name) => {
    console.log(name);
    this.setState(
      {
        mailPopup: true,
        filename: name,
      })
      console.log("popup:"+this.state.mailPopup)
  }
  openCommentPopup = (name, comments) => {
    console.log(name);
    this.setState(
      {
        commentPopup: true,
        filename: name,
        comments: comments
      })
      console.log("popup:"+this.state.mailPopup)
  }

  fileUploader = (val) => {
    console.log("id:" + val);

    this.setState({
      filename: val,
      loader:true
    })
    // isButtonClicked(true);
    Axios({
      url: baseUrl + "sendFile/",
      method: 'GET',
      responseType: "blob",
      params: {
        id: val
      }
    }).then(res => {
      console.log(res.statusText);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', this.state.filename);
      document.body.appendChild(link);
      link.click();
      this.setState({
        
        loader:false
      })
    })


  }

  render() {
    return (
      <div>

        <div className="file-popup">
        {loader ? <Loader file="file" loaderCategory={loaderCategory} /> : null}

        {this.state.mailPopup ? <MailPopup filename={this.state.filename} /> : null}
      {this.state.commentPopup ? <ShowCommentPopup filename={this.state.filename} comments={this.state.comments} id="cdcs" />: null}
          <div className="file-popup-inner">
            <div className="file-popup-header">
              {this.props.searchStr === "" ?
                <p> All Results</p> :
                <p>Search Results for "{this.props.searchStr}"</p>

              }
             
              <span onClick={this.props.closeFile}>&times;</span>

            </div>
            <hr className="solid_files"></hr>
            {this.props.dataValues.map((link, index) => (
              <div className="file-popup-body" key={index}>
                <p className="listfilesText" >{link.file_name}</p>
                <div onClick={this.openCommentPopup.bind(this, link.file_name, link.comments)} >
                  
                  <i className="fa fa-comments  mail-icon" aria-hidden="true" />
                  {/* <img className="file-popup-img" src={require("../../images/download.png")} /> */}
                </div>

                <div onClick={this.openMailPopup12.bind(this, link.file_name)} >
                  <i className="fa fa-envelope mail-icon" aria-hidden="true"></i>
                  {/* <img className="file-popup-img" src={require("../../images/download.png")} /> */}
                </div>

                <div onClick={this.fileUploader.bind(this, link.file_name)} value={link.file_name} >
                  <img className="file-popup-img" src={require("../../images/download.png")} alt="download" />
                </div>
              </div>)
            )}

          </div>
        </div>
      </div>
    )
  }

}