import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'
import axios from 'axios';
import { baseUrl, post, get } from '../../shared/http-service'

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          dataValues: [],
         
        };
      }

      componentDidMount=async()=> {
               const response = await get(baseUrl + "showAllUsers/", null);
          console.log(response.msg);
       
      }

   
    render() {
        return (
            <div className="bg-color">
                  <Header />
                  <div className="products-outer">
            <MidHeader />
            <h2><span>Edit User</span></h2>
           Hello we start here


           <div>
               
           </div>
            </div>

           
            </div>
        )
    }
}
