import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  max-width: 760px;
  width: calc(100% - 40px);
  height: calc(100vh - 100px);
 
  top: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  .modalAddTool {
    width: 100%;
    height: 64%;
    background-color: #eeeeee;
  }

  @media screen and (max-width: 600px) {
    position: fixed;
    height: 90vh;
    top: 0px;

    .modalAddTool {
      width: 100%;
      height: 100%;
    }
  }
`;