import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

let HomeButton = (props: any) => {
    return (
        <Button 
            variant="contained" 
            color={props.color} 
            className="nav-btn" 
            onClick={props.show}
        >
            {props.val}
        </Button>
    )
}

export default HomeButton;