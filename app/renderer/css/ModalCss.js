import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
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
`;

export default Style;
