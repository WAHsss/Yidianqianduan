import React, { PureComponent } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CardViewComponent from '../components/CardViewComponent';
import { Content } from 'native-base';
const aaa = `## MongoDB 索引

索引通常能够极大的提高查询的效率，如果没有索引，MongoDB在读取数据时必须扫描集合中的每个文件并选取那些符合查询条件的记录。

这种扫描全集合的查询效率是非常低的，特别在处理大量的数据时，查询可以要花费几十秒甚至几分钟，这对网站的性能是非常致命的。

索引是特殊的数据结构，索引存储在一个易于遍历读取的数据集合中，索引是对数据库表中一列或多列的值进行排序的一种结构

### ensureIndex() 方法

MongoDB使用 ensureIndex() 方法来创建索引。

#### 语法

ensureIndex()方法基本语法格式如下所示：



语法中 Key 值为你要创建的索引字段，1为指定按升序创建索引，如果你想按降序来创建索引指定为-1即可。



ensureIndex() 接收可选参数，可选参数列表如下：


| Parameter          | Type          | Description                                                  |
| ------------------ | ------------- | ------------------------------------------------------------ |
| background         | Boolean       | 建索引过程会阻塞其它数据库操作，background可指定以后台方式创建索引，即增加 "background" 可选参数。 "background" 默认值为false。 |
| unique             | Boolean       | 建立的索引是否唯一。指定为true创建唯一索引。默认值为false.   |
| name               | string        | 索引的名称。如果未指定，MongoDB的通过连接索引的字段名和排序顺序生成一个索引名称。 |
| dropDups           | Boolean       | 在建立唯一索引时是否删除重复记录,指定 true 创建唯一索引。默认值为 false. |
| sparse             | Boolean       | 对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为true的话，在索引字段中不会查询出不包含对应字段的文档.。默认值为 false. |
| expireAfterSeconds | integer       | 指定一个以秒为单位的数值，完成 TTL设定，设定集合的生存时间。 |
| v                  | index version | 索引的版本号。默认的索引版本取决于mongod创建索引时运行的版本。 |
| weights            | document      | 索引权重值，数值在 1 到 99,999 之间，表示该索引相对于其他索引字段的得分权重。 |
| default_language   | string        | 对于文本索引，该参数决定了停用词及词干和词器的规则的列表。 默认为英语 |
| language_override  | string        | 对于文本索引，该参数指定了包含在文档中的字段名，语言覆盖默认的language，默认值为 language. |
`
const Data = [
  {
    type: '前端面试题',
    title: 'sroll resize 使用函数节流实现不要频繁触发事件的需求',
    content: '利用定时器，让函数执行延迟500毫秒，在500毫秒内如果有函数又被调用则删除上一次调用，这次调用500毫秒后执行，其实本意只是窗口resize后页面做一些调整就可以，而window的resize事件并不是在resize结束后才触发的，具体则么个频率我也不知道，但却是在不停的调用，直到窗口大小不再变化。其实类似的机制还有鼠标的mousemove，都是在短时间内重复触发。',
    praise: 15,
    isPraise: false,
    isCollection: true
  },
  {
    type: '技术文章',
    title: 'MongoDB 索引',
    content: aaa,
    praise: 3,
    isPraise: true,
    isCollection: true
  },
  {
    type: '问答',
    title: '初学者如何理解网页布局?',
    content: `对于一个网页的排版可分为两种情况（横向和纵向）
    1.纵向区块，则每个区块写出一个div即可，因为div是独占一行的（块级元素）
    2.横向区块，则
    a . 同样每个区块写出一个div，且每个div都进行浮动；
    b . 有需要则设置各个div需要的宽度，但总和不超过父盒子的宽度。
    c . 有必要也设置各自高度，以及颜色背景或边框，以出现明显的视觉效果，这样有助于排错；
    d . 处理父盒子的高度：在最后位置设置一个用于清除浮动的div（这样父盒子才“表现正常”），或对父盒子使用overflow:hidden;或设置一个固定的高度以包住里面的盒子（里面盒子高度固定的情况下可用）。这一点很有必要。
    
    布局一定要注意：
    1.横向排列的布局需要用到浮动（一左一右，两左一右，或者都靠左）
    2.只要有浮动元素，一定要考虑父元素的高度问题，如果不对其进行约束，就会使得父元素受其子元素的影响浮动起来，就会使得纵向位于父元素下面的纵向区块向上移动，从而使的父元素无法正常的显示
    约束方式：
    a. 设定固定高；
    b. 清除浮动以获得自然高
    • 父元素使用overflow：hidden；
    • 父元素的最后位置额外加一个div并设置其clear:both;`,
    praise: 12,
    isPraise: true,
    isCollection: false
  },
  {
    type: '开发技巧',
    title: 'VSCode运行程序时输出中文成乱码',
    content: `解决Visual Studio Code运行程序时输出中文成乱码的方法：1. 打开控制面板
    2.选择时钟和区域下的更改日期、时间或数字格式
    3.点击管理，然后点选择更改系统区域设置
    4. 勾选Beta版:使用Unicode UTF-8提供全球语言支持，然后点击确定，并同意系统的重启请求
    5.重启电脑`,
    praise: 6,
    isPraise: true,
    isCollection: true
  }
];
class HomePage extends PureComponent {
  constructor(props) {
    super(props);


  }

  render() {

    return (
      <Content>
        <FlatList
          data={Data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <CardViewComponent item={item} navigation={this.props.navigation} />}
        />
      </Content>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
})
export default HomePage;