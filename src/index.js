import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';
import reportWebVitals from 'reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from 'pages/About';
import Coffee from 'pages/Coffee';
import Coffees from 'pages/Coffees';
import Error from 'Error';
import Home from 'pages/Home';
import Listicles from 'pages/Listicles';
import TvShow from 'pages/TvShow';
import TvShows from 'pages/TvShows';
import Writer from 'pages/Writer';
import Writers from 'pages/Writers';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/About', element: <About /> },
			{ path: '/Coffee', element: <Coffees /> },
			{ path: '/Coffee/:coffeeName', element: <Coffee /> },
			{ path: '/Home', element: <Home /> },
			{ path: '/Listicles', element: <Listicles /> },
			{ path: '/TV-Shows', element: <TvShows /> },
			{ path: '/TV-Shows/:tvShowName', element: <TvShow /> },
			{ path: '/Writers/:writerName', element: <Writer /> },
			{ path: '/Writers', element: <Writers /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
