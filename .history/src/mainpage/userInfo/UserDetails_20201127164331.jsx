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

      componentDidMount() {
        axios.get(`http://localhost/movies`)
        .then(res => {
          const movies = res.data;
          this.setState({ movies: movies });
        })
      }

    sendquery = async () => {
        const response = await get(baseUrl + "showAllUsers/", null);
          console.log(response.msg);

        // axios.post(baseUrl + "showAllUsers/",
        //   null, {
    
        // }).then(res => {
        //     console.log(res.msg);

        //   this.setState({
        //     dataValues: res.data['data']
        //   })
        // //   console.log("full reponse:" + this.state.dataValues);
        // })
    
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
