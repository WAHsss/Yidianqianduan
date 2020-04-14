import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
const HomeStack = createStackNavigator();
function Home(props) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomePage}
        options={{
          title: "每日推送",
          headerTitleAlign: 'center'
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailPage}
        options={({ route }) => ({ title: route.params.type })}
      />
    </HomeStack.Navigator>
  );
}
export default Home;