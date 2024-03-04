//import necessary modules from Remix and EdgeDB
import type { MetaFunction } from "@remix-run/node"
import { Form } from "@remix-run/react"
import { useState } from "react";

//Define the page metadata (title)
export const meta: MetaFunction = () => [{ title: "Project 1: Home Town Schools" }]

export default function Index() {
  // Initialize form state using React's useState hook
  const [formData, setFormData] = useState({
    name: '',
    seniorSchool: '',
    juniorSchool: '',
    emailDomain: '',
    nameOrNumber: '',
    street:'',
    street2:'',
    townOrCity:'',
    region:'',
    addressCode:'',
    country:''
  });

  // Handle input changes and update form state
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="font-bold text-center">Add School</h1>
        <Form className="space-y-6" action="/school" method="post">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="name">School Name:</label>
            <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
          
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="seniorSchool">Senior School?</label>
            <input type="checkbox"  id="seniorSchool"  name="seniorSchool" value={formData.seniorSchool} onChange={handleChange}/>  
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900"  htmlFor="juniorSchool">Junior School?</label>
            <input type="checkbox" id="juniorSchool" name="juniorSchool" value={formData.juniorSchool} onChange={handleChange}/>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="emailDomain">Email Domain:</label>
            <input type="text" name="emailDomain" id="emailDomain" value={formData.emailDomain} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>

          <h3 className="font-semibold text-center">Address</h3>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="nameOrNumber">Name or Number:</label>
            <input required type="text" name="nameOrNumber" id="nameOrNumber" value={formData.nameOrNumber} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="street">Street Line 1:</label>
            <input type="text" name="street" id="street"  value={formData.street} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="street2">Street Line 2:</label>
            <input type="text" name="street2" id="street2" value={formData.street2} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="townOrCity">Town/City:</label>
            <input required type="text" name="townOrCity" id="townOrCity" value={formData.townOrCity} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="region">Region:</label>
            <input type="text" name="region" id="region" value={formData.region} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="addressCode">Address Code:</label>
            <input required type="text" name="addressCode" id="addressCode" value={formData.addressCode} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="country">Country:</label>
            <input required type="text" name="country" id="country" value={formData.country} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>

          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Create School
          </button>
        </Form>
      </div>
    </>
  )
}
