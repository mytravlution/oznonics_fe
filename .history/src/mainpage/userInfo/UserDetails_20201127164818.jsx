import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'
import { baseUrl, get } from '../../shared/http-service'
import './user.scss'

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


           <div className="table-box">
            <div className="table-row">

            </div>
           </div>
            </div>

           
            </div>
        )
    }
}
