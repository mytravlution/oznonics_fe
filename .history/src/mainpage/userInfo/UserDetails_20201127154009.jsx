import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'

export default class UserDetails extends Component {
    render() {
        return (
            <div className="bg-color">
                  <Header />
                  <div >
            <MidHeader />
            Hello we start here
            </div>
           
            </div>
        )
    }
}
