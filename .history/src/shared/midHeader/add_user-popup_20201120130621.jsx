import { post, baseUrl } from "../http-service";
import React, { Component } from 'react'


export default class popup extends Component {
    // const onAddButton = async() => {
    //     const username = document.getElementById("username");
    //     const password = document.getElementById("password");
    //     const phone_num = document.getElementById("phone_num");
    //     const segment = document.getElementById("segment");
    //     console.log(username);

    //     const response = await post(baseUrl+"/addUser",{
    //         username,
    //         password,
    //         phone_num,
    //         segment
    //     });
    //     console.log(response);  
    // }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            phone_num: '',
            segment: '',
            category: ['Mechanical','Electronics', 'Electrical', 'Testing', 'Product Accessories & Peripherals'],
            selected_category: '',
            sub_category:[],
            selected_sub_category:''
        };
    }
    updateUsername(evt) {
        this.setState({
            username: evt.target.value
        })
    }

    updatePassword(evt) {
        this.setState({
            password: evt.target.value
        })
    }
    updatePhone(evt) {
        this.setState({
            phone_num: evt.target.value
        })
    }
    updateSegment(evt) {
        this.setState({
            segment: evt.target.value
        })
        // if ((evt.target.value === 'HR300')) {
        //     this.setState({
        //         category: ['Mechanical', 'Electronics']
        //     })
        // } else {
        //     this.setState({
        //         category: ['a', 'b']
        //     })
        // }
    }
    updateCategory(evt){
        this.setState({
            category :evt.target.value
        })

        if(evt.target.value === 'Mechanical'){
            this.setState({
                sub_category :['Product Drawings', 'Packaging', 'Product Assembly', 'Inline Changes', 'Costing', 'BOM']
            })
        }else if(evt.target.value === 'Electronics'){
            this.setState({
                sub_category :['Gerber Files', 'Schematics', 'Firmware Source Code & HEX Files', 'Inline Changes', 'Costing', 'BOM']
            })
        }else if(evt.target.value === 'Electrical'){
            this.setState({
                sub_category :['In-house Designs', 'Externally sourced', 'Firmware Source Code & HEX Files', 'Inline Changes', 'Costing', 'BOM']
            })
        }else if(evt.target.value === 'Testing'){
            this.setState({
                sub_category :['Gerber Files', 'Schematics', 'Firmware Source Code & HEX Files', 'Inline Changes', 'Costing', 'BOM']
            })
        }else if(evt.target.value === 'Product Accessories & Peripherals'){
            this.setState({
                sub_category :['Gerber Files', 'Schematics', 'Firmware Source Code & HEX Files', 'Inline Changes', 'Costing', 'BOM']
            })
        }
    }
    onClearButton = () => {
        this.setState({
            username: '',
            password: '',
            phone_num: '',
            segment: ''
        })


    }
    onAddButton = async () => {
        console.log(this.state.username);

        const response = await post(baseUrl + "addUser/", {
            username: this.state.username,
            password: this.state.password,
            phone_num: this.state.phone_num,
            segment: this.state.segment
        });
        if (response.status === 1) {
            alert("successfully added");
        } else if (response.status === 0) {
            alert("Something got failed");
        } else if (response.status === 2) {
            alert("User already exists")
        }

    }
    render() {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <div className="popup-header">
                        <img className="popup-img" src={require("../../images/add_user.png")} alt="Add user" />
                        <p> Add User</p>
                        <span onClick={this.props.closePopup}>&times;</span>
                    </div>
                    <div className="add-user-form">
                        <label htmlFor="username">Username</label>
                        <input type="text"
                            onChange={evt => this.updateUsername(evt)}
                            value={this.state.username} />

                        <label htmlFor="password">Password</label>
                        <input type="password"
                            onChange={evt => this.updatePassword(evt)}
                            value={this.state.password} />

                        <label htmlFor="phone_num">Phone Number</label>
                        <input type="text"
                            onChange={evt => this.updatePhone(evt)}
                            value={this.state.phone_num} />

                        <label htmlFor="segment">Segment to be handled</label>

                        <select id="segment" onChange={evt => this.updateSegment(evt)}
                            value={this.state.segment}>
                            <option value="All">All</option>
                            <option value="HR230">HR230 </option>
                            <option value="HR300">HR300</option>
                            <option value="Orion">Orion</option>
                            <option value="Orion2">Orion2 </option>
                            <option value="Pulse">Pulse</option>
                        </select>

                        {/* for category */}

                        <label htmlFor="segment">Category</label>
                        <select id="category" onChange={evt => this.updateSegment(evt)}
                            value={this.state.selected_category}>

                            <option value="All">All</option>
                            {this.state.category.map((cat, index) => {
                                return (<option value={cat}>{cat}</option>)
                            })}
             
                        </select>

                         {/* //for SubCategory */}
                         <label htmlFor="segment">Sub-Category</label>

                         <select id="sub_category" onChange={evt => this.updateSegment(evt)}
                            value={this.state.selected_sub_category}>

                            <option value="All">All</option>
                            {this.state.sub_category.map((cat, index) => {
                                return (<option value={cat}>{cat}</option>)
                            })}
             
                        </select>


                    </div>

                    <div className="popup-button">
                        <button className="clear-button" onClick={this.onClearButton.bind(this)}>Clear</button>
                        <button className="add-button" onClick={this.onAddButton.bind(this)}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}
