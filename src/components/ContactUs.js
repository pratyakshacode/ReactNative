import React, { useState } from 'react'
import { Text, View, StyleSheet,TextInput } from 'react-native'
import CheckBox from 'expo-checkbox';
import { TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';

const ContactUs = ({navigation}) => {
// react provides the bydefault props navigation while using navigation stack
    const [agree, setAgree] = useState(false);
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    // console.log(name, password)

    const submit = ()=>{

        if(name === 'Pratyaksha' && password == "1234") {
            navigation.navigate('Homepage', {name: `${name}`})
            Alert.alert(`Thanks for visiting. 
Welcome ${name}`)}
        else Alert.alert('Incorrect UserName and Password')

    }
  return (
    <>
      <View style={StyleSheet.mainContainer}>

        <Text style={styles.mainHeader}>Login Form</Text>
        <Text style={styles.description}>You can reach us anytime via pratyaksha@me.com</Text>

    <View style= {styles.inputContainer}>

        <Text style={styles.labels}>Enter Your Name</Text>
    <TextInput style={styles.input} 
    // autoCapitalize='none',
    // autoCorrect = {false}
    value={name}
    onChangeText={(e)=>{ 
        setName(e)
    }}

    />

<Text style={styles.labels}>Enter Your Password</Text>
    <TextInput style={styles.input} 
    // autoCapitalize='none',
    // autoCorrect = {false}
    secureTextEntry= {true}
    value={password}
    onChangeText={(e)=>{ setPassword(e)
    }}

    />
    </View>

    <View style={{margin: 10}}>
        <CheckBox  
        value={agree}
        color={agree ? '#4630EB' : 'gray'}
        onValueChange={()=>{
            setAgree(!agree);

        }}
        /><Text style= {styles.description}> I have read and agreed with the TC</Text>
    </View>

    <TouchableOpacity
        disabled = {!agree}
        style = {
            {
                backgroundColor: agree ? '#4630EB' : 'gray',
                alignItems: 'center',
                padding: 15,
                
            }
        }
        onPress={()=> submit()}
    ><Text style= {{color: 'white'}}>Login</Text></TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    mainContainer: {

        height: '100%',
        paddingHorizontal:30,
        paddingTop:30,
        backgroundColor: '#fff'
    },
    inputContainer : {
        margin:10
    },

    mainHeader: {
        fontSize: 25, 
        color: '#344055',
        fontWeight:'500',
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: 'capitalize',
        margin:10
        
    },
    description : {
        color:'gray'
    },
    input: {
        height:40,
        borderWidth:1,
        borderColor:'black',
        borderStyle:'solid',
        marginTop:10,
        width:'100%',
        padding: 5
    }
})

export default ContactUs
