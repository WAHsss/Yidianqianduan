import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Item, Input, Icon, Form, Button, Row, Left, Right, Text } from 'native-base';

function SigninPage(props) {
  return (
    <Content padder>
      <Form>
        <Item>
          <Icon active type='FontAwesome5' name='user-alt' />
          <Input placeholder='请输入用户名...' />
        </Item>
        {/* // Text input box with icon aligned to the right */}
        <Item>
          <Icon active type='FontAwesome5' name='unlock-alt' />
          <Input placeholder='请输入密码...' />
        </Item>
        <Row style={styles.buttonWrap}>
          <Left style={styles.buttonLeft}>
            <Button 
              warning 
              full
              onPress={()=>{props.navigation.replace('SignupPage')}}
            >
              <Text>注册</Text>
            </Button>
          </Left>
          <Right style={styles.buttonRight}>
            <Button primary full onPress={()=>{props.navigation.popToTop()}}>
              <Text>登录</Text>
            </Button>
          </Right>
        </Row>
      </Form>
    </Content>
  );
}
const styles = StyleSheet.create({
  buttonWrap: {
    marginTop: 20
  },
  buttonLeft: {
    marginRight: 5
  },
  buttonRight: {
    marginLeft: 5
  }
})
export default SigninPage;