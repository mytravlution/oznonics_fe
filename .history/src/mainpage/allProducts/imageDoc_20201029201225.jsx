import React, { Component } from 'react'
import DocumentPicker from 'react-native-document-picker';

export default class imageDoc extends Component {

documentSelect = async()=>{
    const {input, meta, ...inputProps} =this.props;

    this.setState({isInvisibleModal: false})

    setTimeout(async() =>{
        try{
            const res= await DocumentPickerHandle.
        }
        catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            }
    });
}
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
