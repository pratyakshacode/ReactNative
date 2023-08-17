import React from "react";
import { Button, Text } from 'react-native'


const Homepage = ({route, navigation}) => {

    const name = route.params.name
    // we can also dereference it by using the const {name} = route.params. The 'name' in the parameter will come here
    return (
<>
        <Text>Welcome {name} </Text>
        <Button title='Go Back' onPress={()=> navigation.goBack()}/>

        </>
    )

}

export default Homepage