import React, { useContext, useRef, useEffect } from "react"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animals.css"

export const AnimalForm = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { getAnimals, addAnimals } = useContext(AnimalContext)
    const { customers, getCustomers} = useContext(CustomerContext)

    const name = useRef(null)
    const location = useRef(null)
    const animal = useRef(null)
    const breed = useRef(null)
    const owner= useRef(null)

    useEffect(() => {
        getAnimals()
        getLocations()
        getEmployees()
        getCustomers()
    }, [])

    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)
        const animalId = parseInt(animal.current.value)
        const ownerId = parseInt(owner.current.value)
        const breedId = breed.current.value

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimals({
                name: name.current.value,
                locationId,
                animalId,
                breedId,
                ownerId
            })
            .then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Breed: </label>
                    <input type="text" id="animalBreed" ref={breed} required autoFocus className="form-control" placeholder="Animal breed" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Taken Care of By: </label>
                    <select defaultValue="" name="animal" ref={animal} id="employeeAnimal" className="form-control" >
                        <option value="0">Select an employee</option>
                        {employees.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Owner">Owner: </label>
                    <select defaultValue="" name="owner" ref={owner} id="employeeAnimal" className="form-control" >
                        <option value="0">Select an employee</option>
                        {customers.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                Save Animal
            </button>
        </form>
    )
}