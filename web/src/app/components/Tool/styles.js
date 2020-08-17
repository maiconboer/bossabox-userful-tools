import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--color-border);
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 5px 7px #0000000D;

  .tool-card-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .remove-tool {
    display: flex;
    align-items: center;
    cursor: pointer;
    
    span {
      color: red;
    }
    
    svg {
      color: red;
      margin-right: 4px;
    }
  }

  .description {
    margin-bottom: 10px;
  }

  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .tags span {
    font-weight: bold;
    margin-right: 8px;
    margin-bottom: 8px;
  }
`;