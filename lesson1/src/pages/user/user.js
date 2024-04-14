import React from 'react';
import classes from './user.module.css';

function User({ name, age}) {
  return (
    <div>
        <p className={classes.user}>User: {name}</p>
        <p className={classes.age}>Age: {age}</p>
    </div>
  );
}

export default User;
