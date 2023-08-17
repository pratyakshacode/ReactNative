import React from "react";
import { View, Text, Image , StyleSheet, Button, Alert} from "react-native";
// import myImage from './myimage.jpg';

const MyButton = ()=>{

    return (
        <>
            <Button title="Pratyaksha" 
                // color={'blue'}
                onPress={()=>{
                    // console.log('this')
                    Alert.alert('Pratyaksha Verma')
                }}
                
                // disabled
            />
        </>
    )

}

const styles = StyleSheet.create({
    
})

export default MyButton