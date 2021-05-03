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
                    <div>
                    <div className="multiple-icons">
                        <a href="/loginInfo"><img className="multiple-img" src={require("../../images/view_logs.png")} alt="View logs" />
                            <p>Login Details</p></a>
                        <a href="/fileInfo"> <img className="multiple-img" src={require("../../images/view_files.png")} alt="View Files" />
                            <p>File Details</p></a>
                    </div>
                    <div className="table-box user">
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
                                    <tr>
                                        <td className="userCol" >
                                        <i onClick={() => this.onDeleteCLick(item.username)}
                                            title="Delete User"
                                            className="fa fa-trash del_icon"
                                        />
                                        <i className="fa fa-edit del_icon"
                                            onClick={() => this.onEditClick(item.username, item.phone_num, item.password, item.segment, item.category, item.sub_category)}
                                            title="Edit User"></i>
                                            </td>
                                        <td className="userCol">{item.username}</td>
                                        <td className="bigCol userCol">{item.phone_num}</td>
                                        <td className="medCol userCol">{item.password}</td>
                                        {/* </td>{item.category.replaceAll("_",":")}</td> */}
                                        <td className="userCol">{item.segment},{item.category},{item.sub_category}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        
                    </div>
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
