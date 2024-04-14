import React from 'react';
import classes from './example.module.css';

function Button({ children }) {
  return (
    <div>
        {children}
        <p className={classes.user}>User</p>
    </div>
  );
}

export default Button;
