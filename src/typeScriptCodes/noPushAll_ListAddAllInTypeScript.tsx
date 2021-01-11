
import React, { useEffect, useRef, useState } from 'react';

const noPushAll_ListAddAllInTypeScript =()=> {


  const pushedMetaDatas: {
    fileName: string,
    uri: string,
    mime: string,
    width: number,
    height: number
    // itemName: string,
  }[] = [];

  const pushedMetaDatas1: {
    fileName: string,
    uri: string,
    mime: string,
    width: number,
    height: number
    // itemName: string,
  }[] = [];

  // const pushedMetaDatas: any[]=[];


  const [avatarSourceState, setAvatarSourceState] = useState(
    new Array<{
      fileName: string,
      uri: string,
      mime: string;

      width: number;
      height: number;
      duration?: number;
      modificationDate: string;

      // path:string
      size: number;
    }>()

  );

  const [avatarSourceStateEdit, setAvatarSourceStateEdit] = useState(
    new Array<{
      fileName: string, // name before query string...
      uri: string,
      mime: string;

      width: number;
      height: number;
      duration?: number;
      modificationDate?: string;
      // path:string
      size?: number;
    }>()
  );

  let i = 0;

  for (i; i < 5; i++) {
    const additionalData = {
      fileName: 'fileName2__' + i,
      uri: 'finalImageResouce' + i,
      mime: 'metadata.contentType.toString()' + i,
      width: (parseFloat('0')) + i,
      height: parseFloat('0') + i,
      // itemName: metadata.customMetadata.itemName
    }





    pushedMetaDatas.push({ ...additionalData });
  }

  /*

  let avatarSourceState2:{
    fileName: string, // name before query string...
    uri: string,
    mime: string,

    width: number,
    height: number
  }[]
  */
 /*
  let avatarSourceState2:{
    fileName: string, // name before query string...
    uri: string,
    mime: string,

    width: number,
    height: number
  }[] =[];
  */

  let avatarSourceState2x: Array<{
    fileName: string, // name before query string...
    uri: string,
    mime: string,

    width: number,
    height: number
  }>;

  avatarSourceState2x= pushedMetaDatas.map((i) => {
    // console.log('received image', i);
    return {
      fileName:'',
      uri: i.uri,
      mime: i.mime,


      width: i.width,
      height: i.height,


      // duration?: number;
      // modificationDate?: string;

    };
  });


  let avatarSourceState1x: Array<{
    fileName: string, // name before query string...
    uri: string,
    mime: string,

    width: number,
    height: number
  }>;

  avatarSourceState1x= pushedMetaDatas.map((i) => {
    // console.log('received image', i);
    return {
      fileName:'',
      uri: i.uri,
      mime: i.mime,


      width: i.width,
      height: i.height,


      // duration?: number;
      // modificationDate?: string;

    };
  });


/*
  let avatarSourceStateFromEdit2:{
    fileName: string, // name before query string...
    uri: string,
    mime: string,

    width: number,
    height: number
  }[] = [] ;//pushedMetaDatas1.map((i) => {
*/
let avatarSourceStateFromEdit2: Array<{
  fileName: string, // name before query string...
  uri: string,
  mime: string,

  width: number,
  height: number
}>;

  avatarSourceStateFromEdit2=  pushedMetaDatas1.map((i) => {

    return {
      fileName: i.fileName,
      uri: i.uri,
      mime: i.mime,


      width: i.width,
      height: i.height,


      // duration?: number;
      // modificationDate?: string;

    };
  });

  // avatarSourceState2
  // avatarSourceState2.push(avatarSourceStateFromEdit2);

  for(let j= 0;j<avatarSourceState2x.length;j++){
    avatarSourceState1x.push(avatarSourceStateFromEdit2[j]);
  }


  // console.info('pushedMetaDatas.length: ',pushedMetaDatas.length);

  // console.info('avatarSourceState1x.length: ',avatarSourceState1x.length);

}

noPushAll_ListAddAllInTypeScript();
