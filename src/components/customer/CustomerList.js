import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"

export const CustomerList = () => {
    const {customers, getCustomers} = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <article className="customers">
        {
            customers.map(customer => {
                return <section key={customer.id} className="customer">
                    <div><h3>{customer.name}</h3></div>
                    <div>{customer.address}</div>
                </section>
            })
        }
        </article>
    )
}