import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'
import Axios from 'axios'
import { baseUrl } from '../../shared/http-service'

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          dataValues: [],
         
        };
      }
    sendquery = async()=>{
        Axios.post(baseUrl + "showAllUsers/",
        null, {
      }).then(res => {
        this.setState({
          dataValues: res.data['data']
        })
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
