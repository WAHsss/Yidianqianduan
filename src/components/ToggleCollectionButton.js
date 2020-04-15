import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';

export default class ToggleCollectionButton extends Component {
  constructor(props) {
    super(props);
    this.state={
      ...this.props
    }
    this.handleOnPress= this.handleOnPress.bind(this)
  }
  handleOnPress(){
    this.setState({
      isCollection : !this.state.isCollection
    })
  }
  render() {
    return (
      <Button transparent textStyle={{ color:'#87838B'}} onPress={this.handleOnPress}>
        {!this.state.isCollection ? 
          <Icon type='FontAwesome5' name='bookmark' style={this.props.iconStyle||{}}/> :
           <Icon type='FontAwesome' name='bookmark' fontSize={27} style={this.props.iconStyle||{}} />}
        {this.props.text && <Text note>收藏</Text>}
      </Button>
    )
  }
}