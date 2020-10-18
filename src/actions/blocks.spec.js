import * as ActionTypes from "../constants/actionTypes";
import * as ActionCreators from "./blocks";

describe("Blocks Actions", () => {
  beforeAll(() => {});
  afterAll(() => {});

  const node = {
    url: "http://localhost:3002",
    online: false,
    name: null
  };

  const node2 = {
    url: "https://thawing-springs-53971.herokuapp.com",
    online: true,
    name: "springs"
  };

  it("should create an action to save fuel savings", () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.FETCH_BLOCKS_START,
      node
    };

    // we expect this to return a function since it is a thunk
    expect(typeof ActionCreators.fetchBlocks(node)).toEqual("function");
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.fetchBlocks(node)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

  it("should create an action to fetch some blocks successfully", () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.FETCH_BLOCKS_SUCCESS,
      node
    };

    // we expect this to return a function since it is a thunk
    expect(typeof ActionCreators.fetchBlocks(node2)).toEqual("function");
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.fetchBlocks(node2)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

});
