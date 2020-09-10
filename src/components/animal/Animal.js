import React from "react"
import "./Animals.css"
import { Link } from "react-router-dom"

export const Animal = ({animal}) => {
            return <section className="animal">
                <h3><Link to={`/animals/${animal.id}`}>{animal.name}</Link></h3>
                <div>{animal.breedId}</div>
            </section>
        }