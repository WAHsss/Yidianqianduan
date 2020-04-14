import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Container, Content, View, H3 } from 'native-base';
import ToggleCollectionButton from '../components/ToggleCollectionButton';
import Markdown from 'react-native-markdown-display'
export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.route = this.props.route;
    this.navigation = this.props.navigation;
    this.data = this.route.params;
    this.isMarkDown = this.isMarkDown.bind(this);
  }
  componentDidMount() {
    this.navigation.setOptions({
      headerRight: () => (
        <ToggleCollectionButton
          isCollection={this.route.params.isCollection}
          iconStyle={{ color: '#000' }}
          text={false} />
      ),
    });
  }
  isMarkDown() {
    if (this.data.type === '技术博客') {
      return <Markdown>{this.data.content}</Markdown>
    }
    return (
      <>
        <View style={styles.title}>
          <H3>{this.data.title}</H3>
        </View>
        <Text>
          {this.data.content}
        </Text>
      </>
    )

  }
  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          {this.isMarkDown()}
        </Content>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
    paddingLeft: 10
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc'
  },
  content: {
    paddingLeft: 10,
    paddingRight: 5

  }
})