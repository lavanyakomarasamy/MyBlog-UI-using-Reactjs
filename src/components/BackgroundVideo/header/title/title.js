import React from 'react';
import classes from './title.module.css';
const Title = () => {
    return (
        <div className={classes.TitleClass}>
        <h1 className={classes.PadZero}>
            Lavanya Komarasamy
        </h1>
        <h4 className={classes.PadZero}>
           Developer
        </h4>
        </div>
    );
};
export default Title