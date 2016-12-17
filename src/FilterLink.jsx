import React from 'react';
import { connect } from 'react-redux';

let FilterLink = ({filter,children,dispatch}) => {
  console.log("dispatch",dispatch);
  return (
    <a href ='#'
      onClick={e => {
        e.preventDefault();
        dispatch({
          type: 'SET_VISIBILTY_FILTER',
          filter
        })
      }}
    >
      {children}
    </a>
  )
}

export default  connect(
  state => {
    return {}
  },
  dispatch => {
    return {dispatch}
  }
)(FilterLink)
