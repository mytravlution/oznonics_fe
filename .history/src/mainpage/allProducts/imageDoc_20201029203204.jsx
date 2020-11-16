import React, { useState } from 'react'
import { DocumentPicker } from 'react-native-document-picker';

const App = () => {
    const [singleFile, setSingleFile] = useState('');

    const selectOneFile = async () => {
        try {
           const res = await DocumentPicker.pick({
               type: [DocumentPicker.types.allTyples]
           })
        }

    }


    return (
        <div>

        </div>
    )
}
