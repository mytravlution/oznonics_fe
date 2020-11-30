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

    componentDidMount = async () => {
        const response = await get(baseUrl + "showAllUsers/", null);
        console.log(response.data);

    }


    render() {
        return (
            <div className="bg-color">
                <Header />
                <div className="products-outer">
                    <MidHeader />
                    <h2><span>Edit User</span></h2>
           Hello we start here
           <img  className="user-img" src={require("../../images/add_user.png")} alt="Add User"/>
           <img  className="user-img" src={require("../../images/add_user.png")} alt="Add User"/>


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
