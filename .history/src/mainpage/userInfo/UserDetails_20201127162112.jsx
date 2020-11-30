import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'
import axios from 'axios';
import { baseUrl } from '../../shared/http-service'

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          dataValues: [],
         
        };
      }
    sendquery = async()=>{
        axios.post(baseUrl + "showAllUsers/",
        null, {
      }).then(res => {
        console.log("full reponse:" +res.statusText);

        // this.setState({
        //   dataValues: res.data['data']
        // })
    })
    }

    sendquery = async () => {
        this.setState({
          showFiles: !this.state.showFiles
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

    render() {
        return (
            <div className="bg-color">
                  <Header />
                  <div className="products-outer">
            <MidHeader />
            <h2><span>Edit User</span></h2>
            <div onClick={this.sendquery.bind(this)}>onClick</div>Hello we start here
            </div>
           
            </div>
        )
    }
}
