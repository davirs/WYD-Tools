// npm
import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

// style
const S = {
	Topnav: styled.div`
		box-shadow: 0 -30px 30px 30px rgba(0, 0, 0, 0.25);
		margin-bottom: 30px;
		position: sticky;
		z-index: 2000;
		left: 0;
		top: 0;
	`,
};

// default
export default function Topnav() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<S.Topnav>
			<Navbar color='dark' dark expand='md'>
				<Container>
					<NavbarBrand tag={Link} to='/home'>
						WYD Tools
					</NavbarBrand>

					<NavbarToggler onClick={() => setOpen(!open)} />

					<Collapse isOpen={open} navbar>
						<Nav className='ml-auto' navbar>
							<NavItem>
								<NavLink tag={Link} to='/home'>
									Home
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink href='https://github.com/Rechdan/WYD-Tools' target='_blank'>
									GitHub
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</S.Topnav>
	);
}
