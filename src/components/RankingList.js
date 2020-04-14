import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
function RankingList(props){
  return (
    <Container>
        <Content>
        <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'number_1' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
  )
}
export default RankingList;