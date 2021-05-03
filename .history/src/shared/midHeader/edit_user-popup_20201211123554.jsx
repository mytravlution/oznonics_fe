import React, { Component } from 'react'

export default class EditUserPopup extends Component {

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
    }
    render() {
        return (
            <div>
                {this.props.username}
                {this.props.phone_num}
                {this.props.password}

                <div className="popup">
                <div className="popup-inner">
                    <div className="popup-header">
                        <img className="popup-img" src={require("../../images/add_user.png")} alt="Add user" />
                        <p> Edit User</p>
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
                        <input type="number"
                            onChange={evt => this.updatePhone(evt)}
                            value={this.state.phone_num} />

                        <label htmlFor="segment">Segment to be handled</label>

                        <select id="segment" onChange={evt => this.updateSegment(evt)}
                            value={this.state.segment}>
                            <option value="All">All</option>
                            <option value="HR230">HR230 </option>
                            <option value="HR300">HR300</option>
                            <option value="HR400/Orion">HR400/Orion</option>
                            <option value="Orion2">Orion2 </option>
                            <option value="Pulse">Pulse</option>
                        </select>

                        {/* for category */}

                        <label htmlFor="segment">Category</label>
                        <select id="category" onChange={evt => this.updateCategory(evt)}
                            value={this.state.selected_category}>

                            <option value="All">All</option>
                            {this.state.category.map((cat, index) => {
                                return (<option value={cat}>{cat}</option>)
                            })}
             
                        </select>

                         {/* //for SubCategory */}
                         <label htmlFor="segment">Sub-Category</label>

                         <select id="sub_category" onChange={evt => this.updateSubCategory(evt)}
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
            </div>
        )
    }
}
