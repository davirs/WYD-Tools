// npm
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import Pages from './pages';

// hot
if (module.hot) {
	module.hot.accept();
}

// render
ReactDOM.render(
	<HashRouter>
		<Pages />
	</HashRouter>,
	document.querySelector('#hero'),
);
