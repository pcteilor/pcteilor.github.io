import React from 'react';


export function Content(props){

    return (
        <div className={props.container}>
            {props.children}
        </div>
    )
}

export function Row(props){
    return (
        <div className={'row '+ props.row}>
            {props.children}
        </div>
    )
}

export function Col(props){
    
    return (
        <div className={props.col}>
            {props.children}
        </div>
    )
}