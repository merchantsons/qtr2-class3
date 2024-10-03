import React from 'react'

const Ssg = () => {
    return (
        <div className='w-9/12 m-40 mx-auto my-64'>
            <div className='font-bold text-[3vmax] mb-5'>3. SSG (Static Site Generation)</div>
            <div className='text-1xl font-bold'>
            •	<b>Definition:</b> Pages are generated at build time, creating static HTML files that can be served directly from a CDN. This results in fast load times since no server processing is required on each request.<br />
            •	<b>Use Case:</b> Ideal for content that doesn’t change often, like blogs, documentation, or marketing sites, where performance and SEO are crucial.

            </div>
        </div>
    )
}
export default Ssg