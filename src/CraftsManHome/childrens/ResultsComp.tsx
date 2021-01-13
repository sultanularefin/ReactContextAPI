import React, {
    ReactNode,
    useContext,
    useEffect,
    useRef,
    useState
} from 'react';
// import { Jumbotron, Container } from 'reactstrap';
// import FlatList from 'flatlist-react';

import {routeDataContextFinal, IInputString} from "../CraftsManHome";
// import {Props} from "./SearchComp";


export interface Props {
    hitJackPot2: (value:string) => void,
}




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



// const SearchComp: React.FC<Props> = ({
//
//                                          hitJackPot
//                                      }) => {

 // const ResultsComp = ({props}: { children?: ReactNode }) => {

// const DetailsPage: React.FC<Props> = (props)=> {
const ResultsComp: React.FC<Props> = (props) => {


    // Alert.alert(`${props}`);

// const ResultsComp =({}) React.FC<Props> = (props) => {


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
            languages: {
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
            regionalBlocs: {
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


    // console.log('routeContextInTabs.postID: ',routeContextInTabs.postID);
    // console.log('================================');
    // console.log('**** routeContextInTabs.inputString: ', routeContextInTabs.inputString);
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
                    setError(null);
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error3) => {
                    setIsLoaded(true);
                    setError(error3);
                    setItems([]);
                }
            ).catch((error2)=>{
            setIsLoaded(true);
            setError(error2);
            setItems([]);

        });
    }, [routeContextInTabs]);


    // render Final

    // message: "Not Found"
    // console.log('items: ', items);

    // if((Object.entries(items).length === 0) && (items.constructor === Object)){
    //     if(items.status===404){
    //         return    (
    //             <div className="list-group">
    //             <p> 404
    //             </p>
    //         </div>
    //         );
    //     }
    // }



    // conditon 1....
     if (items.length === 0) {
        return (


            <div className="list-group">
                <p> empty list</p>
            </div>
        );
    }

    else if (error) {

        if (Array.isArray(items) && !(items.length)) {

            return (


                <div className="list-group">
                    <p> empty </p>
                </div>
            );
        }
        else {
            return (


                <div className="list-group">
                    <p> some error in Results component</p>
                </div>
            );
        }
    }



    else{

        const statusChecking = items[0];

        if (statusChecking.status !== 404) {

            const content = (Array.isArray(items) && !(items.length))
                ? "[empty]"

                :
                (

                    items.map((
                        post) =>
                        <button onClick={
                            () => {
                                console.log(`post.name: ${post.name}`);
                                props.hitJackPot2(post.name);


                            }

                        } key={post.name} type="button" className="list-group-item list-group-item-action">
                            {/*<h3>{post.title}</h3>*/}
                            <p>{post.name}</p>
                        </button>
                    ));

            return (
                <div className="list-group">


                    {content}
                </div>
            );
        }
        else
        {

            return (
                <div className="list-group">


                    <p> no data found for the search string </p>
                </div>
            );
        }
    }

};


export default ResultsComp;
