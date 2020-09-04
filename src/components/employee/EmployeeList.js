import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <article className="employees">
        {
            employees.map(employee => {
                return <section key={employee.id} className="employee">
                    <div><h3>{employee.name}</h3></div>
                    <div>{employee.location}</div>
                </section>
            })
        }
        </article>
    )
}