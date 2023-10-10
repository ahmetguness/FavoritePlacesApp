import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';




export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});


