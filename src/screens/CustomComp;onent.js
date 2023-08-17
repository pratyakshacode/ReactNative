import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomComponent = ()=>{

    return (
<>
        <Text style={styles.heading}>Hello React Native!</Text>
        <Text>Hello Ram Bhaiya</Text>
        </>
    )
}

const styles = StyleSheet.create({
    heading:  {
        color: 'red'
    }
})
export default CustomComponent;