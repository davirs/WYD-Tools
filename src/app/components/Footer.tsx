// npm
import React from 'react';
import { Container, Navbar, Row, Col } from 'reactstrap';

// default
export default function Footer() {
	return (
		<Navbar color='dark' dark expand='md'>
			<Container>
				<Row className='mx-auto'>
					<Col>
						<p className='text-center text-white m-0'>Desenvolvido por Nelson Faiçal Rechdan. &copy; 2019.</p>
					</Col>
				</Row>
			</Container>
		</Navbar>
	);
}
