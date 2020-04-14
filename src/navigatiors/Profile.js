import React from 'react';
import {TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text} from 'native-base';
import ProfilePage from '../pages/ProfilePage';
import DetailPage from '../pages/DetailPage';
import CardListPage from '../pages/CardListPage';
import NotePage from '../pages/NotePage';
const ProfileStack = createStackNavigator();
function Profile(props) {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          title: '个人信息',
          headerTitleAlign: 'center'
        }}
      />
      <ProfileStack.Screen
        name="CardList"
        component={CardListPage}
        options={({ route }) => ({ title: route.params.title + '收藏' })}
      />
      <ProfileStack.Screen
        name="NoteEditor"
        component={NotePage}
        options={({ route }) => ({
          title: route.params.title + '编辑',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert('This is a button!')}
              style={{marginRight:20}}
            >
              <Text>完成</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <ProfileStack.Screen
        name="Detail"
        component={DetailPage}
        options={({ route }) => ({ title: route.params.type })}
      />
    </ProfileStack.Navigator>
  );
}
export default Profile;