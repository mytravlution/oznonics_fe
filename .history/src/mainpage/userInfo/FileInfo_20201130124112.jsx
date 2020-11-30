import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'

export default class FileInfo extends Component {
    render() {
        return (
            <div className="bg-color">
                  <Header />
                <div className="products-outer">
                <MidHeader />
                    <h2><span>Login Details</span></h2>

                </div>
                
            </div>
        )
    }
}
