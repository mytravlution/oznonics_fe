import React, { useState } from 'react'
import { DocumentPicker } from 'react-native-document-picker';

export default function imageDoc() {
    const [singleFile, setSingleFile] = useState('');

    const selectOneFile = async () => {
        try {
           const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        });
         //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
        }

    }


    return (
        <div>

        </div>
    )
}
