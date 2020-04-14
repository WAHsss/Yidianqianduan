import { Dimensions, StyleSheet } from "react-native";
const size = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}
const profileStyle = StyleSheet.create({
  viewContent: {
    height: size.height * 0.626,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between'
  },
  headImg: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  userInfo: {
    marginBottom: 30
  },
  userText: {
    color: 'white',
    textAlign: 'center'
  },
  imgWrap: {
    width: size.width * 0.5,
    height: size.height * 0.15,
  },
  rowText: {
    textAlignVertical: 'center',
    color: 'white'
  },
  iconStyle: {
    fontSize: 18,
    textAlignVertical: 'center',
    paddingRight: 5,
    color: 'white'
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  cardHeader: {
    paddingTop: size.width*0.02,
    paddingBottom: size.width*0.01
  },
  cardBody: {
    paddingTop: size.width*0.02,
    paddingBottom: size.width*0.045
  },
  collotionList: {
    alignItems: 'center',
    width: size.width * 0.20
  }
})
export { profileStyle as default };