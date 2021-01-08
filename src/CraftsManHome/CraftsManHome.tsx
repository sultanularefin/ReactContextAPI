




import React, { useEffect, useRef, useState } from 'react';
// import React from 'react';
import logo from './../logo.svg';
import SearchComp from "./SearchComp";
import ResultsComp from "./ResultsComp";



// import {
//     Jumbotron,
//     Container
// } from 'react-bootstrap/Jumbotron'

import { Jumbotron, Container } from 'reactstrap';
// import './../App.css';

// function CraftsManHome() {


export interface IInputString {

    inputString: string,
    // toggleTheme: () => {},
    // toggleTheme: () => void,
    // hitJackPot: (value:string) => void,

}

// const ThemeContext = React.createContext('light');


export const  routeDataContextFinal = React.createContext<IInputString>({
    inputString: '',
    // toggleTheme: () => {},
});

// export const ThemeContext = React.createContext({
//     theme: themes.dark,
//     toggleTheme: () => {},
// });

const CraftsManHome=()=> {


    const [inputStringValueState, setInputStringValueState] =useState<IInputString>({
        inputString:''}
        );



    const setData =  (value:string) => {

        // const {postID} = routeContextInTabs;

        console.log('value: ',value);

        // const routeDataContext2 = Object.assign(routeDataContextFinal, {
        //     // postID: postID,
        //     inputString: value
        // });
        // setRouteDataState(routeDataContext2);

        setInputStringValueState({inputString:value});


    };






    // console.log("routeDataState.inputString: ",routeDataState.inputString);

    return (

        <routeDataContextFinal.Provider value = {inputStringValueState}>
            <div className="flex-container">
                <div className="flex-child magenta">
                    <SearchComp
                        // value={}
                        hitJackPot={(value:string) => {
                            // Alert.alert('getChatMessage'),
                            // alert(`value: ${value}`);
                            // getChatMessage()
                            setData(value);
                        }
                        }
                    />
                </div>

                <div className="flex-child green">

                    <ResultsComp/>
                </div>

            </div>

        </routeDataContextFinal.Provider>







    );
}


export default CraftsManHome;
