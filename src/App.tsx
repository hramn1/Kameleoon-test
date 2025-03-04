import React, {useEffect, useState} from 'react';
import './App.module.scss';
import {Dashboard} from "./pages/Dashboard/Dashboard";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {fetchAPI} from "./api/api";
import {Finalize} from "./pages/Finalize/Finalize"

import {Test, Site} from "./types/types";

function App() {
    const [tests, setTests] = useState<Test[]>([])
    const [sites, setSites] = useState<Site[]>([])
    useEffect(() => {
        fetchAPI('GET',
            'tests')
            .then(res => {
                setTests(res)
            })
            .catch((err) => console.log(err))

        fetchAPI('GET',
            'sites')
            .then(res => {
                setSites(res)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <Router>
            <Routes>
                <Route path='/' element={
                    <Dashboard
                        sites={sites}
                        tests={tests}
                    />}
                />
                <Route path='/:state/:id' element={<Finalize
                />}/>
            </Routes>
        </Router>
    );
}

export default App;
