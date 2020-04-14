import React from 'react';
import {StyleSheet} from 'react-native';
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import RankingList from '../components/RankingList';
let data = [
  {
    header: "面试题",
    title: '面试题',
    praise: 123
  },
  {
    header: "技术文章",
    title: '技术文章',
    praise: 123
  },
  {
    header: '问答',
    title: '技术文章',
    praise: 123
  },
  {
    header: '开发技巧',
    title: '技术文章',
    praise: 123
  }
]
export default class FindLayout extends React.Component {

  render() {
    return (
      <Container>
        <Tabs tabBarUnderlineStyle={styles.underLineStyle}>
          {data.map((item, index) => {
            return (
              <Tab 
                heading={item.header} 
                key={item + index}
                tabStyle={styles.tabStyle}
                textStyle={styles.textStyle}
                activeTabStyle={styles.activeTabStyle}
                activeTextStyle={styles.activeTextStyle}
                >
                <RankingList data={item} />
              </Tab>
            )
          })}
        </Tabs>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  underLineStyle:{
    backgroundColor:'#eeee'
  },
  tabStyle:{
    backgroundColor: '#fff'
  },
  textStyle:{
    color: '#000',
    fontSize:15,
    fontWeight: '100'
  },
  activeTabStyle:{
    backgroundColor: '#fff'
  },
  activeTextStyle:{
    color:'#000',
    fontSize:19,
    fontWeight: '900'
  }
})