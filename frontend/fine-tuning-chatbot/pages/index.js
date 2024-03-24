import React, { useState, useEffect } from 'react'

// config.js
const BACKEND_URL = 'http://127.0.0.1:8000/';

const Home = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch(`${BACKEND_URL}api/hello`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h1>어서오세용!!!</h1>
            <p>{data}</p>
        </div>
    );
};

export default Home;