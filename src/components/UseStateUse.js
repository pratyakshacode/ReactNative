import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const UseStateUse = ()=>{

    const [count, setCount] = useState(0)
    return (
        <>
        <Text>{count}</Text>
        <View>

            <Button 
                onPress={()=>{
                    setCount(count + 1)
                }}

                title='Increase'
            />

            <Button
                color={'red'}
                onPress = {()=>{
                    setCount(count - 1)
                }}

                title= 'Decrease'
            />
            <Button
                color={'green'}
                onPress = {()=>{
                    setCount(0)
                }}

                title= 'Reset'
            />
        </View>
        </>
    )


}

export default UseStateUse