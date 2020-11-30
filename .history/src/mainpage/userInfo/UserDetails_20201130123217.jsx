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
        this.setState({
            dataValues: response.data
        })

    }


    render() {
        return (
            <div className="bg-color">
                <Header />
                <div className="products-outer">
                    <MidHeader />
                    <h2><span>Edit User</span></h2>
                    <div className="multiple-icons">
                        <a href="/loginInfo"><img className="multiple-img" src={require("../../images/view_logs.png")} alt="View logs" />
                            <p>Login Details</p></a>
                        <a href="/loginInfo"> <img className="multiple-img" src={require("../../images/view_files.png")} alt="View Files" />
                            <p>File Details</p></a>
                    </div>

                    <div className="table-box">
                        <div className="table-row table-header">
                            <div className="table-cell">
                                <p></p>
                            </div>
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

                        <div>
                            {this.state.dataValues.map((item, index) =>
                                // <div> {item.phone_num} </div>
                                <div className="table-row" key="index">
                                    <div className="table-cell">
                                        <input type="checkbox"
                                            checked="false"
                                        // onChange={this.toggleChange}
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <p>{item.username}</p>
                                    </div>
                                    <div className="table-cell">
                                        <p>{item.phone_num}</p>
                                    </div>
                                    <div className="table-cell">
                                        <p>{item.password}</p>
                                    </div>
                                    <div className="table-cell">
                                        <p className="right-head">{item.segment}</p>
                                        <p className="right-subhead">{item.category},{item.sub_category}</p>
                                    </div>
                                </div>
                            )}
                            </div>

                    </div>
                </div>
            </div>
        )
    }
}
