import React from 'react'

const Isr = () => {
    return (
        <div className='w-9/12 m-40 mx-auto my-64'>
            <div className='font-bold text-[3vmax] mb-5'>4. ISR (Incremental Static Regeneration)</div>
            <div className='text-1xl font-bold'>
            •	<b>Definition:</b> Combines the benefits of static generation and server-side rendering. Pages are generated at build time and can be updated on-demand<br /> at a specified interval or on a per-request basis without rebuilding the entire site.<br />
            •	<b>Use Case:</b> Useful for large sites where some content needs to be updated frequently without losing the performance benefits of static pages.
            </div>
        </div>
    )
}
export default Isr