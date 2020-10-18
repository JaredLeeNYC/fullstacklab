import * as ActionTypes from '../constants/actionTypes';
import reducer from './blocks';
import initialState from './initialState';

describe('Reducers::Blocks', () => {
  const getInitialState = () => {
    return initialState().blocks;
  };

  const nodeA = {
    url: 'http://localhost:3002',
    online: false,
    name: null,
  };

  const nodeB = {
    url: 'http://localhost:3003',
    online: false,
    name: null,
  };

  it('should set initial state by default', () => {
    const action = {type: 'unknown'};
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle FETCH_BLOCKS_START', () => {
    const appState = {

    };
    const action = {type: ActionTypes.FETCH_BLOCKS_START, node: nodeA};
    const expected = {
        [nodeA.url]:{
            loading:true,
            data:[],
            hasError:false,
            updatedTime:null
        }
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle CHECK_NODE_STATUS_SUCCESS', () => {
    const appState = {
      list: [nodeA, nodeB],
    };
    const action = {
      type: ActionTypes.CHECK_NODE_STATUS_SUCCESS,
      node: nodeA,
      res: {node_name: 'alpha'},
    };
    const expected = {
      list: [
        {
          ...nodeA,
          online: true,
          name: 'alpha',
          loading: false,
        },
        nodeB,
      ],
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle CHECK_NODE_STATUS_FAILURE', () => {
    const appState = {
      list: [
        {
          ...nodeA,
          online: true,
          name: 'alpha',
          loading: false,
        },
        nodeB,
      ],
    };
    const action = {type: ActionTypes.CHECK_NODE_STATUS_FAILURE, node: nodeA};
    const expected = {
      list: [
        {
          ...nodeA,
          online: false,
          name: 'alpha',
          loading: false,
        },
        nodeB,
      ],
    };

    expect(reducer(appState, action)).toEqual(expected);
  });
});
