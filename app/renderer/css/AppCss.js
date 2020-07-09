import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
:root {
	--letter-spacing: 0.05em;
	--gutter: 1.8rem;

	--dark-color: #2A2C34;
	--dark-white-color: #343742;
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

body {
	font-family: 'Source Sans Pro';
	background-color: var(--dark-color);
	margin: 0;
	color: var(--classic-color);
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
.main-top-bar-container{
	display: flex;
	width: 100%;
	height: 50px;
	-webkit-app-region:drag;
	background-color: #282D31;
	color: white;
	height: 30px;
	padding: 0;
	height: 30px;
	line-height: 30px;
	justify-content: left;
	overflow: visible;
	position: absolute;
	top: 0;
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
}

.main-top-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}

.tob-bar-action {
	-webkit-app-region: no-drag;
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: space-between;
	width: 70px;
}

.opacity-c {
	opacity: 0.5;
}

.opacity-c:hover {
	opacity: 1;
}


.tob-bar-features {
	display: flex;
}

.custom-feature{
	padding: 0 10px;
}

.custom-feature-list{
	display: flex;
	opacity: 0.5;
	margin: 0 20px;
}

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

.custom-icon-bar {
	font-weight: bolder !important ;
	cursor: pointer;
}

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
	overflow: hidden;
	margin: 0px;
}

.main-container {
	top:130px;
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

.card-main-style {
	width: 150px;
	min-width: 150px;
	background: transparent;
	border: none;
	box-shadow: none;
	margin-top: 0;
	overflow: visible;
	padding: 10px;
	cursor:pointer;
}

.card-main-style:hover {
	border-radius: 5px;
	background-color: var(--dark-white-color);
	z-index: 999;
}

.card-main-style:hover .image {
	filter: brightness(70%);
}


.image-container {
	border-radius: 8px;
	width: 100%;
	min-height: calc(150px * 1.5);
	height: calc(150px * 1.5);
	overflow: hidden;
	-webkit-box-shadow: 5px 2px 10px -4px rgba(0,0,0,0.75);
	-moz-box-shadow: 5px 2px 10px -4px rgba(0,0,0,0.75);
	box-shadow: 5px 2px 10px -4px rgba(0,0,0,0.75);
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
	padding: 10px;
	cursor: pointer;
}

.popular-movies-list {
	display: flex;
	flex-wrap: wrap;
	margin:10px;
	overflow: auto;
	justify-content: space-between;
}

.main-search-container{
	display: flex;
	width: 100%;
	background-color: var(--dark-white-color);
	color: white;
	padding: 0;
	line-height: 30px;
	justify-content: left;
	overflow: visible;
	position: absolute;
	top: 30px;
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
	height: 100px;
	display: flex;
	z-index: 99999;
	-webkit-box-shadow: 0px 7px 10px -11px rgba(0,0,0,0.75);
  	-moz-box-shadow: 0px 7px 10px -11px rgba(0,0,0,0.75);
  	box-shadow: 0px 7px 10px -11px rgba(0,0,0,0.75);
}

.custmom-search-bar{
	display: flex;
	justify-content: space-between;
	background-color: var(--dark-color);
	border-radius: 5px;
	height: 50px;
	width: 80%;
	max-width: 800px;
}

.search-icon-master{
	display: flex;
	justify-content:center;
	align-items:center;
	width: 50px;
	height: 100%;
	border-radius: 5px 0 0 5px;
}

.search-data-master{
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	border-radius: 0 5px 5px 0;
}


.field {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 0 5px 5px 0;
}

.field:hover {
}

.field.active {
  background-color: #ffffff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  color: #282828;
}

.field.active input {
  padding: 0 8px;
  color: #282828;
}

.field.active input + label {
  top: 4px;
  opacity: 1;
  color: #512da8;
  color: #282828;
}

.field.locked {
  pointer-events: none;
}

.field input {
  color: white;
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
  color: #ffffff;
  opacity: 0;
  pointer-events: none;
  transition: 0.1s all ease-in-out;
}

.field input + label.error {
  color: #ec392f;
}

.field p.predicted {
  position: absolute;
  top: 8px;
  left: 16px;
  font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #e0e0e0;
  opacity: 1;
  pointer-events: none;
}

.active-color {
  background-color: white;
}
`;

export default Style;
