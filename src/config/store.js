import { createStore, applyMiddleware,compose } from 'redux';
import reduxThunk from "redux-thunk";
import reducers from './reducers/';

const enhancer = compose(
    applyMiddleware(reduxThunk),
    //window.devToolsExtension && window.devToolsExtension(),
    // other store enhancers if any
  );
export const store = createStore(reducers,enhancer);