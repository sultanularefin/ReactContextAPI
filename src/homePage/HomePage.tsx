


import React, { useEffect, useRef, useState } from 'react';
// import React from 'react';
import logo from './../logo.svg';
import './../App.css';

function HomePage() {



  // snapshot:  {
  const snapshot = {
    "bytesTransferred": 6274462,
    "metadata": {
      "bucket": "monozseptember2020.appspot.com",

      "cacheControl": "no-store",
      "contentDisposition": "inline;filename*=utf- 8''% E0 % A6 % 95 % E0 % A6 % 96 % E0 % A6 % 970D2X5Rth7.jpeg",
      "contentEncoding": "identity",
    "contentLanguage": null,
    "contentType": "image/jpeg",
    "customMetadata": {
      "height": "3000",
      "itemName": "কখগ",
      "width": "4000"
    },
    "fullPath": "images/mhmdarefin@gmail.comNew/কখগ0D2X5Rth7.jpeg",
    "generation": "1601110251026764",
    "md5Hash": "S9asvRGAPXtmjwJDBts0qA==",
    "metageneration": "1",
    "name": "কখগ0D2X5Rth7.jpeg",

    "size": 6274462,
    "timeCreated": "2020-09-26T14:50:51Z",
    "updated": "2020-09-26T14:50:51Z"
  }, "state": "success",
    "totalBytes": 6274462
};



return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
        </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>
    </header>
  </div>
);
}


export default HomePage;
