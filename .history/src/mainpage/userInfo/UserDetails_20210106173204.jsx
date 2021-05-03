import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'
import { baseUrl, get } from '../../shared/http-service'
import './user.scss'
import DeletePopup from './DeletePopup';
import EditUserPopup from '../../shared/midHeader/edit_user-popup'

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataValues: [],
            deletePopup: false,
            username: '',
            password: '',
            phone_num: '',
            segment: '',
            category: '',
            sub_category: '',
            editPopup: false

        };

    }

    componentDidMount = async () => {
        const response = await get(baseUrl + "showAllUsers/", null);
        console.log(response.data);
        this.setState({
            dataValues: response.data
        })
    }

    onDeleteCLick(username) {
        this.setState({
            deletePopup: true,
            username: username
        })
    }

    onEditClick(username, phone_num, password, segment, category, sub_category) {
        this.setState({
            username: username,
            phone_num: phone_num,
            password: password,
            segment: segment,
            category: category,
            sub_category: sub_category,
            editPopup: !this.state.editPopup
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
                        <a href="/fileInfo"> <img className="multiple-img" src={require("../../images/view_files.png")} alt="View Files" />
                            <p>File Details</p></a>
                    </div>
                    <div>
                        <table className="mainFilesTable">
                            <thead>
                                <tr className="">
                                    <th></th>
                                    <th>Username</th>
                                    <th>Phone Number</th>
                                    <th>Password</th>
                                    <th>Rights</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.dataValues.map((item, index) =>
                                    <tr style={{width:"0%"}}>
                                        <div >
                                        <i onClick={() => this.onDeleteCLick(item.username)}
                                            title="Delete User"
                                            className="fa fa-trash del_icon"
                                        />
                                        <i className="fa fa-edit del_icon"
                                            onClick={() => this.onEditClick(item.username, item.phone_num, item.password, item.segment, item.category, item.sub_category)}
                                            title="Edit User"></i>
                                            </div>
                                        <td className="smallCol">{item.username}</td>
                                        <td className="bigCol">{item.phone_num}</td>
                                        <td className="medCol">
                                            {item.password}
                                        </td>
                                        {/* </td>{item.category.replaceAll("_",":")}</td> */}
                                        <td className="smallCol">{item.segment},{item.category},{item.sub_category}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {/* <div className="table-box">
                        <div className="table-row table-header">
                            <div className="table-cell-first">
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
                        </div> */}
                        {/* <div className="table-box"> */}

                        {/* <div>
                            {this.state.dataValues.map((item, index) =>
                                // <div> {item.phone_num} </div>
                                <div className="table-row" key={index}>
                                    <div className="table-cell-first" >
                                        <i onClick={() => this.onDeleteCLick(item.username)}
                                            title="Delete User"
                                            className="fa fa-trash del_icon"
                                        />
                                        <i className="fa fa-edit del_icon"
                                            onClick={() => this.onEditClick(item.username, item.phone_num, item.password, item.segment, item.category, item.sub_category)}
                                            title="Edit User"></i>
                                    </div>

                                    <div className="table-cell">
                                        <p >{item.username}</p>
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
                        </div> */}

                        {/* </div> */}
                    </div>
                </div>
                {this.state.deletePopup && <DeletePopup username={this.state.username} />}
                {this.state.editPopup &&
                    <EditUserPopup
                        username={this.state.username}
                        password={this.state.password}
                        phone_num={this.state.phone_num}
                        segment={this.state.segment}
                        category={this.state.category}
                        sub_category={this.state.sub_category}
                        closeEditPopup={this.onEditClick.bind(this)} />}
            </div>
        )
    }
}
