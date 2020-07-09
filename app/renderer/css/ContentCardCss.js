import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
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
`;

export default Style;
