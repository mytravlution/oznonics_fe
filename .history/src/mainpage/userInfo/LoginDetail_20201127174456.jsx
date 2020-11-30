import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'

export default class LoginDetail extends Component {
    render() {
        return (
            <div  className="bg-color">
                 <Header />
                 <div className="products-outer">
                    <MidHeader />
                    <h2><span>Login Details</span></h2>

                    Hey there

           <div className="table-box">
                        <div className="table-row table-header">
                            <div className="table-cell">
                                <p>Username</p>
                            </div>
                            <div className="table-cell">
                                <p>Phone Number</p>
                            </div>
                            <div className="table-cell">
                                <p>Password</p>
                            </div>
                            <div className="table-cell">
                                <p>Rights</p>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell">
                                <p>Username</p>
                            </div>
                            <div className="table-cell">
                                <p>Phone Number</p>
                            </div>
                            <div className="table-cell">
                                <p>Password</p>
                            </div>
                            <div className="table-cell">
                                <p>Rights</p>
                            </div>
                        </div>
                    </div>
           
                    </div>
                
            </div>
        )
    }
}
