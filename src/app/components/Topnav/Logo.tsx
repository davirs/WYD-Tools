// npm
import React from 'react';
import styled from 'styled-components';

// style
const S = {
	Logo: styled.div`
		flex: 0 0 auto;

		margin: auto;
		margin-left: 0;

		font-weight: 700;
		font-size: 32px;
	`,
};

// default
export default function Logo() {
	return <S.Logo>WYD Tools</S.Logo>;
}
