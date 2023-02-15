import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom';

const JobItem = ({ item }) => {

    const getDate = () => {
        const date = moment(item?.created_at, 'ddd MMM DD HH:mm:ss [UTC] YYYY');
        const formattedDate = date.format('YYYYMMDD');

        return formattedDate;
    }

    return (
        <div className="my-1">
            <Link to={`/detail/${item?.id}`}>
                <div className='flex justify-between'>
                    <div>
                        <div className='text-blue-500 font-medium'>{item?.title}</div>
                        <div>
                            <span className='text-slate-400 text-sm'>{item?.company} - </span>
                            <span className='text-lime-500 text-sm'>{item?.type}</span>
                        </div>

                    </div>
                    <div className='flex-col items-end'>
                        <div className='text-sm'> {item?.location}</div>
                        <div className='text-sm text-slate-400 float-right'>{moment(getDate(), "YYYYMMDD").fromNow()}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default JobItem