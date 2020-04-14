import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
const Stack = createStackNavigator();
function Home(props){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomePage} 
            options={{
              title:"每日推送",
              headerTitleAlign:'center'
            }}
          />
          <Stack.Screen 
            name="Detail" 
            component={DetailPage} 
            options={({ route }) => ({ title: route.params.type })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default Home;