




import React, { useEffect, useRef, useState } from 'react';


export interface Props {



    hitJackPot: (value:string) => void,




//     navigation={navigation}
// route = {route}
// isLoading={loadingState}
// repos={reposState}
// userID={route.params.USERID}
}
const SearchComp: React.FC<Props> = ({
                                           // props,
                                           // navigation,
                                           // route,
                                           // repos,
                                           // userID,
                                           // userName,
                                           hitJackPot
                                       }) => {
// const SearchComp=()=> {

    const [StringInputState, setStringInputState] = useState('');


    // console.log('StringInputState: ',StringInputState);
    const setSearch = (event:any) => {

        setStringInputState(event.target.value);
        // hitJackPot(event.target.value);
        hitJackPot(event.target.value);

    };


    // onKeyPress={}
    return (
        // <div className="App">



            <form style={{
                margin:10,
            }}>
                <p>
                <label>
                    Search With Capital:

                </label>
                </p>
                <input
                    type="text"
                       name="name"
                    onChange={setSearch}
                    value={StringInputState}
                    // ref={refSearch}
                    onSubmit={()=>{}}


                />

            </form>
        // </div>
    );
}


export default SearchComp;
