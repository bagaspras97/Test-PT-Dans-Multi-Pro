import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft } from 'react-feather';

import './detail.css'
import Loader from '../components/Loader';

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const baseUrl = 'http://dev3.dansmultipro.co.id/api/recruitment/positions';

    const [detailData, setDetailData] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(baseUrl + '/' + id)
            .then((response) => {
                setDetailData(response.data);
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                console.error(error);
            });
    }, [])

    const back = () => {
        navigate('/')
    }

    return (
        <div className="m-4 detail">
            <div className="flex items-center mb-2">
                <ArrowLeft size={16} className="mr-1 hover:cursor-pointer text-slate-400" onClick={back} />
                <span className="text-blue-500 font-medium">Back</span>
            </div>
            {loading ?
                <Loader detail={true} />
                :
                (
                    <div className="rounded overflow-hidden shadow p-2">
                        <div className="text-sm text-slate-400">{detailData.type} / {detailData.location}</div>
                        <div className="text-xl mb-2 text-blue-900 font-bold">{detailData.title}</div>
                        <hr />
                        <div className="grid grid-cols-3 gap-4">
                            <div className='col-span-2 p-2 description' dangerouslySetInnerHTML={{ __html: detailData.description }} />
                            <div>
                                <div className='p-2'>
                                    <div className='border-4 border-gray-300 rounded'>
                                        <div className="rounded overflow-hidden shadow-lg">
                                            <div className="px-6 py-4 detail-company">
                                                <div className="font-bold text-xl mb-2">{detailData.company}</div>
                                                <img className="w-full" src="https://media.istockphoto.com/id/1348212541/photo/red-play-icon-button-on-white-background-social-media-and-sign-concept-3d-illustration.jpg?b=1&s=170667a&w=0&k=20&c=-8wc9kvDbL1P-j-1I5cpFDIo9z_mISgylwYdfDzy138=" alt="Company Logo" />
                                                <a href={detailData.company_url} target="_blank">
                                                    {detailData.company_url}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='border-4 border-gray-300 rounded'>
                                        <div className="rounded overflow-hidden shadow-lg bg-yellow-50">
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">How to apply</div>
                                                <div className="how-to-apply" dangerouslySetInnerHTML={{ __html: detailData.how_to_apply }} ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Detail