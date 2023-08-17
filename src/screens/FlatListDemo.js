import React from 'react'
import {FlatList, Text, View, StyleSheet} from 'react-native';

const FlatListDemo = () => {

    const names = [
        {
            key:1,
            name:'Pratyaksha',
            class:'CSE'
        },
        {
            key:2,
            name: "Rohit",
            class:'CSE'
        },
        {
            key:3,
            name:'Kartik',
            class:'CSE'
        },
        {
            key:4,
            name:'Vikas',
            class:"Electronics"
        },
        {
            key:5,
            name:'Daleep',
            class:"Electronics"
        },
        {
            key:6,
            name:'Kumar',
            class:"Electronics"
        },
        {
            key:7,
            name:'Sahu',
            class:'Civil'
        }
    ]
  return (
  <>

  {/* inverted : to invert the serial */}
    <FlatList horizontal  showsHorizontalScrollIndicator={false} keyExtractor={(e)=>{
        return e.key;
        
    }} data = {names} renderItem={(element)=>{
        return <Text style= {styles.text}>{element.item.name}</Text>
    }} />
 
  
  </>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        backgroundColor:'black',
        margin:4,
        height:40,
        padding:10,
    }
})

export default FlatListDemo
