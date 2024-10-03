import React from 'react'

const Csr = () => {
    return (
        <div className='w-9/12 m-40 mx-auto my-64'>
            <div className='font-bold text-[3vmax] mb-5'>1. CSR (Client-Side Rendering)</div>
            <div className='text-1xl font-bold'>
                •	<b>Definition:</b> Rendering occurs in the browser after the initial HTML is loaded. Data is fetched on the client side, typically using JavaScript, allowing for dynamic and interactive experiences.<br />
                •	<b>Use Case:</b> Ideal for highly interactive applications where the content changes frequently based on user actions.
            </div>
        </div>
    )
}

export default Csr