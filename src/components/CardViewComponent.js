import React, { PureComponent } from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body, H3 } from 'native-base';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import ToggleCollectionButton from './ToggleCollectionButton';

class CardViewComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.item
    }
  }
  handleOnPress(type) {
    //如果用户没有登录的话点赞无法点赞，登录后点赞和取消点赞,收藏和取消收藏的业务
    if (!this.state.isLogin) {
      //用来判断点赞和收藏的函数
      if (type === 'praise') {
        //点赞数量随之改变数据的改变
        if (!this.state.isPraise) {
          this.setState({
            praise: this.state.praise + 1,
            isPraise: !this.state.isPraise
          })
        } else {
          this.setState({
            praise: this.state.praise - 1,
            isPraise: !this.state.isPraise
          })
        }

      } else {
        this.setState({
          isCollection: !this.state.isCollection
        })
      }
    }
  }
  chooseImg=()=>{
    switch (this.state.type) {
      case '前端面试题':  return 'question';
      case '技术文章' : return 'article';
      case '问答' : return 'qa';
      case '开发技巧' : return 'skill';
    }

  }
  render() {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#00000"
        onPress={() => this.props.navigation.navigate('DetailPage', {
          ...this.state
        })}
      >
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: this.chooseImg() }} />
              <Body>
                <Text>{this.state.type}</Text>
              </Body>
            </Left>
            <Right>
              <Icon type="FontAwesome5" name='angle-right' style={{ fontSize: 20, color: 'gray' }} />
            </Right>
          </CardItem>
          <View style={styles.separator} />
          <CardItem>
            <Body>
              <H3 style={styles.title}>
                {this.state.title}
              </H3>
              <View style={styles.separator} />
              <Text numberOfLines={5} style={styles.content}>
                {this.state.content}
              </Text>
            </Body>
          </CardItem>
          <View style={styles.separator} />
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }} onPress={() => this.handleOnPress('praise')}>
                {this.state.isPraise ? <Icon type='AntDesign' name='heart' style={{color:'tomato'}}/> : <Icon type='FontAwesome5' name='heart' style={{color:'gray'}} />}
                <Text note>{this.state.praise} 赞</Text>
              </Button>
            </Left>
            <Right>
              <ToggleCollectionButton
                isCollection={this.state.isCollection}
                text={true}
                iconStyle={{color:'gray'}}
              />
            </Right>
          </CardItem>
        </Card>
      </TouchableHighlight>
    )
  }
}
const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc'
  },
  content: {
    paddingTop: 10
  },
  title: {
    paddingBottom: 10
  }
})
export default CardViewComponent
