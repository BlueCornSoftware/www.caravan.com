import reducer from './reducer';
import initialState from './initial-state';
import * as actions from './actions';

describe('Function: NavReducer', () => {
  it('should return state by default', () => {
    const unhandledAction = {
      type: 'NOT_A_VALID_TYPE',
    };

    const result = reducer(initialState, unhandledAction);
    expect(result).toBe(initialState);
  });

  it('should return state with hello equals true on action type HELLO', () => {
    const result = reducer(initialState, actions.testAction());
    expect(result.hello).toBe(true);
  });
});
