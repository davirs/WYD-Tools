// npm
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// store
import store from './store';

// pages
import Pages from './pages';

// hot
if (module.hot) {
	module.hot.accept();
}

// render
ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<Pages />
		</HashRouter>
	</Provider>,
	document.querySelector('#hero'),
);
