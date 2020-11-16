import React, { useState } from 'react'
import { DocumentPicker } from 'react-native-document-picker';
import { SafeAreaView, Text,StyleSheet, View, TouchableOpacity, ScrollView, Image} from 'react-native';
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
       <SafeAreaView style={{flex: 1}}>
           <Text style={styles.titleText}>
           Example of File Picker in React Native
           </Text>
           <View style={styles.container}>
               <TouchableOpacity  activeOpacity={0.5}
          style={styles.buttonStyle} onPress={selectOneFile}>
            
                   
               </TouchableOpacity>

           </View>

       </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    titleText: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 20,
    },
    textStyle: {
      backgroundColor: '#fff',
      fontSize: 15,
      marginTop: 16,
      color: 'black',
    },
    buttonStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#DDDDDD',
      padding: 5,
    },
    imageIconStyle: {
      height: 20,
      width: 20,
      resizeMode: 'stretch',
    },
  });