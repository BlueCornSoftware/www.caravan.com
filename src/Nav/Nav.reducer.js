import * as types from './Nav.types';
import InitialState from './Nav.initial-state';

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

