import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'native-base';
import ProfilePage from '../pages/ProfilePage';
import DetailPage from '../pages/DetailPage';
import CardListPage from '../pages/CardListPage';
import NotePage from '../pages/NotePage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
const ProfileStack = createStackNavigator();
function Profile(props) {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          title: '个人信息',
          headerTitleAlign: 'center',
        }}
      />
      <ProfileStack.Screen
        name="CardListPage"
        component={CardListPage}
        options={({ route }) => ({ title: route.params.title + '收藏' })}
      />
      <ProfileStack.Screen
        name="NotePage"
        component={NotePage}
        options={({ route }) => ({
          title: route.params.title + '编辑',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert('This is a button!')}
              style={{ marginRight: 20 }}
            >
              <Text>完成</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <ProfileStack.Screen
        name="HomePage"
        component={DetailPage}
        options={({ route }) => ({ title: route.params.type })}
      />
      <ProfileStack.Screen
        name="SigninPage"
        component={SigninPage}
        options={({ route }) => ({ title: '登录' })}
      />
      <ProfileStack.Screen
        name="SignupPage"
        component={SignupPage}
        options={({ route }) => ({ title: '注册' })}
      />
    </ProfileStack.Navigator>
  );
}
export default Profile;