import React, {
    useContext,
    useEffect,
    useRef,
    useState} from 'react';
import { Jumbotron, Container } from 'reactstrap';
import FlatList from 'flatlist-react';

import {routeDataContextFinal, IInputString} from "./CraftsManHome";



// declare module namespace {

export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface Translations {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
}

export interface RegionalBloc {
    acronym: string;
    name: string;
    otherAcronyms: any[];
    otherNames: string[];
}

export interface RootObject {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini?: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: Currency[];
    languages: Language[];
    translations: Translations;
    flag: string;
    regionalBlocs: RegionalBloc[];
    cioc: string;
}

// }





const ResultsComp =()=> {


    const routeContextInTabs = useContext<IInputString>(routeDataContextFinal);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(


        new Array<{
// id: string;
            // user_id: string;
            // mind_content: string;
            // trip_to: string;
            // from_latitude: string;
            // from_longitude: string;
            // status: string;
            // trip_date: string;
            // trip_time: string;
            // trip_purpose: string;
            // name: string;
            // user_profile_photo: string;
            // suggested: [];
            // regionalBlocs: RegionalBloc[];




            name: string,
            topLevelDomain: string[];
            alpha2Code: string;
            alpha3Code: string;
            callingCodes: string[];
            capital: string;
            altSpellings: string[];
            region: string;
            subregion: string;
            population: number;
            latlng: number[];
            demonym: string;
            area: number;
            gini?: number;
            timezones: string[];
            borders: string[];
            nativeName: string;
            numericCode: string;
            // currencies: Currency[];
            currencies: {
                code: string;
                name: string;
                symbol: string;
            };
            // languages: Language[];
            languages:{
                iso639_1: string;
                iso639_2: string;
                name: string;
                nativeName: string;
            };

            translations: {
                de: string;
                es: string;
                fr: string;
                ja: string;
                it: string;
                br: string;
                pt: string;
                nl: string;
                hr: string;
                fa: string;
            };
            flag: string;
            regionalBlocs:{
                acronym: string;
                name: string;
                otherAcronyms: any[];
                otherNames: string[];
            };


            cioc: string;
        }>()
    );



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



    // console.log("items ======= ==== ====== ===== : ",items);
    // const people = [
    //     {firstName: 'Elson', lastName: 'Correia', info: {age: 24}},
    //     {firstName: 'John', lastName: 'Doe', info: {age: 18}},
    //     {firstName: 'Jane', lastName: 'Doe', info: {age: 34}},
    //     {firstName: 'Maria', lastName: 'Carvalho', info: {age: 22}},
    //     {firstName: 'Kelly', lastName: 'Correia', info:{age: 23}},
    //     {firstName: 'Don', lastName: 'Quichote', info: {age: 39}},
    //     {firstName: 'Marcus', lastName: 'Correia', info: {age: 0}},
    //     {firstName: 'Bruno', lastName: 'Gonzales', info: {age: 25}},
    //     {firstName: 'Alonzo', lastName: 'Correia', info: {age: 44}}
    // ];

    const renderItems = (person:
    //                          {
    //     firstName: string,
    //     lastName: string,
    //     info: {
    //         age:Number
    //     }
    // }
                             RootObject
        , idx: Number) => (
        <li key={idx.toString()}>
            <b>{person.name}</b>
        </li>
    );







    return (



        <Container style={{

        }}>
            {/*<FlatList*/}
            {/*    list={items}*/}
            {/*    renderItem={renderItems}*/}
            {/*    renderWhenEmpty={() => <div>List is empty!</div>}*/}
            {/*    sortBy={["firstName", {key: "lastName", descending: true}]}*/}
            {/*    groupBy={ (person:*/}
            {/*                   {*/}
            {/*        firstName:string,*/}
            {/*        lastName:string,*/}
            {/*        info: {*/}
            {/*            age:Number*/}
            {/*        }*/}
            {/*    }*/}
            {/*    */}
            {/*    ) => person.info.age > 18 ? 'Over 18' : 'Under 18'}*/}
            {/*/>*/}

            <FlatList
                list={items}
                renderItem={renderItems}
                renderWhenEmpty={() => <div>List is empty!</div>}
                sortBy={["firstName", {key: "lastName", descending: true}]}
                groupBy={ (person: RootObject
                           //                {
                           //     firstName:string,
                           //     lastName:string,
                           //     info: {
                           //         age:Number
                           //     }
                           // }

                ) => person.name.length

                }
            />
        </Container>




    );
}


export default ResultsComp;
