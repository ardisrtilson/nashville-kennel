import React from "react"

export const Animal = ({animal, customer, where}) => {
            return <section className="animal">
                <div><h3>{animal.name}</h3></div>
                <div>Name: {animal.name}</div>
                <div>Breed: {animal.breed}</div>
                <div>Owner: {customer.name}</div>
                <div>Owner Address: {customer.address}</div>
                <div>Location: {where.name}</div>
                <div>Location Address: {where.address}</div>
            </section>
        }