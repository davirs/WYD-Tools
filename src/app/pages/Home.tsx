// npm
import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

// default
export default function Home() {
	return (
		<Container>
			<Row>
				<Col xs={12}>
					<Card>
						<CardHeader>Sobre o projeto</CardHeader>
						<CardBody>
							<p>
								O <b>WYD Tools</b> está sendo desenvolvido para auxiliar a comunidade na edição de arquivos do seu servidor de WYD, proporcionando uma plataforma online e gratuita onde pode-se encontrar as ferramentas para tais edições.
							</p>
							<br />
							<br />
							<p>
								Somos extremamente gratos por qualquer opinião, então faça parte do nosso{' '}
								<a href='http://bit.ly/WYDPrivate' target='_blank'>
									Discord
								</a>{' '}
								agora mesmo!
							</p>
							<br />
							<br />
							<p className='mb-0'>
								Atenciosamente, equipe <b>WYD Tools</b>.
							</p>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
