import React, { useEffect, useState } from 'react';

function Dashboard(){
    useEffect(()=>{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e309c39dbmsh48b7d29ce9a377dp1ef521jsnb37c82777b83',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
};

fetch('', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    },[])

    return (
        <>

        </>
    )
}


export default Dashboard
