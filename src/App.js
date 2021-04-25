import React, { Component } from 'react'
import './App.css'

import Input from './components/Input'
import TodoList from './components/TodoList'

import { createStore, applyMiddleware } from 'redux'
import combineReducers from './reducers/combine-reducer'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))


class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <div className="app-container">
            <div className="app-todocontainer">
              <TodoList />
            </div>
          </div>
          <Input />
        </div>
      </Provider>
    );
  }
}

export default App;