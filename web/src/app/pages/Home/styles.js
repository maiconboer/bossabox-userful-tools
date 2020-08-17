import styled from 'styled-components';

import icon from '../../assets/icons/search.svg'

export const Container = styled.section`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 20px;

  .search-tool {
    display: flex;
    justify-content: space-between;

    button {
      margin-right: 4px;
    }

    form {
      display: flex;
      align-items: center;

      div {
        display: flex;
        align-items: center;

        label:nth-child(3) {
          margin-left: -16px;
        }
      }
    }

    input:nth-child(2) {
      margin-right: 20px;
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;

      form {
        flex-direction: column;
        justify-content: space-between;

        .input-search {
          width: 100%;
          margin-right: 0px;
        }

        div {  
          margin-top: 20px;
        }
      }

      button {
        margin-top: 20px;
        width: 100%;
      }
    }
  }

  .search-term {
    margin-top: 20px;
  }

  .modalAddTool {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-search::placeholder {
    background: url(${icon}) no-repeat;
    background-size: 16px;
  }
`;