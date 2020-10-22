
import React, { useEffect, useRef, useState } from 'react';

const ArrayPush =()=> {

    const [avatarSourceStateEdit, setAvatarSourceStateEdit] = useState(
        new Array<{
          fileName: string, // name before query string...
          uri: string,
          width: number;
          duration?: number;
          height: number;
          mime: string;
          modificationDate: string;
          // path:string
          size: number;
        }>()
    
      );

  // const pushedMetaDatas: {
  //   fileName:string,
  //   itemName:string,
  //   width:number,
  //   contentType:string,
  //   height:number
  // }[]=[];


  let i = 0;

  const imageURL2 = ['abc', 'def'];


  if (imageURL2.length !== 0) {
    //const pushedMetaDatas: any[]=[];// THIS WORKED...  


    const pushedMetaDatas: {
      fileName: string,
      itemName: string,
      width: number,
      contentType: string,
      height: number
    }[] = [];


    try {

      for (i; i < imageURL2.length; i++) {

        console.log('i is => ', i);



        const additionalData = {
          fileName: 'a'+i+'',
          contentType: 'a'+i+'',
          width: 1,
          height: 1,
          itemName: 'a'+i+'',
        }



        console.log('additionalData.fileName', additionalData.fileName);
        console.log('additionalData.itemName', additionalData.itemName);
        console.log('additionalData.width', additionalData.width);
        console.log('additionalData.contentType', additionalData.contentType);
        console.log('additionalData.height', additionalData.height);

        // pushedMetaDatas.push({...additionalData});

        pushedMetaDatas.push({ ...additionalData });


        //all all the urls to the list
        console.log('i is : ', i);
        // console.log('pushedMetaDatas[i].fileName: ',pushedMetaDatas[i].fileName);

      }
    }
    catch (e) {
      console.log('e: ', e);
    }

    console.log('pushedMetaDatas: ', pushedMetaDatas);

    //setAvatarSourceStateEdit(pushedMetaDatas);



  }

  console.log('not imageURL ', !imageURL2);







  // console.log('pushedMetaDatas[0].fileName',pushedMetaDatas[0].fileName);
  // console.log('pushedMetaDatas[0].itemName',pushedMetaDatas[0].itemName);
  // console.log('pushedMetaDatas[0].width',pushedMetaDatas[0].width);
  // console.log('pushedMetaDatas[0].contentType',pushedMetaDatas[0].contentType);
  // console.log('pushedMetaDatas[0].height',pushedMetaDatas[0].height);

  /*
  
   
    
     
  
  
  */



}

ArrayPush();




