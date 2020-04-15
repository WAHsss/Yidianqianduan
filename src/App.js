import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base'

import Home from "./navigators/Home";
import PraisePage from "./pages/PraisePage";
import Profile from './navigators/Profile';

const Tab = createBottomTabNavigator();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  changeSelectedTab(tabName) {
    this.setState({
      selectedTab: tabName
    })
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = '';
              if (route.name === 'Home') {
                iconName = 'home'
              } else if (route.name === 'PraisePage') {
                iconName ='fire'
              } else if (route.name === 'Profile') {
                iconName = 'user-tie'
              }
              return <Icon type="FontAwesome5" name={iconName} style={{fontSize: size , color : color}} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            animationEnabled: true,
            //是否懒加载
            lazy: true
          }}
        >
          <Tab.Screen name="Home" component={Home} options={{title:'首页'}}/>
          <Tab.Screen name="PraisePage" component={PraisePage} options={{title:'高赞'}}/>
          <Tab.Screen name="Profile" component={Profile} options={{title:'个人'}}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}