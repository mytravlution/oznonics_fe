import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'

export default class UserDetails extends Component {

    sendquery = async()=>{
        axios.post(baseUrl + "searchQuery/",
        { searchStr: this.state.inputValue }, {
  
      }).then(res => {
        this.setState({
          dataValues: res.data['files']
        })
        console.log("full reponse:" + this.state.dataValues);

    }

    render() {
        return (
            <div className="bg-color">
                  <Header />
                  <div className="products-outer">
            <MidHeader />
            <h2><span>Edit User</span></h2>
            Hello we start here
            </div>
           
            </div>
        )
    }
}
