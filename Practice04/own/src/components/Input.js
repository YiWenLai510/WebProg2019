import React from 'react';
import '../index.css';
export default ({onKeyPress}) => {
  return <input type="text" 
                placeholder="what needs to be done?"
                className = "todo-app__input"
                id="todo-input"
                onKeyPress={onKeyPress}
         />;
}