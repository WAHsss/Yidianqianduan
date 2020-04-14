import React, { PureComponent } from 'react';
import ImagePicker from 'react-native-image-picker';
import { View, Content, Thumbnail, Text, Toast ,Form ,Textarea} from 'native-base';
import { ImageBackground} from 'react-native';

import notePageStyle from '../styles/notePageStyle'
import { TouchableOpacity } from 'react-native';

const options = {
  title: '选择照片',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '从本地选择',
  cancelButtonTitle: '取消',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class NotePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: { uri: 'number_1' },
      text:''
    }
    this.handleOnPress = this.handleOnPress.bind(this)
  }
  handleOnPress() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        Toast.show({
          text: '图片选择失败',
          buttonText: '好的'
        })
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  onChangeText(text){
    this.setState({
      text
    })
  }
  render() {
    return (
      <Content>
        <TouchableOpacity onPress={this.handleOnPress}>
          <View style={notePageStyle.viewContent}>
            <ImageBackground
              source={this.state.avatarSource}
              style={notePageStyle.backgroundImg}
            >
              <View style={notePageStyle.wrap}>
                <Thumbnail source={{ uri: 'choose_picture' }} />
                <Text style={notePageStyle.userText}>选择一个图片</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
          <Form>
            <Textarea rowSpan={10} bordered placeholder="在此记录愉快的开发体验吧..." />
          </Form>
      </Content>
    )
  }
}