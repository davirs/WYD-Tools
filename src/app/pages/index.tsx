// npm
import React from 'react';
import styled from 'styled-components';
import { Redirect, Switch, Route } from 'react-router-dom';

// pages
import Home from './Home';
import Serverlist from './Serverlist';

// components
import PathCleaner from '../components/PathCleaner';
import PathUpdater from '../components/PathUpdate';
import Topnav from '../components/Topnav';
import Footer from '../components/Footer';

// types
interface Item {
	name: string;
	path: string;
	Component: Function;
}

// style
const S = {
	Pages: styled.div`
		background: rgba(255, 255, 255, 1);
		overflow-y: scroll;
		overflow-x: auto;
		position: fixed;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
	`,

	Paper: styled.div`
		flex-flow: column;
		min-height: 100%;
		display: flex;
		width: 100%;
	`,

	Content: styled.div`
		flex: 1 1 auto;

		position: relative;
		display: block;
	`,
};

// pages
export function getPages(): Item[] {
	return [
		{
			name: 'Home',
			path: '/home',
			Component: Home,
		},
		{
			name: 'Serverlist',
			path: '/server-list',
			Component: Serverlist,
		},
	];
}

// default
export default function Pages() {
	return (
		<S.Pages>
			<S.Paper>
				<Topnav />

				<S.Content>
					<Switch>
						{getPages().map(({ path, Component }, i) => (
							<Route key={i} path={path}>
								<PathCleaner />
								<PathUpdater />
								<Component />
							</Route>
						))}

						<Route>
							<Redirect to='/home' />
						</Route>
					</Switch>
				</S.Content>

				<Footer />
			</S.Paper>
		</S.Pages>
	);
}
