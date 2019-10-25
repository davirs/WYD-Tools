// npm
import React from 'react';
import styled from 'styled-components';
import { RouteProps, Redirect, Switch, Route } from 'react-router-dom';

// pages
import Home from './Home';

// components
import Topnav from '../components/Topnav';
import Footer from '../components/Footer';
import Serverlist from './Serverlist';

// types
interface Item extends RouteProps {
	name?: string;
}

// style
const S = {
	Pages: styled.div`
		background: rgba(245, 245, 245, 1);
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
			path: '/home',
			children: Home,
			name: 'Home',
		},
		{
			path: '/server-list',
			children: Serverlist,
			name: 'Serverlist',
		},
		{
			path: '',
			children: () => <Redirect to='/home' />,
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
						{getPages().map((props, i) => (
							<Route key={i} {...props} />
						))}
					</Switch>
				</S.Content>

				<Footer />
			</S.Paper>
		</S.Pages>
	);
}
