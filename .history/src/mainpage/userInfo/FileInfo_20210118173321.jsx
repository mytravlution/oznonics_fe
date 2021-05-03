import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'
import './user.scss'
import { baseUrl, get } from '../../shared/http-service'



export default class FileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataValues: [],
            editPopup: false
        };
    }


    componentDidMount = async () => {
        const response = await get(baseUrl + "fileInfo/", null);
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
                    <h2><span>File Details</span></h2>
                    <div className="table-box file">
                    <table className="mainFilesTable">
                    <thead>
                        <tr className="">
                            <th>Username</th>
                            <th>File Name</th>
                           
                            <th>Category</th>
                            <th></th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.dataValues.map((item, index) =>
                            <tr  className="">
                                <td className="smallCol">{item.username}</td>
                                <td className="medCol">{item.file_name}</td>
                                <td className="vSmallCol"><i className="fa fa-comments  mail-icon" aria-hidden="true" /></td>

                                <td className="bigCol">
                                {item.category.replaceAll("_","/").toUpperCase()}
                                </td>
                                {/* </td>{item.category.replaceAll("_",":")}</td> */}
                                <td className="medCol">{item.login_time}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    </div>
                   

                    <a href="/showUsers">
                        <div className="go-to"> <i className="fa fa-long-arrow-left left-arrow"></i>
                            <p style={{ marginLeft: "15px" }}> Edit User</p></div>
                    </a>

                </div>

            </div>
        )
    }
}
