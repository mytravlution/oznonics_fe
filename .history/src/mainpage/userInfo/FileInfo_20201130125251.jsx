import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'
import './user.scss'



export default class FileInfo extends Component {
    render() {
        return (
            <div className="bg-color">
                  <Header />
                <div className="products-outer">
                <MidHeader />
                    <h2><span>File Details</span></h2>


                    <div className="table-box">
                        <div className="table-row table-header">
                           
                            <div className="table-cell">
                                <p>Username</p>
                            </div>
                            <div className="table-cell">
                                <p>File Name</p>
                            </div>
                            <div className="table-cell">
                                <p>Category</p>
                            </div>
                            <div className="table-cell">
                                <p>Date</p>
                            </div>
                            <div className="table-cell">
                                <p>Date</p>
                            </div>
                        </div>
            </div>
                </div>
                
            </div>
        )
    }
}
