//List.js

import React from "react";

const List = (props) => {


    const { repos } = props;

    // console.log('repos: ',repos);


    if (!repos) return null;
    if (!repos.length) return <p>No repos, sorry</p>;

    return (
        <ul>
            {repos.map((repo) => {
                return <li key={repo.id}>{repo.full_name}</li>;
            })}
        </ul>
    );


};
export default List;