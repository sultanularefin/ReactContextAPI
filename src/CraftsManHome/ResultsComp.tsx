import React, {
    useContext,
    useEffect,
    useRef,
    useState} from 'react';
import { Jumbotron, Container } from 'reactstrap';
import FlatList from 'flatlist-react';

import {routeDataContextFinal, IInputString} from "./CraftsManHome";



const ResultsComp =()=> {

    const routeContextInTabs = useContext<IInputString>(routeDataContextFinal);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);



    // console.log('routeContextInTabs.postID: ',routeContextInTabs.postID);
    // console.log('================================');
    // console.log('**** routeContextInTabs.inputString: ',routeContextInTabs.inputString);
    // console.log('================================');




    // console.log('routeContextInTabs.postID: ',routeContextInTabs.postID);
    console.log('================================');
    console.log('**** routeContextInTabs.inputString: ',routeContextInTabs.inputString);
    console.log('================================');



    useEffect(() => {

        const url = `https://restcountries.eu/rest/v2/capital/${routeContextInTabs.inputString}`;

        console.log("url: ===> ===> ===> ===> ", url);

        fetch(url)
        // fetch (`https://restcountries.eu/rest/v2/capital/${routeContextInTabs.inputString}`, {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },


        // })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [routeContextInTabs])

// }, [urlContext.url]);



    console.log("items ======= ==== ====== ===== : ",items);
    const people = [
        {firstName: 'Elson', lastName: 'Correia', info: {age: 24}},
        {firstName: 'John', lastName: 'Doe', info: {age: 18}},
        {firstName: 'Jane', lastName: 'Doe', info: {age: 34}},
        {firstName: 'Maria', lastName: 'Carvalho', info: {age: 22}},
        {firstName: 'Kelly', lastName: 'Correia', info:{age: 23}},
        {firstName: 'Don', lastName: 'Quichote', info: {age: 39}},
        {firstName: 'Marcus', lastName: 'Correia', info: {age: 0}},
        {firstName: 'Bruno', lastName: 'Gonzales', info: {age: 25}},
        {firstName: 'Alonzo', lastName: 'Correia', info: {age: 44}}
    ];

    const renderPerson = (person:{
        firstName: string,
        lastName: string,
        info: {
            age:Number
        }
    }, idx: Number) => (
        <li key={idx.toString()}>
            <b>{person.firstName} {person.lastName}</b> (<span>{person.info.age}</span>)
        </li>
    );







    return (



        <Container style={{

        }}>
        <FlatList
            list={people}
            renderItem={renderPerson}
            renderWhenEmpty={() => <div>List is empty!</div>}
            sortBy={["firstName", {key: "lastName", descending: true}]}
            groupBy={ (person:{
                firstName:string,
                lastName:string,
                info: {
                    age:Number
                }
            }) => person.info.age > 18 ? 'Over 18' : 'Under 18'}
        />
        </Container>




    );
}


export default ResultsComp;
