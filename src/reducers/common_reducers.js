import {
  ADD_USER ,GET_USER ,DEL_USER

} from "../actions/actions";

function commonReducer(
  state = {
     add_user: [] ,
     get_user : [] ,
     del_user : []
  },
  action
) {
  switch (action.type) {
   
    case ADD_USER:
      return Object.assign({}, state, {
        add_user: action.add_user
      });
     
      case GET_USER:
        return Object.assign({}, state, {
          get_user: action.get_user
        });
        case DEL_USER:
        return Object.assign({}, state, {
          del_user: action.del_user
        });
    default:
      return state;
  }
}
export default commonReducer;