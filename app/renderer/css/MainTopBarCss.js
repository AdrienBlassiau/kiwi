import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
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
`;

export default Style;
