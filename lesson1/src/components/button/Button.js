import React from 'react';
import classes from './button.module.css';

function Button({ title }) {
  return (
    <div>
        <button className={classes.button}>
            {title}
        </button>
    </div>
  );
}

export default Button;
