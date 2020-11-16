import React, { Component } from 'react'
import DocumentPicker from 'react-native-document-picker';

export default class imageDoc extends Component {

documentSelect = async()=>{
    const {input, meta, ...inputProps} =this.props;

    this.setState({isInvisibleModal: false})

    setTimeout(async() =>{
        try{
            const res= await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            })
            console.log(
                res.uri,
                res.type, // mime type
                res.name,
                res.size
              );
              const filename =res.uri.repl
        }
        catch(Exce)
    });
}
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
