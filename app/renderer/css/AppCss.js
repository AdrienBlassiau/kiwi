import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
:root {
	--letter-spacing: 0.05em;
	--gutter: 1.8rem;

	--main-text-color: #FFFFFF;

	--dark-letter-color: #14181c;
	--grey-letter-color: #9ab;
	--medium-letter-color: #456;
	// --green-kiwi-color: #abb033;
	--green-kiwi-color: #d9c786;
	--golden-kiwi-color: #d9c786;

	--dark-color: #2A2C34;
	--dark-white-color: #343742;
	--dark-white-t-color: rgba(52, 55, 66, 0.5);
	--black-color: #000000;
	--classic-color: #FFFFFF;
	--dark-blue-color: #032541;
	--good-color: rgba(33, 208, 122, 1);
	--medium-color: rgba(210, 213, 49, 1);
	--bad-color: rgba(219, 35, 96, 1);
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

::-webkit-scrollbar {
  width: 10px;
}

// ::-webkit-scrollbar-track {
//   background: #f1f1f1;
// }

::-webkit-scrollbar-thumb {
  background: var(--green-kiwi-color);
}


body {
	font-family: 'Source Sans Pro';
	background-color: var(--dark-letter-color);
	margin: 0;
	color: var(--main-text-color);
	font-size: 18px;
	/*padding-top: 40px;*/
}

a:link, a:visited {
	color: inherit;
	text-decoration: none;
	cursor: pointer;
}

a:link:active, a:visited:active {
	color: inherit;
}

// .main-top-bar-container{
// 	display: flex;
// 	width: 100%;
// 	height: 50px;
// 	-webkit-app-region:drag;
// 	background-color: rgba(0,0,0,0.1);
// 	color: white;
// 	height: 30px;
// 	padding: 0;
// 	height: 30px;
// 	line-height: 30px;
// 	justify-content: left;
// 	overflow: visible;
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	right: 0;
// 	box-sizing: border-box;
// 	width: 100%;
// 	font-size: 13px;
// 	padding: 0 16px;
// 	overflow: hidden;
// 	flex-shrink: 0;
// 	align-items: center;
// 	justify-content: center;
// 	user-select: none;
// 	zoom: 1;
// 	line-height: 22px;
// 	height: 30px;
// 	display: flex;
// 	z-index: 99999;
// }

// .main-top-bar {
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	width: 100%;
// }

// .tob-bar-action {
// 	-webkit-app-region: no-drag;
// 	display: flex;
// 	align-items: center;
// 	height: 100%;
// 	justify-content: space-between;
// }

.opacity-c {
	opacity: 0.5;
}

.opacity-c:hover {
	opacity: 1;
}


// .tob-bar-features {
// 	display: flex;
// }

// .custom-feature{
// 	padding: 0 10px;
// }

// .custom-feature-list{
// 	display: flex;
// 	opacity: 0.5;
// 	margin: 0 20px;
// }

.red-close {
	opacity: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #C75559;
	padding: 3px;
	color: #282D31;
	border-radius: 25px;
	width: 13px;
	height: 13px;
}

.red-close:hover {
	color: white;
}

// .custom-icon-bar {
// 	display: flex;
//     justify-content: center;
//     align-items: center;
// 	font-weight: bolder !important ;
// 	cursor: pointer;
// 	margin: 0 5px;
// }

.line-x{
	line-height: 0.1;
}

.box {
	display: flex;
	width: 100%;
	height:100%;
	justify-content: center;
	align-items: center;
}

.custom-perc {
	color: white;
	font-weight: bold;
	font-size: 40px;
}

.custom-sup{
	margin-bottom: 10px;
	font-size:10px;
	color: white;
	font-weight: bold;
}
.modal-master-block {
	display: none; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0,0,0); /* Fallback color */
	background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-display-block {
	display: block
}

.modal-display-none {
	display: none
}

.modal-master {
	background-color: #fefefe;
	margin: auto;
	width: 80%;
	color: black;
}

.close {
	color: #aaaaaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
}

.close:hover,
.close:focus {
	color: #000;
	text-decoration: none;
	cursor: pointer;
}

.modal-relative-master {

}

.modal-handler {
	display: flex;
	width: 100%;
	height: 100%;
}

.master-component {
	width: 100%;
    height: 100%;
	overflow: hidden;
	margin: 0px;
}

// .name-container {
// 	position: absolute;
//     top: 70px;
//     z-index: 1;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     color: white;
//     font-weight: bold;
//     font-size: 70px;
//     text-align: center;
//     font-weight: 100;
// }

// .logo-container {
// 	position: absolute;
//     top: 210px;
//     z-index: 1;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     color: white;
//     font-weight: bold;
//     font-size: 70px;
//     text-align: center;
//     font-weight: 100;
// }

// .logo-container-letter{
// 	font-weight: bold;
// }

.main-container {
	display: flex;
	justify-content: center;
	top: 450px;
	bottom: 0px;
	right: 0px;
	left: 0px;
	position: absolute;
	overflow: scroll;
	padding-bottom: 30px;
}

// .main-content-container{
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	margin-right: 10px;
// }

.main-container-mid-reduced {
	display: flex;
	justify-content: center;
	padding-bottom: 30px;

	top: 350px;
	bottom: 0px;
	right: 0px;
	left: 0px;
	position: absolute;
	overflow: scroll;
}

.main-container-reduced{
	top: 100px;
	bottom: 0px;
	right: 0px;
	left: 0px;
	position: absolute;
	overflow: auto;
}

.main-content-display-container {
	background-position: right -200px top;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	position: relative;
	z-index: 1;
}

.main-content-display-back {
	width: 100%;
}

.main-content-single-column {
	background: transparent;
	padding-top: 30px;
	padding-bottom: 30px;
	padding-left: 40px;
	padding-right: 40px;
	max-width: 1300px;
	width: 100%;
	padding-top: 30px;
	padding-bottom: 30px;
	z-index: 0;
	box-sizing: border-box;
}

.main-content-data-container {
	display: flex;
	flex-wrap: nowrap;
}

.poster-wrapper {
	display: flex;
	align-items: center;
	height: auto;
	border-width: 0px;
	min-width: 300px;
	width: 300px;
	overflow: hidden;
	border-radius: var(--imageBorderRadius);
}

.main-content-poster {
	width: 100%;
	min-width: 100%;
	height: 100%;
}

.main-content-poster-content {
	display: block;
	width: 100%;
	min-width: 100%;
	border-width: 0px;
	outline: none;
}

.poster-more-display{
	display: block;
	min-width: 300px;
	width: 300px;
	height: 450px;
	position: relative;
	top: 0;
	left: 0;
}

.poster-back-data-container {
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	background-color: rgba(var(--tmdbDarkBlue), 1);
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom-right-radius: var(--imageBorderRadius);
	border-bottom-left-radius: var(--imageBorderRadius);
	color: #fff;
	box-sizing: border-box;
}

.poster-back-data {
	width: 100%;
	height: 60px;
	max-height: 60px;
	display: flex;
	align-items: stretch;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;
	color: #fff;
}

.poster-button {
	display: flex;
	justify-content: center;
	width: 100%;
	margin: 0;
	padding: 0;
	color: #fff;
}

.poster-text {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	align-content: center;
	margin: 0;
	padding: 0;
	color: #fff;
}

.data-wrapper-container {
	display: flex;
}

.data-wrapper {
	color: white;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	align-content: center;
	box-sizing: border-box;
	padding-left: 40px;
}

.data-wrapper-title{
	width: 100%;
	margin-bottom: 24px;
	display: flex;
	flex-wrap: wrap;
}

.data-wrapper-title-text{
	width: 100%;
	margin: 0;
	padding: 0;
	font-size: 2.2rem;
	font-weight: 600;
}

.data-wrapper-title-text-content{
	color: white;
	font-weight: 700;
}

.data-wrapper-title-text-date{
	opacity: 0.8;
	font-weight: 400;
	font-size: 2.2rem;
	color: white;
}

.data-wrapper-title-facts{
	display: flex;
	color: white;
}


.data-wrapper-title-facts-certif{
	border: 1px solid rgba(100.00%, 100.00%, 100.00%, 0.60);
	color: rgba(100.00%, 100.00%, 100.00%, 0.60);
	display: inline-flex;
	white-space: nowrap;
	align-items: center;
	align-content: center;
	padding: 0.06em 4px 0.15em 4px !important;
	line-height: 1;
	border-radius: 2px;
	margin-right: 7px;
}

.data-wrapper-title-facts-relea{
	color: white;
	position: relative;
	top: 0;
	left: 0;
	padding-left: 0;
}

.data-wrapper-title-facts-relea::before{
	content: '';
	font-size: 1.1em;
	line-height: 1;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 7px;
	display: inline-flex;
	align-content: center;
	align-items: center;
}

.data-wrapper-title-facts-genre{
	color: white;
	padding-left: 20px;
	position: relative;
	top: 0;
	left: 0;
}

.data-wrapper-title-facts-genre::before{
	color: white;
	font-size: 1.1em;
	line-height: 1;
	content: '•';
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 7px;
	display: inline-flex;
	align-content: center;
	align-items: center;
}

.data-wrapper-title-facts-runtime{
	color: white;
	padding-left: 20px;
	position: relative;
	top: 0;
	left: 0;
}

.data-wrapper-title-facts-runtime::before{
	color: white;
	font-size: 1.1em;
	line-height: 1;
	content: '•';
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 7px;
	display: inline-flex;
	align-content: center;
	align-items: center;
}

.data-wrapper-title-facts-status{
	color: white;
	padding-left: 20px;
	position: relative;
	top: 0;
	left: 0;
	display: flex;
    align-items: center;
}

.circle-status {
	height: 10px;
	width: 10px;
	border-radius: 50%;
	margin: 0 10px;
}

.circle-status-container {
	display: flex;
}

.data-wrapper-infos{
	position: relative;
	margin-bottom: 20px;
	width: 100%;
	height: 68px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	list-style-type: none;
}

.data-wrapper-infos-play{
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items:center;
}

.button-play {
  border-style: solid;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-width: 20px 0px 20px 30px;
  border-color: transparent transparent transparent white;
}

.circle-around-play{
	background-color: var(--dark-blue-color);
    border-radius: 50%;
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: 5px 2px 10px -4px rgba(0,0,0,0.75);
  	-moz-box-shadow: 5px 2px 10px -4px rgba(0,0,0,0.75);
  	box-shadow: 5px 2px 10px -4px rgba(0,0,0,0.75);
  	cursor: pointer;
}

.circle-around-play:hover{
	opacity: 0.8;
}

.circle-around-dont-play{
	background-color: var(--dark-blue-color);
	opacity: 0.5;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: 5px 2px 10px -4px rgba(0,0,0,0.75);
  	-moz-box-shadow: 5px 2px 10px -4px rgba(0,0,0,0.75);
  	box-shadow: 5px 2px 10px -4px rgba(0,0,0,0.75);
}

.circle-status-pending{
	background-color: var(--medium-color);
}

.circle-status-ok{
	background-color: var(--good-color);
}

.circle-status-nok{
	background-color: var(--bad-color);
}

.data-wrapper-resume{
	width: 100%;
	color: white;
}

.chart-block {
	background: transparent;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	height: 68px;
}

.chart-text {
	font-weight: 700;
	margin-left: 6px;
	white-space: pre-line;
}

.tag-line-master {
	margin-bottom: 0;
	font-size: 1.1em;
	font-weight: 400;
	font-style: italic;
	opacity: 0.7;
	width: 100%;
	margin: 0 0 8px 0;
	margin-bottom: 8px;
}

.overview-text {
	margin-top: 10px;
	padding: 0;
	color: white;
	box-sizing: border-box;
	width: 100%;
	margin: 0 0 8px 0;
	margin-top: 0px;
	font-weight: 600;
	font-size: 1.3em;
}

.overview-section-text {
	color: white;
}

.people-no-image {
	margin-top: 20px !important;
	justify-content: flex-start;
	flex-wrap: wrap;
	list-style-type: none;
	list-style-position: inside;
	margin: 0;
	padding: 0;
	display: flex;
	position: relative;
	top: 0;
	left: 0;
}


.profile {
	background-color: transparent;
	height: auto;
	margin-bottom: 0;
	margin-top: 10px;
	width: 33%;
	flex-basis: 33%;
	text-align: left;
	margin-right: 0;
	box-sizing: border-box;
	padding-right: 20px;
	min-width: 140px;
	box-sizing: border-box;
	list-style-type: none;
	list-style-position: inside;
}

.profile-name {
	font-weight: bold;
	font-size: 1em;
	margin: 0;
	padding: 0;
	overflow: hidden;
	text-overflow: ellipsis;
}

.character {
	padding: 0;
	font-size: 0.9em;
	margin: 0;
	overflow: hidden;
	text-overflow: ellipsis;
}

.card-main-style-min {
	position: relative;
	width: 75px;
	min-width: 75px;
	background: transparent;
	border: none;
	box-shadow: none;
	margin-top: 0;
	overflow: visible;
	padding: 5px;
	cursor:pointer;
}

.card-main-style {
	position: relative;
	width: 150px;
	min-width: 150px;
	// width: 75px;
	// min-width: 75px;
	background: transparent;
	border: none;
	box-shadow: none;
	margin-top: 0;
	overflow: visible;
	padding: 5px;
	cursor:pointer;
}

.card-main-style:hover {
	border-radius: 5px;
	background-color: var(--dark-white-color);
}

.card-main-style:hover .image {
	filter: brightness(70%);
}

.movie-title-infos{
	position: absolute;
	font-size: 10px;
	top: -15px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    text-align: center;
    background-color: var(--medium-letter-color);
    color: white;
    padding: 5px;
    border-radius: 4px;
}

.movie-title-relative{
	position: relative;
}

.movie-title-relative:after {
    content:'';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    width: 0;
    height: 0;
    border-top: solid 10px var(--medium-letter-color);
    border-left: solid 10px transparent;
    border-right: solid 10px transparent;
}

.image-container {
	border-radius: 4px;
	width: 100%;
	min-height: calc(150px * 1.5);
	height: calc(150px * 1.5);
	// min-height: calc(75px * 1.5);
	// height: calc(75px * 1.5);
	overflow: hidden;
	-webkit-box-shadow: 0px 0px 0px 1px rgba(255,255,255,0.25);
	-moz-box-shadow: 0px 0px 0px 1px rgba(255,255,255,0.25);
	box-shadow: 0px 0px 0px 1px rgba(255,255,255,0.25);
}

.image-container-min {
	border-radius: 4px;
	width: 100%;
	// min-height: calc(150px * 1.5);
	// height: calc(150px * 1.5);
	min-height: calc(75px * 1.5);
	height: calc(75px * 1.5);
	overflow: hidden;
	-webkit-box-shadow: 0px 0px 0px 1px rgba(255,255,255,0.25);
	-moz-box-shadow: 0px 0px 0px 1px rgba(255,255,255,0.25);
	box-shadow: 0px 0px 0px 1px rgba(255,255,255,0.25);
}

.wrapper {
	width: 100%;
	height: 100%;
	position: relative;
	top: 0;
	left: 0;
}

.image-link{
	display: inline-block;
	width: 100%;
	height: 100%;
}

.image {
	width: 100%;
	height: 100%;
	min-width: 1px;
	min-height: 1px;
	outline: none;
	box-sizing: border-box;
	border: 0;
}

.data-container-master {
	width: 100%;
	padding: 26px 10px 12px 10px;
	padding-bottom: 12px;
	position: relative;
	white-space: normal;
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	flex-wrap: wrap;
}

.data-container {
	white-space: normal;
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	flex-wrap: wrap;
	font-size: 16px;
}

.movie-title {
	font-weight: bold;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 150px;
}

.consensus-tight {
	position: absolute;
	top: -25px;
	left: 10px;
	width: 180px;
	display: inline-block;
	transition: transform .2s;
	transform: scale(1);
}

.outer-ring {
	margin-right: 0;
	width: 38px;
	height: 38px;
	padding: 2px;
	display: inline-block;
	width: 68px;
	height: 68px;
	border-radius: 50%;
	padding: 4px;
	background-color: #081c22;
}
.card-loader-style {
	width: 150px;
	min-width: 150px;
	background: transparent;
	border: none;
	box-shadow: none;
	margin-top: 0;
	overflow: visible;
	padding: 5px;
	cursor: pointer;
}

.popular-movies-list {
	display: flex;
	flex-wrap: wrap;
	margin: 30px 10px;
	width: 1600px;
	height: fit-content;
}

.invisible-item {
	width: 150px;
	height: 225px;
	visibility: hidden;
}

.main-search-container{
	display: flex;
	width: 100%;
	color: white;
	padding: 0;
	line-height: 30px;
	justify-content: left;
	overflow: visible;
	box-sizing: border-box;
	width: 100%;
	font-size: 13px;
	overflow: hidden;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
	user-select: none;
	zoom: 1;
	line-height: 22px;
	height: 50px;
	display: flex;
	z-index: 99998;
	margin-bottom: 5px;
	// -webkit-box-shadow: 0px 7px 10px -11px rgba(0,0,0,0.75);
  	// -moz-box-shadow: 0px 7px 10px -11px rgba(0,0,0,0.75);
  	// box-shadow: 0px 7px 10px -11px rgba(0,0,0,0.75);
}

.main-choice-container{
	width: 100%;
	overflow: visible;
	align-items: center;
	justify-content: center;
	height: 50px;
	display: flex;
	z-index: 99998;
  	margin-bottom: 20px;
}

.choice-bar-container{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}

.choice-test-container{
	flex-grow: 1;
	text-align: center;
	line-height: 30px;
	margin: 0 10px;
	border-bottom: 2px solid transparent;
	opacity: 0.5;
	cursor: pointer;
}

.choice-selected{
	border-bottom: 2px solid var(--green-kiwi-color);
	opacity: 1;
}

// .main-deco-container {
//     background: rgb(184,53,106);
//     // background: linear-gradient(150deg, rgba(240,161,0,1) 0%, rgba(184,53,106,1) 25%, rgba(91,43,137,1) 50%, rgba(46,85,206,1) 75%, rgba(68,188,103,1) 100%);
//     // background: linear-gradient(150deg, rgba(240,161,0,0.85) 0%, rgba(184,53,106,0.85) 25%, rgba(91,43,137,0.85) 50%, rgba(46,85,206,0.85) 75%, rgba(68,188,103,0.85) 100%), url(../img/bg.jpg);
//     -webkit-background-size: cover;
//     background-size: cover;
//     overflow: auto;
//     position: relative;
//     height: 120px;
//     top: 0px;
//     padding-top: 32px;
//     padding-bottom: 60px;
//     clip-path: polygon(0 0, 0 60%, 100% 100%, 100% 0);
//     width: 100%;
//     margin-bottom: 75px
// }

.custom-search-bar{
	display: flex;
	justify-content: space-between;
	// background-color: var(--dark-color);
	border-radius: 5px;
	height: 50px;
	width: 100%;
	// max-width: 800px;
}

.search-icon-master{
	display: flex;
	justify-content:center;
	align-items:center;
	margin-right: 10px;
	height: 100%;
	border-radius: 5px 0 0 5px;
}

.search-data-master{
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	border-radius: 0 5px 5px 0;
	color: var(--main-text-color);
}

.close-icon-master{
	display: flex;
	justify-content:center;
	align-items:center;
	height: 100%;
	cursor: pointer;
}


.field {
  width: 100%;
  height: 100%;
  position: relative;
  color: var(--main-text-color);
}

.field:hover {
}

.field.active {
  // background-color: #ffffff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  color: var(--main-text-color);
}

.field.active input {
  // padding: 0 8px;
  color: var(--main-text-color);
}

.field.active input + label {
  top: 4px;
  opacity: 1;
  // color: #512da8;
  color: var(--main-text-color);
}

.field.locked {
  pointer-events: none;
}

.field input {
  color: var(--main-text-color);
  width: 100%;
  height: 100%;
  position: relative;
  // padding: 0px 16px;
  border: none;
  border-radius: 4px;
  font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
    0.1s padding ease-in-out;
  -webkit-appearance: none;
}

.field input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
.field input::-moz-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
.field input:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
.field input:-moz-placeholder {
  color: rgba(255, 255, 255, 0.8);
}

.field input + label {
  position: absolute;
  top: 24px;
  left: 16px;
  font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  color: var(--main-text-color);
  opacity: 0;
  pointer-events: none;
  transition: 0.1s all ease-in-out;
}

.field input + label.error {
  color: var(--main-text-color);
}

#input-id::placeholder{
	color:var(--main-text-color);
}

.field p.predicted {
  position: absolute;
  top: 8px;
  left: 16px;
  font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--main-text-color);
  opacity: 1;
  pointer-events: none;
}

.active-color {
  // background-color: white;
}

.main-bottom-container{
	display: flex;
	width: 100%;
	background-color: var(--dark-white-color);
	color: white;
	padding: 0;
	line-height: 30px;
	justify-content: left;
	overflow: visible;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	box-sizing: border-box;
	width: 100%;
	font-size: 13px;
	padding: 0 16px;
	overflow: hidden;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
	user-select: none;
	zoom: 1;
	line-height: 22px;
	height: 30px;
	display: flex;
	z-index: 99999;
	-webkit-box-shadow: 0px -7px 10px -11px rgba(0,0,0,0.75);
  	-moz-box-shadow: 0px -7px 10px -11px rgba(0,0,0,0.75);
  	box-shadow: 0px -7px 10px -11px rgba(0,0,0,0.75);
}

.main-bottom-data{
	display: flex;
	justify-content: space-between;
	width: 100%;
}

.site-name {
	color:white;
}

// .main-stream-bar-container{
// 	display: flex;
// 	width: 100%;
// 	background-color: var(--dark-white-color);
// 	color: white;
// 	padding: 0;
// 	line-height: 30px;
// 	justify-content: left;
// 	overflow: visible;
// 	position: absolute;
// 	top: 30px;
// 	left: 0;
// 	right: 0;
// 	box-sizing: border-box;
// 	width: 100%;
// 	font-size: 30px;
// 	padding: 0 16px;
// 	overflow: hidden;
// 	flex-shrink: 0;
// 	align-items: center;
// 	justify-content: center;
// 	user-select: none;
// 	zoom: 1;
// 	line-height: 22px;
// 	height: 70px;
// 	display: flex;
// 	z-index: 99999;
// 	-webkit-box-shadow: 0px 7px 10px -11px rgba(0,0,0,0.75);
//   	-moz-box-shadow: 0px 7px 10px -11px rgba(0,0,0,0.75);
//   	box-shadow: 0px 7px 10px -11px rgba(0,0,0,0.75);
// }

// .main-stream-infos{
// 	display: flex;
// 	justify-content: space-between;
// 	width: 100%;
// }

// .main-stream-right-infos{
// 	display: flex;
// 	justify-content: space-between;
// 	align-items:center;
// }

// .custom-chevron-left-icon{
// 	font-size: 20px;
// 	color: white;
// 	cursor: pointer;
// 	line-height: 0;
// }

// .loading-container {
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	width: 100%;
// 	height: 100%;
// 	flex-direction: column;
// }

// .video-player-and-infos-container{
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-end;
// 	align-items: center;
// 	height: 100%;
// 	width: 100%;
// }

// .video-player-container{
//   	display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%    !important;
//   	height: 100%   !important;
//   	background-color: black;
// }

video:focus{
  	outline:none;
}

// .video-bottom-info{
// 	height: 130px;
// 	margin: 30px 40px 60px 40px;
// 	align-self: flex-start;
// }

// .video-bottom-info-title{
// 	font-size: 30px;
// 	margin-bottom: 10px;
// }

// .video-bottom-info-content{

// }

.custom-react-player {

}

.player-none{
	display: none !important;
}

.player-block{
	display: block !important;
}

.custom-react-player-master{
	display: flex;
    justify-content: center;
    align-items: center;
	width: 100%;
	height: 100%;
}

* {
    outline: 0 !important;
}

// .plyr-container {
//     width: 100% !important;
//     height: 100% !important;
// }

// .plyr-container-full{
// 	display: flex;
// 	justify-content: flex-end;
// 	align-items: center;
// 	flex-direction: column;
//     background: #000;
//     overflow: hidden;
//     box-sizing: border-box;
//     -moz-osx-font-smoothing: auto;
//     -webkit-font-smoothing: subpixel-antialiased;
//     align-items: center;
//     direction: ltr;
//     display: flex;
//     font-family: Avenir,"Avenir Next","Helvetica Neue","Segoe UI",Helvetica,Arial,sans-serif;
//     font-variant-numeric: tabular-nums;
//     font-weight: 500;
//     height: 100%;
//     line-height: 1.7;
//     max-width: 100%;
//     min-width: 200px;
//     position: relative;
//     text-shadow: none;
//     transition: box-shadow .3s ease;
//     z-index: 0;
// }

// .plyr-controls-wrapper{
//     background-color: var(--dark-white-t-color);
//     border-bottom-left-radius: inherit;
//     border-bottom-right-radius: inherit;
//     color: #fff;
//     padding: 10px;
//     margin-bottom: 20px;
//     border-radius: 4px;
//     position: relative;
//     transition: opacity .4s ease-in-out,transform .4s ease-in-out;
//     z-index: 3;
//     align-items: center;
//     display: flex;
//     justify-content: space-between;
//     text-align: center;
//     box-sizing: inherit;
//     min-width: 800px;
// }

.play-button-container{
    background: rgba(101,87,255,.5);
    background: #6557ff;
    color: #fff;
    margin-left: 0;
    margin-right: 0;
    margin-left: 2.5px;
    box-shadow: 0 0 0 5px rgba(101,87,255,.5);
    outline: 0;
    touch-action: manipulation;
    font: inherit;
    line-height: inherit;
    width: auto;
    background: 0 0;
    border: 0;
    border-radius: 3px;
    color: inherit;
    cursor: pointer;
    flex-shrink: 0;
    overflow: visible;
    padding: 7px;
    position: relative;
    transition: all .3s ease;
    box-sizing: inherit;
}

.plyr-video-wrapper{
    background: #000;
    height: 100%;
    margin: auto;
    overflow: hidden;
    width: 100%;
    box-sizing: inherit;
    outline: 0 !important;
    direction: ltr;
    font-family: Avenir,"Avenir Next","Helvetica Neue","Segoe UI",Helvetica,Arial,sans-serif;
    font-variant-numeric: tabular-nums;
    font-weight: 500;
    line-height: 1.7;
    text-shadow: none;
}

.custom-video-button{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 10px;
}

.custom-sound-icon {
    cursor: pointer;
}

// .progress-bar{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     bottom: 35px;
//     flex: 1;
//     min-width: 0;
//     position: absolute;
//     bottom: 80px;
//     width: 100%;
//     margin-left: 0 !important;
//     margin-right: 0 !important;
//     left: 0 !important;
// }

.custom-progress-bar{
    left: 11px;
    margin-right: 22px;
    position: relative;
    width: 100%;
}

.custom-progress-bar-in{
    width: 100%;
}

.video-time{
    width: 80px;
    margin: 10px 0;
}

.tab-container{
    position: relative;
    cursor: pointer;
    padding: 10px;
}

.speed-tab{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    position: absolute;
    width: 100px;
    max-height: 200px;
    background-color: var(--dark-white-color);
    z-index: 20;
    bottom: 40px;
    right: 10px;
    padding: 10px 0;
    overflow-y: scroll;
}

.speed-title{
    font-weight: bold;
    margin-left: 10px;
}

.speed-choice{
    margin-left: 10px;
    padding: 2px;
    width: 70px;
    text-align: left;
}

.captions-choice{
    margin-left: 10px;
    padding: 2px;
    width: 70px;
    text-align: left;
}

.t-c-selected{
    background-color: var(--good-color);
    border-radius: 3px;
}

::-webkit-scrollbar {
  width: 10px;
}

/*video::-webkit-media-text-track-container {
    // Style the container
}

video::-webkit-media-text-track-background {
    // Style the text background
}
*/
video::-webkit-media-text-track-display {
    font-size:20px;
}

.track-text{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    min-width: 0;
    position: absolute;
    bottom: 60px;
    width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;
    left: 0 !important;
    color: white;
    background-color: rgba(1,1,1,0.5);
}

.custom-sound{
    line-height: 0;
}

.react-player{
	position: absolute;
}

.controls-bar-group{
	display: flex;
}

.selection-movies-container{
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 30px;
	margin-bottom: 5px;
	border-bottom: 1px solid var(--medium-letter-color);
	font-weight: 100;
}

.change-content-card-container{
	display: flex;
    align-items: center;
    justify-content: center;
}

.change-content-type-container{
	display: flex;
    align-items: center;
    justify-content: center;
}

.select{
	opacity: 1;
}

.not-select{
	opacity: 0.5;
}

.change-card-display-container{
	display: flex;
    align-items: center;
    justify-content: center;
}

.change-content-filter-and-style-container{
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
}

.content-type-container{
	margin-right: 10px;
	font-weight: 500 !important;
	cursor: pointer;
}

.content-style-container{
	display: flex;
	margin-right: 10px;
	align-items: center;
	line-height: 0;
}

.content-filter-container{
	display: flex;
	margin-right: 10px;
	align-items: center;
	line-height: 0;
}

.sort-content-container{
	margin-right: 5px;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.card-action-container{
	position: absolute;
	z-index: 4;
	bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card-action-box{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 140px;
	height: 40px;
	background-color:var(--dark-letter-color);
	border-radius: 4px;
	opacity: 0.9;
}

.card-action{
	margin: 0 5px;
	line-height: 0;
}

// .snack-bar-container{
// 	position: absolute;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: flex-start;
// 	z-index: 10;
// 	top: 50px;
//     left: 128px;
// 	width: 1600px;
// }

// .snack-bar{
// 	display: none;
// 	align-items: center;
// 	justify-content: space-between;
// 	background-color:var(--green-kiwi-color);
// 	width: 500px;
// 	height: 40px;
// 	margin-bottom: 10px;
// 	border-radius: 4px;
// 	color: white;
// 	padding: 5px;
// 	opacity: 0.7;
// }

// .snack-bar-show{
// 	display: flex;
// 	-webkit-animation: fadein 0.5s, fadeout 0.5s 4.5s;
//  	animation: fadein 0.5s, fadeout 0.5s 4.5s;
// }

// @-webkit-keyframes fadein {
//   from {bottom: 0; opacity: 0;}
//   to {bottom: 30px; opacity: 0.7;}
// }

// @keyframes fadein {
//   from {bottom: 0; opacity: 0;}
//   to {bottom: 30px; opacity: 0.7;}
// }

// @-webkit-keyframes fadeout {
//   from {bottom: 30px; opacity: 0.7;}
//   to {bottom: 0; opacity: 0;}
// }

// @keyframes fadeout {
//   from {bottom: 30px; opacity: 0.7;}
//   to {bottom: 0; opacity: 0;}
// }

// .snack-bar-text{
// 	margin-left: 10px;
// }
// .snack-bar-close{
// 	margin-right: 10px;
// 	line-height: 0;
// 	cursor: pointer;
// }

.search-and-select-container{
	width: 1590px;
}

.download-movies-list {
	display: flex;
	flex-wrap: wrap;
	margin: 30px 10px;
	width: 1600px;
	height: fit-content;
}

.load-movie-item-master{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 10px;
}

.load-movie-item{
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
}

.load-container{
	display: flex;
	flex-direction: column;
	width: 100%;
}

.load-box-main-infos{
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-left: 20px;
}

.load-box-load-infos{
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}

.load-box-icon{
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.load-group{
	display: flex;
	justify-content: space-between;
}

.custom-load-bar{
	width: 100%;
	background-color: var(--green-kiwi-color);
}

.MuiLinearProgress-colorPrimary {
    background-color: white !important;
}

.MuiLinearProgress-barColorPrimary {
    background-color: var(--green-kiwi-color) !important;
}

`;

export default Style;
