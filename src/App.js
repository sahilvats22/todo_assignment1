import React from "react";
import { Provider } from "react-redux";
import Todo from "./Components/Todo";
import store from "./utils/store";
const App = () => {
  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
  );
};
export default App;
