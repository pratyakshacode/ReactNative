import React, { useEffect, useState } from "react";
import {Button, FlatList, Image, StyleSheet, Text, View, Linking, ActivityIndicator} from 'react-native';

const UseEffectUse = ()=>{
    
    const [array, setArray] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const getUserData = async ()=>{

        try {

            const response = await fetch('https://thapatechnical.github.io/userapi/users.json');
            const data = await response.json()
            // console.log(data);
            setArray(data);
            setIsLoading(false)

        } catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        // console.log('Reload')
        getUserData()
        // console.log(array[0]);
    },[])
    return (
        <>
        <View style={styles.mainContainer}>
        
        {isLoading ? ( <View style={styles.loader} ><ActivityIndicator size={'large'} color={'#0000ff'} /></View>):(<View>

        <Text style={styles.heading}>List Of Students</Text>
            <FlatList showsVerticalScrollIndicator={false} data={array} renderItem={({item})=>{
                return <View style= {styles.outer}>
                <View>
                    <Image 
                    style={styles.imgStyle} source={{uri:item.image}} 
                    resizeMode="cover"
                    />
                </View>    
                <View style={styles.desc}> 
                    <Text>Name : {item.name}</Text>
                    <Text>Email: {item.email}</Text>
                    <Text>Mobile: {item.mobile} </Text>
                    
                </View>
                <View style={styles.button}>
                <Button
                    color={'brown'}
                    onPress={()=>{
                        Linking.openURL(item.website)
                    }}
                    title="Visit Profile"
                    >

                    </Button>
                </View>
                     </View>
            }} />

</View>)}
        </View>
        </>
    )


}

const styles = StyleSheet.create({
   
    imgStyle: {
        height:200,
        width:200,
        margin:4,
        
    },
    outer : {
        flex:1,
        marginTop:30,
        alignItems: 'center',
        borderStyle:'solid',
        borderColor:'black',
        borderWidth:2,
        width:300,
        borderRadius:10,
        backgroundColor:'black'

    },

    desc : {
        borderStyle:'solid',
        // borderColor:'brown',
        // borderTopWidth:1,
        backgroundColor:'wheat',
        width:'100%',
        padding:7,
        borderBottomRadius:10
    },
    button: {
        width:'100%',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,

        
    },
    heading: {
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
        fontSize:30,
    
    },

    loader: {
        minHeight:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default UseEffectUse