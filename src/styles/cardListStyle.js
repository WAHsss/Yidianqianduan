import { Dimensions, StyleSheet } from "react-native";
const size = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}
const cardListStyle = StyleSheet.create({
  itemOddStyle: {
    width: size.width * 0.46,
    height: size.height * 0.25,
    marginLeft: size.width * 0.01,
    marginRight: size.width * 0.03,
    marginTop : size.width * 0.01,
    color:'white'
  },
  itemEvenStyle: {
    width: size.width * 0.46,
    height: size.height * 0.25,
    marginLeft: size.width * 0.03,
    marginRight: size.width * 0.01,
    marginTop : size.width * 0.01,
    color:'white'
  },
  content:{
    flex: 1,
    flexDirection : 'row',
    flexWrap:'wrap',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc'
  },
  header:{
    padding:5,
    fontWeight:'900',
  },
  text:{
    color:'gray',
    fontWeight:'200',
    fontSize: 12,
    padding: 8
  }
})
export {cardListStyle as default}