import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { Animal } from "../animal/Animal"
export const AnimalList = () => {

    const {animals, getAnimals} = useContext(AnimalContext)
    const {customers, getCustomers} = useContext(CustomerContext)
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getAnimals()
        getCustomers()
        getLocations()
    }, [])

    return (
    <article className="animals">
        {
    animals.map(animal => {
            const owner = customers.find(customer => customer.id === animal.customerId) || {}
            const where = locations.find(location => location.id === animal.locationId) || {}
            return  <Animal key={animal.id}
            where={where}
            customer={owner}
            animal={animal} />
})  
    }
            </article>
        )}