//import necessary modules from Remix and EdgeDB
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import * as edgedb from 'edgedb';

//Define the school for the School type
interface School{
    id : string,
    name: string,
    seniorSchool?: boolean,
    juniorSchool?: boolean,
    emailDomain?: string,
    address:{
        id: string,
        nameOrNumber: string,
        street?: string,
        street2?: string,
        townOrCity: string,
        region?: string,
        addressCode: string,
        country: string,
    }
}

export async function action({request}: ActionFunctionArgs) {

    // Create a client to connect to the edgeDB database
    const client = await edgedb.createClient();
  
    // Get form data from the request
    const formData = await request.formData();
  
    // Get the form data from the request
    let name = formData.get('name');
    let seniorSchool, juniorSchool;
    let seniorSchoolValue = formData.get('seniorSchool') ;
    let juniorSchoolValue = formData.get('juniorSchool') ;
    
    // Convert the checkbox values to boolean 
    // Check if the school is a senior or junior school
    if (seniorSchoolValue){ seniorSchool = true}else{seniorSchool=false}
    if (juniorSchoolValue){juniorSchool = true}else{juniorSchool=false}
    
    let emailDomain = formData.get('emailDomain');
    let nameOrNumber = formData.get('nameOrNumber') ;
    let street = formData.get('street');
    let street2 = formData.get('street2');
    let townOrCity = formData.get('townOrCity') ;
    let region = formData.get('region');
    let addressCode = formData.get('addressCode');
    let country = formData.get('country');

    try {
        // Insert a new school object into the database
        let school:Array<School> = await client.query(`
            INSERT School {
                name := <str>$name,
                seniorSchool := <bool>$seniorSchool,
                juniorSchool := <bool>$juniorSchool,
                emailDomain := <str>$emailDomain
            }`, {name, seniorSchool, juniorSchool, emailDomain});

        //  Insert a new Address object and link it to the School
    await client.query(`
        INSERT Address {
            nameOrNumber := <str>$nameOrNumber,
            street := <str>$street,
            street2 := <str>$street2,
            townOrCity := <str>$townOrCity,
            region := <str>$region,
            addressCode := <str>$addressCode,
            country := <str>$country,
            organisation := <Organisation>$school
    }`, {nameOrNumber, street, street2, townOrCity, region, addressCode, country, school: school[0].id});
    }catch(error){
        // Log any errors that occur during the query
        console.error("Error querying the database:", error);
    } finally {
        // Close the database connection
        await client.close();
    }

    //redirect to the page that displays all of Ishea's home town schools
    return redirect("/homeTownSchools")
}