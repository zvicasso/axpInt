import type { MetaFunction } from "@remix-run/node"
import { Form } from "@remix-run/react"

export const meta: MetaFunction = () => [{ title: "Project 1: Home Town Schools" }]

export default function Index() {
  return (
    <>
      <div>
        <h1>Add School:</h1>
      </div>
      <Form action="/school" method="post">
        <div>
          <label htmlFor="name">School Name:</label>
          <input required type="text" id="name" name="name"/>
        </div>
        
        <div>
          <label htmlFor="seniorSchool">Senior School?</label>
          <input type="checkbox"  id="seniorSchool"  name="seniorSchool"/>  
        </div>

        <div>
          <label htmlFor="juniorSchool">Junior School?</label>
          <input type="checkbox" id="juniorSchool" name="juniorSchool"/>
        </div>

        <div>
          <label htmlFor="emailDomain">Email Domain:</label>
          <input type="text" name="emailDomain" id="emailDomain" defaultValue="" />
        </div>

        <p>Address</p>
        <div>
          <label htmlFor="nameOrNumber">Name or Number</label>
          <input required type="text" name="nameOrNumber" id="nameOrNumber" />
        </div>

        <div>
          <label htmlFor="street">Street Line 1:</label>
          <input type="text" name="street" id="street"  defaultValue=""/>
        </div>

        <div>
          <label htmlFor="street2">Street Line 2:</label>
          <input type="text" name="street2" id="street" defaultValue=""/>
        </div>

        <div>
          <label htmlFor="townOrCity">Town/City:</label>
          <input required type="text" name="townOrCity" id="townOrCity"/>
        </div>

        <div>
          <label htmlFor="region">Region:</label>
          <input type="text" name="region" id="region" defaultValue=""/>
        </div>

        <div>
          <label htmlFor="addressCode">Address Code:</label>
          <input required type="text" name="addressCode" id="addressCode" />
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <input required type="text" name="country" id="country" />
        </div>

        <button type="submit">Create School</button>
      </Form>
    </>
  )
}
