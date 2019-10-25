// npm
import React from 'react';
import styled from 'styled-components';

// style
const S = {
	Menu: styled.div`
		flex: 0 0 auto;

		margin: auto;
		margin-right: 0;
	`,
};

// default
export default function Menu() {
	return <S.Menu></S.Menu>;
}
