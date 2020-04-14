import { Dimensions, StyleSheet } from "react-native";
const size = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}
const notePageStyle = StyleSheet.create({
  viewContent: {
    height: size.height * 0.4,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between'
  },
  wrap: {
    marginBottom: 30,
  },
  userText: {
    color: 'gray',
    textAlign: 'center',
    fontSize : 12
  },

})
export { notePageStyle as default };