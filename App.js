import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomComponent from './src/screens/CustomComp;onent';
import FlatListDemo from './src/screens/FlatListDemo';
import Images from './src/screens/Images';
import MyButton from './src/screens/MyButton';
import MyTouchableOpacity from './src/screens/MyTouchableOpacity';
import NetflixCard from './src/components/NetflixCard';
import UseStateUse from './src/components/UseStateUse';
import UseEffectUse from './src/components/UseEffectUse';
import ContactUs from './src/components/ContactUs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/components/Homepage';
export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >

      <Stack.Navigator initialRouteName='Login'>

        <Stack.Screen name='Login' component={ContactUs}/>
        <Stack.Screen name='Homepage' component={Homepage}/>
      </Stack.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container : {
    flex:1,
    height:'100%',
    // justifyContent:'center', 
    alignItems:'center'
  }

  
});
