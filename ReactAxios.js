import React, { useState } from 'react';
import { useEffect } from "react";
import { axios } from "axios";
// 
function ReactAxios() {

    const [name, setName] = useState(null); //Using useEffect Snippet for Your First Data

    const [error, setError] = useState(null); //Using useEffect Snippet for setting and Catching Errors


    useEffect(() => {
        const url = 'http://localhost:8000/blogs';
        axios
            .get(url)
            .then(Response => {
                console.log(Response); //Write This If You Want To See Properties Of Your Response In The Console
                if (Response.ok) {
                    // Handle the response here
                    return Response.json();
                } else {
                    throw error('Connection Failed');
                }
            })

            .then(Data => {
                // Console log Data To see it in Your console
                setName(Data); //Write These To update your Data Inside Your Component
                setError(null);//We Write This To set the Error State To null If Our Data is succesfully Seen
            })
            .catch(Error => {
                console.log(Error); //Write This If You Want To Logout The Error Messge In The Console
                setError(error.message); //This code makes Our Error Message Visible To The use in Browser
            })
    }, [])  //Here is Where We Pass Our Dependency
    //The useEffect hook in React, is an array of values that determines when the effect function should be executed or Not.


    return (
        <div className='ReactAxios'>
            {<div> My Name is {name}</div>}
        </div>
    )
}

export default ReactAxios