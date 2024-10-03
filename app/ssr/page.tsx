import React from 'react'

const Ssr = () => {
    return (
        <div className='w-9/12 m-40 mx-auto my-64'>
            <div className='font-bold text-[3vmax] mb-5'>2. SSR (Server-Side Rendering)</div>
            <div className='text-1xl font-bold'>
            •	<b>Definition:</b> The HTML is generated on the server for each request. The server processes the request, fetches the necessary data, and sends a fully rendered page to the client. <br />
            •	<b>Use Case:</b> Best for applications that require real-time data or SEO-friendly content since search engines can easily index the fully rendered HTML.
            </div>
        </div>
    )
}
export default Ssr