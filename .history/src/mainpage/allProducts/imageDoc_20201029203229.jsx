import React, { useState } from 'react'
import { DocumentPicker } from 'react-native-document-picker';

const imageDoc = () => {
    const [singleFile, setSingleFile] = useState('');

    const selectOneFile = async () => {
        try {
           const res = await DocumentPicker.pick({
               type: [DocumentPicker.]
           })
        }

    }


    return (
        <div>

        </div>
    )
}
