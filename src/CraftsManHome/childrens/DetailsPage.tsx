import React, {
    useContext,
    useEffect,
    useRef,
    useState} from 'react';
import { Jumbotron, Container } from 'reactstrap';
import FlatList from 'flatlist-react';

import {routeDataContextFinal, IInputString} from "../CraftsManHome";



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

    message: string,
    status: number,
}

// }
export interface Props {
    value: string,
}



// const SearchComp: React.FC<Props> = ({                                        hitJackPot
//                                      }) => {

const DetailsPage: React.FC<Props> = (props)=> {


    const routeContextInTabs = useContext<IInputString>(routeDataContextFinal);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(


        new Array<{
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
            message: string,
            status: number,


            cioc: string;
        }>()
    );





    // console.log('routeContextInTabs.postID: ',routeContextInTabs.postID);
    // console.log('================================');
    // console.log('**** routeContextInTabs.inputString: ',routeContextInTabs.inputString);
    // console.log('================================');



    useEffect(() => {

        const url = `https://restcountries.eu/rest/v2/capital/${routeContextInTabs.inputString}`;

        // console.log("url: ===> ===> ===> ===> ", url);

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
                    // alert(`error: ${error}`)
                    setIsLoaded(true);
                    setError(error);
                }
            ).catch((error)=>{
            setIsLoaded(true);
            setError(error);
        })
    }, [routeContextInTabs])






    // const items2= items[0];
    //     const message2 = items2 === null
    //         ? null
    //         : items2.message=== null
    //     ?null
    //     :items2.message;
    //
    //     if(message2 === "Not Found") return null;


    if(error){
        return (


            <div className="list-group">
                <p> some error occurred. </p>
            </div>
        );
    }
        //render Final 1.




    // {status: 404, message: "Not Found"}


    else {
        const propsData = props;

        // console.log("propsData: ", propsData);

        // const allGroupChats = allItems.filter((oneItem) => oneItem.chat_type===2);
        const filteredItems = items.filter((oneItem) =>  oneItem.name.toLowerCase() === propsData.value.toLowerCase());

        // console.log('filteredItems: =====  ', filteredItems);

        if (filteredItems.length===0){
            return (


                <div className="list-group">
                    <p> none selected. </p>
                </div>
            );
        }
        else {

        const languagesAll = filteredItems[0].languages;


        // languagesAll.map(oneLanguage: { iso639_1: string,
        //     iso639_2: string,
        //     name: string,
        //     nativeName: string}) =>
        //
        // item.id);

        // console.log('selectedIds: ', selectedIds);




            return (


                <div className="list-group">

                    <p>
                        <label>
                            Country Details: {propsData.value}

                        </label>
                    </p>

                    <p> Country Name: {filteredItems[0].capital} </p>
                    <p> Capital: {filteredItems[0].capital} </p>
                    <p>
                        Language: {filteredItems[0].languages.name}

                        {/*Interests:  {languagesAll.map((item:string) => (item !== null) && item.toLocaleLowerCase()).join(', ')}.*/}

                    </p>
                    <p> Flag:


                        <img src={filteredItems[0].flag} style={{width: 50, height: 50}}/>
                    </p>
                </div>


            );
        }
    }
}


export default DetailsPage;
