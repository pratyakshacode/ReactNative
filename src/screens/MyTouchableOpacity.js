import React from "react";
import {Alert, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
// touchable opacity is used to do the complex works for example if we want to add the image to the button 
const MyTouchableOpacity = ()=>{

    return (
<>
{/* Touchable Opacity */}

        <TouchableOpacity

            style = {styles.button}
            onPress={()=>{
                Alert.alert('This is the touchable opacity')
            }}

            onLongPress={()=>{
                Alert.alert('You have pressed it for long')
            }}

        > 

        
        <Image style={styles.imgStyle} source={require('C:/Users/Pratyaksha Verma/OneDrive/Desktop/ReactNativeApp/AwesomeProject/assets/button.jpg')} />
        </TouchableOpacity>
</>
    )

}

const styles = StyleSheet.create({
    imgStyle: {
        width:200,
        height:50,
        borderRadius:10
    }
})

export default MyTouchableOpacity