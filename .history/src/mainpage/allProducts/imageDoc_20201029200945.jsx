import React, { Component } from 'react'
import DocumentPicker from 'react-native-document-picker';

export default class imageDoc extends Component {

documentSelect = async()=>{
    const {input, meta, ...inputProps} =this.props;

    this.setState({isInvisibleModal: false})

    
}
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
