import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: #1a1a1c;
    color: #fff;
  }

  .coin-app{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 3rem;
      color: #fff;
  }

  .coin-search{
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  .coin-text{
      margin-bottom: .5rem;
      text-align: center;
  }

  .coin-input{
      padding-left: 1rem;
      width: 300px;
      height: 50px;
      border-radius: 4px;
      border: none;
      background-image: linear-gradient(-225deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%);
      color: #e2e2e2;
  }
  .coin-input::placeholder{
    color: #e2e2e2;
  }

  .main-title{
    font-size: 2rem;
    margin-bottom: 5rem;
    text-transform: uppercase;

  }

    .accent{
      color: #ab32e5;
    }
  
  h2{ 
    font-weight: 200;
  }

  @media(max-width: 1000px){
    .marketcap{
      display: none;
    }
  }
  @media(max-width: 900px){
    .volume{
      display: none;
    }
  }

  @media(max-width: 700px){
    h3{
      font-size: 1rem;
    }

    .img{
      width: 2rem;
    }
  }
`;
 
export default GlobalStyle;

// .marketcap{
//   display: none;
// }
// .volume{
//   display: none;
// }
// .symbol{
//   display: none;
// }