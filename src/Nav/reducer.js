import * as types from './types';
import InitialState from './initial-state';

export default function NavReducer(state = InitialState, action) {
  switch (action.type) {
    case types.HELLO:
      return {
        ...state,
        hello: true,
      };
    default:
      return state;
  }
}
