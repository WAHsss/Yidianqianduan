import React, { PureComponent } from 'react';
import { Content, Text, View, CardItem, Card } from 'native-base';
import cardListStyle from '../styles/cardListStyle';

let data = [
  {
    type: '前端面试题',
    title: 'sroll resize 使用函数节流实现不要频繁触发事件的需求',
    content: '利用定时器，让函数执行延迟500毫秒，在500毫秒内如果有函数又被调用则删除上一次调用，这次调用500毫秒后执行，其实本意只是窗口resize后页面做一些调整就可以，而window的resize事件并不是在resize结束后才触发的，具体则么个频率我也不知道，但却是在不停的调用，直到窗口大小不再变化。其实类似的机制还有鼠标的mousemove，都是在短时间内重复触发。',
    praise: 123,
    isPraise: true,
    isCollection: true
  },
  {
    type: '前端面试题',
    title: 'sroll resize 使用函数节流实现不要频繁触发事件的需求',
    content: '利用定时器，让函数执行延迟500毫秒，在500毫秒内如果有函数又被调用则删除上一次调用，这次调用500毫秒后执行，其实本意只是窗口resize后页面做一些调整就可以，而window的resize事件并不是在resize结束后才触发的，具体则么个频率我也不知道，但却是在不停的调用，直到窗口大小不再变化。其实类似的机制还有鼠标的mousemove，都是在短时间内重复触发。',
    praise: 1234,
    isPraise: true,
    isCollection: true
  },
  {
    type: '前端面试题',
    title: 'sroll resize 使用函数节流实现不要频繁触发事件的需求',
    content: '利用定时器，让函数执行延迟500毫秒，在500毫秒内如果有函数又被调用则删除上一次调用，这次调用500毫秒后执行，其实本意只是窗口resize后页面做一些调整就可以，而window的resize事件并不是在resize结束后才触发的，具体则么个频率我也不知道，但却是在不停的调用，直到窗口大小不再变化。其实类似的机制还有鼠标的mousemove，都是在短时间内重复触发。',
    praise: 1245,
    isPraise: true,
    isCollection: true
  },
  {
    type: '前端面试题',
    title: 'sroll resize 使用函数节流实现不要频繁触发事件的需求',
    content: '利用定时器，让函数执行延迟500毫秒，在500毫秒内如果有函数又被调用则删除上一次调用，这次调用500毫秒后执行，其实本意只是窗口resize后页面做一些调整就可以，而window的resize事件并不是在resize结束后才触发的，具体则么个频率我也不知道，但却是在不停的调用，直到窗口大小不再变化。其实类似的机制还有鼠标的mousemove，都是在短时间内重复触发。',
    praise: 13,
    isPraise: true,
    isCollection: true
  },
]
export default class CardListPage extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Content>
        <View style={cardListStyle.content}>
          {
            data.map((item, index) => {
              // 基数和偶数渲染形式不同
              let itemStyle = index % 2 ? 'Odd' : 'Even';
              return (
                <Card key={item.praise + index} style={cardListStyle[`item${itemStyle}Style`]} >
                  <CardItem cardBody style={{ flex: 1 }}>
                    <Text numberOfLines={1} style={cardListStyle.header}>{item.title}</Text>
                  </CardItem>
                  <View style={cardListStyle.separator}></View>
                  <CardItem cardBody style={{ flex: 3 }}>
                    <Text numberOfLines={6} style={cardListStyle.text}>{item.content}</Text>
                  </CardItem>
                </Card>
              )
            })
          }
        </View>
      </Content>
    );
  }
}