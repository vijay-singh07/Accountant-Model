import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

const QuickLinks = () =>{
    return(
        <>
            <nav className="pt-3 pl-5">
            <InertiaLink href="/transaction" className="bg-purple-400 hover:bg-red-400 text-white font-bold py-1 pr-4 pl-2 mr-10 rounded focus:shadow-outline">Create Transaction</InertiaLink>
            <InertiaLink href="/transaction-list" className="bg-purple-400 hover:bg-red-400 text-white font-bold py-1 px-4 mr-10 rounded focus:shadow-outline">Transaction List</InertiaLink>
            <InertiaLink href="/logout" className="bg-red-400 hover:bg-red-700 text-white font-bold py-1 px-4 ml-96 rounded focus:shadow-outline">Logout</InertiaLink>
            </nav>
        </>
    )
}

export default QuickLinks;