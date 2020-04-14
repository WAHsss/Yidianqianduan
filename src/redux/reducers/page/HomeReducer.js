const initialState = {
  islogin : false
};
export default HomeLoginReducer = (state = initialState , action) => {
  switch(action.type){
    case 'CHANGELOGIN':
      return {
        islogin : !state.islogin
      }
    default:
      return state
  }
}
