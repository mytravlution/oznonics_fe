import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'
import './user.scss'
import { baseUrl } from '../../shared/http-service'

export default class LoginDetail extends Component {
    
    componentDidMount = async () => {
        const response = await get(baseUrl + "showAllUsers/", null);
        console.log(response.data);
        this.setState({
            dataValues: response.data
        })

    }

    render() {
        return (
            <div  className="bg-color">
                 <Header />
                 <div className="products-outer">
                    <MidHeader />
                    <h2><span>Login Details</span></h2>


           <div className="table-box">
                        <div className="table-row table-header">
                            <div className="table-cell">
                                <p>Username</p>
                            </div>
                            <div className="table-cell">
                                <p>Timestamp</p>
                            </div>
                           
                        </div>
                        <div className="table-row">
                            <div className="table-cell">
                                <p>Username</p>
                            </div>
                            <div className="table-cell">
                                <p>Phone Number</p>
                            </div>
                          
                        </div>
                    </div>
           
                    </div>
                
            </div>
        )
    }
}
