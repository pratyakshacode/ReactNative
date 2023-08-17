import React from "react";
import {Text, Image, StyleSheet, View, Button, Linking} from 'react-native';


const NetflixCard = ()=>{

    return (
    
    <View style={styles.outerStyle}>
        <View >
            <Image style={styles.imgStyle} source={require('../../assets/wednesday.jpg')}/>
            {/* if we want to give the url dynamic or page url then we have to use (uri: 'url') in place of require*/}
        </View>
        <View >
            <Button
            title='Watch Now'
            color={'rgb(140,20, 160)'}
            onPress={()=>{
                Linking.openURL('https://www.imdb.com/title/tt13443470/')
            }}
            

            ></Button>
        </View>
    </View>
    )


}

const styles = StyleSheet.create({
    imgStyle: {
        width:200,
        height:300,
        margin:10,
        aspectRatio:0.8
    },

    // letterSpacing: for maintaining the space between the letters
    outerStyle: {

        borderStyle: 'solid',
        borderColor:'black',
        borderWidth: 2,
        padding: 10,
        borderRadius:10,
        // paddingLeft, paddingRight, etc... 
        // paddingVertical: we will get padding at top and bottom
        // .paddingHorizontal: ,, ,, ,,   left and right
        // marginHorizontal: for left and right
        // marginVertical: for bottom and top
    },
    
})

export default NetflixCard