import {
    FETCH_BLOCKS_START,
    FETCH_BLOCKS_SUCCESS,
    FETCH_BLOCKS_FAILURE,
  } from '../constants/actionTypes';
  import initialState from './initialState';
  
  export default function blocksReducer(state = initialState().blocks, action) {
    switch (action.type) {
      case FETCH_BLOCKS_START:
        return {
          ...state,
          [action.node.url]:{
              loading:true,
              data:[],
              hasError:false,
              updatedTime:null
          }
        };
      case FETCH_BLOCKS_SUCCESS:
       
        return {
          ...state,
          [action.node.url]:{
            loading:false,
            data:[...action.res.data],
            hasError:false,
            updatedTime:new Date()
        }
        };
      case FETCH_BLOCKS_FAILURE:
       
        return {
          ...state,
          [action.node.url]:{
            loading:false,
            data:[],
            hasError:true,
            updatedTime:null
        }
        };
      default:
        return state;
    }
  }
  