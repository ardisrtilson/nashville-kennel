import React, { useContext, useEffect } from "react"
import {LocationContext} from "./LocationProvider"

export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext)

useEffect(() => {
    getLocations()
}, [])

return (
    <article className="locations">
        {
            locations.map(location => {
                return <section key={location.id} className="location">
                    <div><h3>{location.name}</h3></div>
                    <div>{location.address}</div>
                </section>
            })
        }
    </article>
)
}