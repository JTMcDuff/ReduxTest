import React, { Component } from 'react';
import FilterLink from './FilterLink.jsx';
import getVisibleTodos from './getVisibleTodos.js';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';

let nextTodoId = 0
class App extends Component {

  constructor () {
    super()
  }

  render() {
    console.log("app",this.props)
    const visibleTodos = getVisibleTodos(this.props.todos, this.props.visibilityFilter);
    return (
      <div >
        <p>Test</p>
        <input ref = {node => {
          this.input = node;
        }} />
        <button onClick={()=>{
          this.props.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id : nextTodoId++
          })
          this.input.value = '';
        }}>Add Todo
      </button>
      <ul>
        {visibleTodos.map( todo =>
        <li key={ todo.id}
          onClick={()=>{
            this.props.dispatch({
              type: 'TOGGLE_TODO',
              id: todo.id
            })
          }}
          style = {{
            textDecoration:
              todo.completed ? 'line-through' : 'none'
          }}>
          { todo.text }
        </li>
        )}
      </ul>
      <p>
        Show:
        {' '}
          <FilterLink
            filter='SHOW_ALL'
          >ALL
          </FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_ACTIVE'
          >Active
          </FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_COMPLETED'
          >Completed
          </FilterLink>
      </p>
    </div>
  );
  }
}



export default connect(state => state)(App);
