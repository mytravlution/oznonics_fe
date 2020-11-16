import React, { useState } from 'react'
import { DocumentPicker } from 'react-native-document-picker';
import { SafeAreaView, Text, View, Touchable} from 'react-native';
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
      setSingleFile(re);
        }
        catch (err) {
            //Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
              //If user canceled the document selection
              alert('Canceled from single doc picker');
            } else {
              //For Unknown Error
              alert('Unknown Error: ' + JSON.stringify(err));
              throw err;
            }
          }

    };
    return (
        <div>

        </div>
    )
}
