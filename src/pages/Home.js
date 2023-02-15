import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Filter from '../components/Filter';
import JobList from '../components/JobList';

const Home = (p) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [params, setParams] = useState({
        page: 1,
        description: '',
        location: '',
        full_time: false
    })

    const navigate = useNavigate();

    const baseUrl = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json';
    const url = new URL(baseUrl);

    useEffect(() => {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            navigate('/');
        } else {
            navigate('/login')
        }
    }, [navigate]);


    useEffect(() => {
        const searchParams = new URLSearchParams(url.search);
        Object.keys(params).forEach((key) => searchParams.set(key, params[key]));
        url.search = searchParams.toString();

        setLoading(true)
        axios
            .get(url.href)
            .then((response) => {
                setData(response.data);
                // setData((prev) => [...prev, ...response.data]);
                setLoading(false)
            })
            .catch((error) => {
                console.error(error);
            });

    }, [params])

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // const handleScroll = async () => {
    //     if (
    //         window.innerHeight + document.documentElement.scrollTop + 1 >=
    //         document.documentElement.scrollHeight
    //     ) {
    //         setLoading(true);
    //         setParams((prev) => ({
    //             ...prev,
    //             page: prev.page + 1
    //         }));
    //     }
    // };

    return (
        <div className="App">
            <Filter {...p} params={params} setParams={setParams} />
            <JobList {...p} data={data} loading={loading} params={params} setParams={setParams} />
        </div >
    );
}

export default Home;
