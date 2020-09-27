import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
:root {
  --text-primary: #0A0A16;
  --text-intermediate: #52525D;
  --color-on-background-intermediate: #191919;
  --title-background: #32323D;
  --divider-secondary: #B2B2BA;
  --text-primary-opacity: rgba(10, 10, 22, 0.3);
  --divider-primary: #EAEAEA;
  --scroller-shadow-color: rgba(25, 25, 34, 0.12);
  --background-contrast: #EAEAEA;
  --background-intermediate: #F4F4F4;
  --border-box: #F8F8F9;
  --fade-image: rgba(255, 255, 255, 0.8);
  --background-primary: #FFFFFF;
  --color-accent-hover: #CA2A36;
  --color-accent: #EF5466;
  --left-bar-width: 210px;
  --top-bar-height: 50px;
  --bottom-bar-height: 80px;
  --top-shadow: 0px 4px 6px 3px rgba(25, 25, 34, 0.16);
}

input {
  border: 0;
  font-family: Open sans;
  font-size: 14px;
  width: 100%;
  padding: 0 !important;
}

input::placeholder {
  font-family: Open sans;
  font-size: 14px;
  color:var(--text-intermediate);
}

textarea {
    border: none !important;
    outline: none !important;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
    resize: none !important; /*remove the resize handle on the bottom right*/
    white-space: nowrap !important;
    overflow:hidden !important;
}

* {
    outline: 0 !important;
}

::-webkit-scrollbar {
  width: 4px;
}

// ::-webkit-scrollbar-track {
//   background: #f1f1f1;
// }

::-webkit-scrollbar-thumb {
  background: var(--divider-secondary);
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
	font-family: 'Open Sans';
	background-color: var(--background-primary);
	margin: 0;
	color: var(--text-primary);
	font-size: 14px;
	/*padding-top: 40px;*/
	user-select: none;
}

video:focus{
  	outline:none;
}

.react-player{
	position: absolute;
}

.inner-slider-custom{
  display: flex;
  color: red;
}

.slick-track{
  display: flex !important;
}

.slick-slider{
  overflow: hidden !important;
}

html {
    scroll-behavior: smooth;
}

`;

export default Style;
