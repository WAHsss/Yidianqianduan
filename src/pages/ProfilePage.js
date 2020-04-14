import React from 'react';
import { Container, View, Thumbnail, Card, CardItem, Body, Text, Icon, Row } from 'native-base';
import { ImageBackground, TouchableOpacity } from 'react-native';
import profileStyle from '../styles/profileStyle';

const uriImg = {
  defaultBackground: 'http://upload.art.ifeng.com/2015/0831/1441012148845.jpg?imageView2/2/w/640',
  noteImg: 'http://pic.51yuansu.com/pic3/cover/03/82/51/5c0b1a7bd05b1_610.jpg'
}
const config = [
  {
    title: '面试题',
    icon: 'torah'
  },
  {
    title: '技术文章',
    icon: 'book'
  },
  {
    title: '精彩问答',
    icon: 'key'
  },
  {
    title: '开发技巧',
    icon: 'tools'
  }, {
    title: '小记',
    icon: 'pencil-alt'
  }
]
export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddNoteOnPress = this.handleAddNoteOnPress.bind(this);
    this.navigation = this.props.navigation;
  }
  handleCollectionOnPress(item) {
    this.navigation.navigate('CardList', {
      ...item
    })
  }
  handleAddNoteOnPress() {
    this.navigation.navigate('NoteEditor',{
      title:'小记'
    })
  }
  render() {
    return (
      <Container>
        <View style={profileStyle.viewContent}>
          <ImageBackground
            source={{ uri: uriImg.defaultBackground }}
            style={profileStyle.backgroundImg}
          >
            {/**用户的头像和用户名 */}
            <View style={profileStyle.userInfo}>
              <Thumbnail style={profileStyle.headImg} source={{ uri: 'default_head_img' }} />
              <Text style={profileStyle.userText}>username</Text>
            </View>
            {/**添加小记的按钮 */}
            <Card>
              <CardItem cardBody style={profileStyle.imgWrap} button onPress={this.handleAddNoteOnPress}>
                <Body style={profileStyle.imgWrap}>
                  <ImageBackground
                    source={{ uri: uriImg.noteImg }}
                    style={profileStyle.imgWrap}
                  >
                    <Row style={profileStyle.rowStyle}>
                      <Icon name="pencil-alt" type='FontAwesome5' style={profileStyle.iconStyle} />
                      <Text style={profileStyle.rowText}>制作小记</Text>
                    </Row>
                  </ImageBackground>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text note>记录你学习的一天...</Text>
              </CardItem>
            </Card>
          </ImageBackground>
        </View>
        <Card>
          <CardItem style={profileStyle.cardHeader}>
            <Text>我的收藏</Text>
          </CardItem>
          <CardItem cardBody style={profileStyle.cardBody}>
            {
              config.map((item, index) => {
                return (
                  <Row key={item + index}>
                    <TouchableOpacity onPress={() => this.handleCollectionOnPress(item)}>
                      <View style={profileStyle.collotionList}>
                        <Icon type='FontAwesome5' name={item.icon} />
                        <Text>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </Row>
                )
              })
            }
          </CardItem>
        </Card>
      </Container >
    );
  }

}
