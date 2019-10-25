// npm
import React from 'react';
import styled from 'styled-components';
import { RouteProps, Redirect, Switch, Route } from 'react-router-dom';

// pages
import Home from './Home';

// components
import Topnav from '../components/Topnav';
import Footer from '../components/Footer';

// types
type Item = RouteProps;

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
const pages: Item[] = [
	{
		path: '/home',
		children: Home,
	},
	{
		path: '/server-list',
		children: Home,
	},
	{
		path: '',
		children: () => <Redirect to='/home' />,
	},
];

// default
export default function Pages() {
	return (
		<S.Pages>
			<S.Paper>
				<Topnav />

				<S.Content>
					<Switch>
						{pages.map((props, i) => (
							<Route key={i} {...props} />
						))}
					</Switch>
				</S.Content>

				<Footer />
			</S.Paper>
		</S.Pages>
	);
}
