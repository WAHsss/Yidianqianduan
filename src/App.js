import React from 'react';
import { Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import icons from "./assets/Icons";
import tabStyle from './styles/tabStyle';

import Home from "./navigatiors/Home";
import FindLayout from "./pages/FindLayout";
import Profile from './pages/Profile';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  changeSelectedTab(tabName){
    this.setState({
      selectedTab: tabName
    })
  }
  render() {
    return (
      <TabNavigator
        tabBarStyle={{marginTop:20}}
      >
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          titleStyle={tabStyle.titleStyle}
          renderIcon={() => <Image source={{uri:icons.home}} style={tabStyle.iconStyle}/>}
          renderSelectedIcon={() => <Image source={{uri:icons.homeFill}} style={tabStyle.iconStyle}/>}
          onPress={() => this.changeSelectedTab('home')}
        >
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'find'}
          title="高赞"
          titleStyle={tabStyle.titleStyle}
          renderIcon={() => <Image source={{uri:icons.find}} style={tabStyle.iconStyle}/>}
          renderSelectedIcon={() => <Image source={{uri:icons.findFill}} style={tabStyle.iconStyle}/>}
          selected={this.state.selectedTab === 'find'}
          onPress={() => this.changeSelectedTab('find')}
        >
          <FindLayout/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="个人"
          titleStyle={tabStyle.titleStyle}
          renderIcon={() => <Image source={{uri:icons.profile}} style={tabStyle.iconStyle}/>}
          renderSelectedIcon={() => <Image source={{uri:icons.profileFill}} style={tabStyle.iconStyle}/>}
          selected={this.state.selectedTab === 'profile'}
          onPress={() => this.changeSelectedTab('profile')}
        >
          <Profile/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
