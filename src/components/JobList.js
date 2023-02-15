import React from 'react'
import JobItem from './JobItem';
import Loader from './Loader';

const JobList = ({ data, loading, params, setParams, isFilterActive }) => {

    const newData = data.filter((d) => d !== null)


    return (
        <div className="rounded overflow-hidden shadow mx-4 p-2">
            <div className='text-xl font-bold mb-2 text-blue-900'>{loading ? '' : isFilterActive ? `Showing ${newData.length} Jobs` : 'Job List'}</div>
            {loading ?
                < Loader detail={false} />
                :
                (
                    <>
                        {newData.map((item) => (
                            <>
                                <hr />
                                <JobItem item={item} key={item?.id} />
                            </>
                        ))}
                        {params.page === 1 && (
                            <div>
                                <button
                                    type="button"
                                    className="w-full mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                    onClick={() => setParams({ ...params, page: '', description: '', location: '', full_time: false, })}
                                >
                                    More Jobs
                                </button>
                            </div>
                        )}
                    </>
                )
            }
        </div >
    )
}

export default JobList