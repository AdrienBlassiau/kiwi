import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
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
`;

export default Style;
