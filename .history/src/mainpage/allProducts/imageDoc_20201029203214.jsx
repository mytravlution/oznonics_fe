import React, { useState } from 'react'
import { DocumentPicker } from 'react-native-document-picker';

const imageDoc = () => {
    const [singleFile, setSingleFile] = useState('');

    const selectOneFile = async () => {
        try {
           const res = await DocumentPicker.p.pick({
               type: [DocumentPicker.types.allTyples]
           })
        }

    }


    return (
        <div>

        </div>
    )
}
