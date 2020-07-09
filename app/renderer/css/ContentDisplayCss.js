import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
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
        height: 100%;
        min-height: 100%;
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
        content: '\2022';
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
        content: '\2022';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 7px;
        display: inline-flex;
        align-content: center;
        align-items: center;
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
`;

export default Style;
