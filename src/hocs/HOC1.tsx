


import React, { useEffect, useRef, useState } from 'react';
// import React from 'react';
import logo from './../logo.svg';

import './../App.css';




// function hoc(WrappedComponent:any,/* props:any*/) {
const hoc = (WrappedComponent:any) => (props:any) => {


    console.log('\n\n WrappedComponent: ',WrappedComponent);

    console.log('\n\n\n props: ',props);

    console.log('\n\n\n {...props}: ',{...props});



    return (
        <div>
            <WrappedComponent {...props}>
                {props.children.toUpperCase()}
            </WrappedComponent>
        </div>
    )
}


const Username = (props:any) => (
    <div>{props.children}</div>
)

const UpperCaseUsername = hoc(Username)


const HOC1 = () => (



    // const App = () => (
    <div>
        <UpperCaseUsername>Kingsley 111 xyz pqr</UpperCaseUsername>
    </div>
);

export default HOC1;
