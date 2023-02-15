import React, { useState } from 'react'

const Filter = ({ params, setParams, setIsFilterActive }) => {
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [isFulltime, setIsFulltime] = useState(false)

    const submitFilter = () => {
        setParams({ ...params, description, location, full_time: isFulltime, })
        setIsFilterActive(true)
    }

    const resetFilter = () => {
        setDescription('')
        setLocation('')
        setIsFulltime(false)
        setParams({ ...params, page: 1, description: '', location: '', full_time: false })
        setIsFilterActive(false)
    }

    return (
        <div className='mx-4 mb-4 my-2 flex'>
            <div className='columns-lg mr-2' >
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Job Description
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    type="text"
                    placeholder="Filter by title, benefits, companies, expertise"
                    onChange={(e) => setDescription(e.target.value.toLocaleLowerCase())}
                    value={description}
                />
            </div>
            <div className='columns-lg mr-2'>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                    Location
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="locatiom"
                    type="text"
                    placeholder="Filter by city, state, zip code or country"
                    onChange={(e) => setLocation(e.target.value.toLocaleLowerCase())}
                    value={location}
                />
            </div>
            <div className='columns-lg m-auto flex items-center mb-0'>
                <label className='mr-2 font-medium' htmlFor="fullTime">
                    <input type="checkbox" id="fullTime" className='mr-2' onChange={() => setIsFulltime(!isFulltime)} />
                    Full Time Only
                </label>
                <button
                    className="mr-2 text-white bg-gray-400 hover:bg-gray-400font-bold py-2 px-4 rounded inline-flex items-center"
                    type="button"
                    onClick={submitFilter}
                >
                    Submit
                </button>
                <button
                    className=" text-white bg-red-500 hover:bg-gray-400font-bold py-2 px-4 rounded inline-flex items-center"
                    type="button"
                    onClick={resetFilter}
                >
                    Reset Filter
                </button>
            </div>
        </div>
    )
}

export default Filter