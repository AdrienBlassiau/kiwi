import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
	.card-loader-style {
		width: 150px;
		min-width: 150px;
		background: transparent;
		border: none;
		box-shadow: none;
		margin-top: 0;
		overflow: visible;
		padding: 10px;
		cursor: pointer;
	}

	.popular-movies-list {
		display: flex;
		flex-wrap: wrap;
		margin:10px;
		overflow: auto;
	}
`;

export default Style;
