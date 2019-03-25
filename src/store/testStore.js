import { createStore } from 'redux';
import testReducer from '../reducers/testReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export default function configureStore() {
  return createStore(testReducer, composeWithDevTools());
}
