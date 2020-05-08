import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './views/Home';
import NewDate from './views/NewDate';
import DetailsDate from './views/DetailsDates';
import MenuTop from './components/ui/MenuTop';

import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper'; 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#b3e5fc',
    accent: '#0655BF'
  }
}


export default function App() {
  return (
  <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle:{
            backgroundColor: theme.colors.primary
          },
          headerTintColor: theme.colors.accent,
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={ ({navigation, route}) => ({
            headerTitleAlign: 'center',
            // headerLeft: (props) => <MenuTop {...props} 
            //                       navigation={navigation}
            //                       route={route}
            //                 />
          })}
        />
         <Stack.Screen
          name="NewDate"
          component={NewDate}
          options={{
            title: "NewDate"
          }}
        />  
         <Stack.Screen
          name="DetailsDate"
          component={DetailsDate}
        />    
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
