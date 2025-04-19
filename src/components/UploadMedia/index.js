import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import { uploadIcon } from '../../constants/icons';

const uploadData =[
    {
        id:1,
        icon:uploadIcon,
    },
    {
        id:2,
        icon:uploadIcon,

    },
    {
        id:3,
        icon:uploadIcon,

    },
    {
        id:4,
        icon:uploadIcon,

    },
    {
        id:5,
        icon:uploadIcon,

    },
    {
        id:6,
        icon:uploadIcon,

    },
]
const UploadMedia = ({mediaText}) => {
  return (
    <View style={styles.container}>
{uploadData.map((item) => (
<View style={styles.mediaBox}>
    <View key={item.id} style={styles.mediaText}>
        <Image source={item.icon} />
        <Text style={styles.mediaText}>{mediaText}</Text> 
</View>
    </View>
))}

</View>
  )
}

export default UploadMedia;

const styles = StyleSheet.create({

    container: {
        width:"100%",
        // height:600,
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"center",
        gap:6
    },
    mediaBox: {
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        width:"48%",
        height:130,
        backgroundColor:Colors.placeholder,
        borderRadius:15
    },
    mediaText: {
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        fontSize:10,
    }
})