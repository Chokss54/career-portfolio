import ReactDOM from 'react-dom';
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from 'react-router-dom';
import Home from './components/Home.js';
import Intake from './components/Intake.js';
import TMT from './components/TMT.js';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "intake",
        element: <Intake />
    },
    {
        path: "TMT",
        element: <TMT />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
