// npm
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import Pages from './pages';

// hot
if (module.hot) {
	module.hot.accept();
}

// render
ReactDOM.render(
	<BrowserRouter basename='/WYD-Tools'>
		<Pages />
	</BrowserRouter>,
	document.querySelector('#hero'),
);
