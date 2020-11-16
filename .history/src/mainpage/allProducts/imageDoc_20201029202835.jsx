import React, { useState } from 'react'
import { DocumentPicker } from 'react-native-document-picker';

export default function imageDoc() {
    const [singleFile, setSingleFile] = useState('');

    const selectOneFile = async () => {
        try {
            const res = await DocumentPicker.pi
        }

    }


    return (
        <div>

        </div>
    )
}
