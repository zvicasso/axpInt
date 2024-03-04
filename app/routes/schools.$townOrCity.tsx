// Import the necessary edgedb and Remix modules
import {  LoaderFunctionArgs, } from '@remix-run/node';
import { useSearchParams } from '@remix-run/react';
import * as edgedb from 'edgedb';


//Define the school for the School type
interface School{
    id : string,
    name: string,
    seniorSchool?: boolean,
    juniorSchool?: boolean,
    emailDomain?: string,
    address?:{
        id: string,
        nameOrNumber?: string,
        street?: string,
        street2?: string,
        townOrCity?: string,
        region?: string,
        addressCode?: string,
        country?: string,
    }[]
}

//Load schools in Harare from the database
export default async function schools({params}: LoaderFunctionArgs){
    // Create a client to connect to the edgedb database
    const client = await edgedb.createClient();
    
    // Declare an array to store the schools in Harare
    let schoolsInHarare:Array<School> = [];

    try {
        // Query the database for the schools in Harare using EdgeQL
        schoolsInHarare = await client.query(`
            SELECT School {
                id,
                name,
                seniorSchool,
                juniorSchool,
                emailDomain,
            } FILTER .address.townOrCity = $townOrCity;
        `,{townOrCity: params.townOrCity});
    
        //Log the result to the console for debugging purposes
        console.log(schoolsInHarare)
    } catch(error) {
        //display any errors in the console
        console.error("Error querying the database:", error);
    } finally {
        //Close the connection to the database
        await client.close();
    }

    // Call the HomeTownSchools function to render the list of schools in Harare
    return HomeTownSchools(schoolsInHarare);
}

// Define a function component that renders the schools in Harare
export function HomeTownSchools(schools:School[]){

    // If the schools are not loaded, return a loading message
    if (!schools){
        return <div>Loading schoools...</div>
    }
    // Iterate through an array of schools and render their names
    return(
        <>
            {schools?.map((school, index) => (
                <div key={index}>
                    <h2>{school?.name}</h2>
                </div>
            ))}
        </>
    )
}