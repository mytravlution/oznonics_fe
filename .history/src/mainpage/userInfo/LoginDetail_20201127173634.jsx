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
                    Hey there
                    </div>
                
            </div>
        )
    }
}
