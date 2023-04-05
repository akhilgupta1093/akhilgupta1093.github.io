import React, { Component } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Blog from './Blog';

class AppWrapper extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </HashRouter>
        );
    }
}

export default AppWrapper;