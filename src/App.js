import React from "react";
import "./App.css";
import "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Main from "./views/Main";
import RootReducer from "./store/reducers";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
const store = createStore(RootReducer, applyMiddleware(thunk));
function App() {
  return (
    <div>
		<Provider store={store}>
			<Main/>
		</Provider>
    </div>
  );
}

export default App;
