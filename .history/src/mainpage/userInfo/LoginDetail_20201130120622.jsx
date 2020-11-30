import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'
import './user.scss'

export default class LoginDetail extends Component {
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
                                <p>Phone Number</p>
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
