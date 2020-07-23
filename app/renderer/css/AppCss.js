import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
:root {
	--letter-spacing: 0.05em;
	--gutter: 1.8rem;

	--main-color-1: #14181c;
	--main-color-1-1: rgba(20, 24, 28, 0.1);
	--main-color-1-5: rgba(20, 24, 28, 0.5);
	// --main-color-2: #21D07A;
	--main-color-2: #83A697;
	--main-color-3: #FFFFFF;
	--main-color-4: #343742;

	--good-color: rgba(33, 208, 122, 1);
	--medium-color: rgba(210, 213, 49, 1);
	--bad-color: rgba(219, 35, 96, 1);

	--main-text-color: #FFFFFF;

	--dark-letter-color: #14181c;
	--grey-letter-color: #9ab;
	// --green-kiwi-color: #abb033;
	--green-kiwi-color: #d9c786;
	--golden-kiwi-color: #d9c786;

	--dark-color: #2A2C34;
	--dark-white-color: #343742;
	--dark-white-t-color: rgba(52, 55, 66, 0.5);
	--black-color: #000000;
	--classic-color: #FFFFFF;
	--dark-blue-color: #032541;

	--good-t-color: rgba(33, 208, 122, 0.5);
	--medium-t-color: rgba(210, 213, 49, 0.5);
	--bad-t-color: rgba(219, 35, 96, 0.5);
	--lightGrey: 227,227,227;
	--tmdbDarkBlue: 3,37,65;
	--tmdbLightBlue: 1,180,228;
	--tmdbLighterGreen: 192,254,207;
	--tmdbLightGreen: 30,213,169;
	--tmdbLogoGreen: 144,206,161;
	--tmdbLogoOrange: 253,193,112;
	--tmdbLogoRed: 217,59,99;
	--accountSilver: 149,149,149;
	--accountPink: 234,20,140;
	--accountPurple: 128,91,231;
	--accountGreen: 1,210,119;
	--accountTeal: 1,198,172;
	--accountLightBlue: 1,180,228;
	--accountBlue: 1,119,210;
	--accountOrange: 210,119,1;
	--accountYellow: 210,144,1;
	--accountRed: 212,2,66;
	--imageBorderRadius: 8px;
}

* {
    outline: 0 !important;
}

::-webkit-scrollbar {
  width: 10px;
}

// ::-webkit-scrollbar-track {
//   background: #f1f1f1;
// }

::-webkit-scrollbar-thumb {
  background: var(--main-color-2);
}

a:link, a:visited {
	color: inherit;
	text-decoration: none;
	cursor: pointer;
}

a:link:active, a:visited:active {
	color: inherit;
}

body {
	font-family: 'Source Sans Pro';
	background-color: var(--main-color-1);
	margin: 0;
	color: var(--main-color-3);
	font-size: 18px;
	/*padding-top: 40px;*/
}

.custom-load-bar{
	width: 100%;
	background-color: var(--main-color-2);
}

#input-id::placeholder{
	color:var(--main-color-3);
}

video:focus{
  	outline:none;
}

.react-player{
	position: absolute;
}

.MuiLinearProgress-colorPrimary {
    background-color: white !important;
}

.MuiLinearProgress-barColorPrimary {
    background-color: var(--main-color-2) !important;
}

`;

export default Style;
