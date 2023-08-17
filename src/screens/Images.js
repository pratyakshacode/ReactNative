import React from "react";
import { View, Text, Image , StyleSheet} from "react-native";
// import myImage from './myimage.jpg';

const Images = ()=>{

    return (
        <>
            {/* <Text> This is Image File</Text> */}
            <Image style={styles.image} source={require('C:/Users/Pratyaksha Verma/OneDrive/Desktop/ReactNativeApp/AwesomeProject/assets/myimage.jpg')}/>
            
        </>
    )

}

const styles = StyleSheet.create({
    image : {
        height:200,
        width: 200,
        borderRadius:10,
        margin:10
    }
})

export default Images