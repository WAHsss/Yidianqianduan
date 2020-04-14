import React from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
let data = [
  {
    header: "面试题",
    title: '问题一',
    introduction:'我是谁你是谁，在哪吗的发的开发加咖啡',
    praise: 123
  },
  {
    header: "面试题",
    title: '问题二',
    introduction:'我是谁你是谁，在哪吗的发的开发加咖啡',
    praise: 123
  },
  {
    header: '面试题',
    title: '问题三',
    introduction:'我是谁你是谁，在哪吗的发的开发加咖啡',
    praise: 123
  },
  {
    header: '面试题',
    title: '问题四',
    introduction:'我是谁你是谁，在哪吗的发的开发加咖啡',
    praise: 123
  },
  {
    header: '面试题',
    title: '问题四',
    introduction:'我是谁你是谁，在哪吗的发的开发加咖啡',
    praise: 123
  },
  {
    header: '面试题',
    title: '问题四',
    introduction:'我是谁你是谁，在哪吗的发的开发加咖啡',
    praise: 123
  },
  {
    header: '面试题',
    title: '问题四',
    introduction:'我是谁你是谁，在哪吗的发的开发加咖啡',
    praise: 123
  },
  {
    header: '面试题',
    title: '问题四',
    introduction:'我是谁你是谁，在哪吗的发的开发加咖啡',
    praise: 123
  },
  {
    header: '面试题',
    title: '问题四',
    introduction:'我是谁你是谁，在哪吗的发的开发加咖啡',
    praise: 123
  }
]
function RankingList(props) {
  return (
    <Container>
      <Content>
        <List>
          {
            data.map((item, index) => {
              return (
                <ListItem thumbnail key={item + index}>
                  <Left>
                    <Thumbnail source={{ uri: `number_${index+1}` }} />
                  </Left>
                  <Body>
                    <Text>{item.title}</Text>
                    <Text note numberOfLines={1}>{item.introduction}</Text>
                  </Body>
                  <Right>
                    <Text note>{item.praise + 1}</Text>
                    <Text note>点赞</Text>
                  </Right>
                </ListItem>
              )
            })
          }
        </List>
      </Content>
    </Container>
  )
}
export default RankingList;