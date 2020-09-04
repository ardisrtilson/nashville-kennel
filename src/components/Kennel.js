import React from "react"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider.js"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider.js"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider.js"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider.js"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <NavBar />
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <ApplicationViews>
        <h2>Animals</h2>
        <article className="animals">
        <LocationProvider>
        <CustomerProvider>
        <AnimalProvider>
                <AnimalList />
            </AnimalProvider>
        </CustomerProvider>
        </LocationProvider>
        </article>

        <h2>Employee</h2>
        <article className="employees">
        <EmployeeProvider>
                <EmployeeList />
            </EmployeeProvider>
        </article>

        <h2>Location</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>
        
        <h2>Customer</h2>
        <article className="customers">
        <CustomerProvider>
                <CustomerList />
        </CustomerProvider>
        </article>
        </ApplicationViews>
    </>
)