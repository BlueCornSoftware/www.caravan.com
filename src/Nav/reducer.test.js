import reducer from './Nav.reducer';
import initialState from './Nav.initial-state';
import * as actions from './Nav.actions';

describe('Function: NavReducer', () => {
  it('should return state by default', () => {
    const unhandledAction = {
      type: 'NOT_A_VALID_TYPE',
    };

    const result = reducer(initialState, unhandledAction);
    expect(result).toBe(initialState);
  });

  it('should return state with hello equals true with action type HELLO', () => {
    const result = reducer(initialState, actions.testAction());
    expect(result.hello).toBe(true);
  })
});
