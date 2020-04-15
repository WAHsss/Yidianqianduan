import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Item, Input, Icon, Form, Button, Row, Left, Right, Text, Picker } from 'native-base';

export default class SignupPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: undefined
    };
    this.onValueChange = this.onValueChange.bind(this);
  }
  onValueChange(value) {
    this.setState({
      step: value
    });
  }
  render(){
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
          <Item>
            <Icon active type='FontAwesome5' name='unlock-alt' />
            <Input placeholder='请确认密码...' />
          </Item>
          <Item picker>
            <Icon active type="FontAwesome5" name='battery-half' style={styles.androidIcon}/>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="选择你的学习阶段"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.step}
              onValueChange={this.onValueChange}
            >
              <Picker.Item label="选择学习阶段" value="null" />
              <Picker.Item label="基础学习" value="基础学习" />
              <Picker.Item label="JS进阶" value="JS进阶" />
              <Picker.Item label="ES6" value="ES6" />
              <Picker.Item label="框架学习" value="框架学习" />
            </Picker>
          </Item>
          <Row style={styles.buttonWrap}>
            <Left style={styles.buttonLeft}>
              <Button
                success
                full
                onPress={() => { props.navigation.replace('SigninPage') }}
              >
                <Text>去登录</Text>
              </Button>
            </Left>
            <Right style={styles.buttonRight}>
              <Button primary full onPress={() => {
                props.navigation.replace('SigninPage')
              }}
              >
                <Text>注册</Text>
              </Button>
            </Right>
          </Row>
        </Form>
      </Content>
    );
  }
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
  },
  androidIcon:{
    paddingLeft:10
  }
})