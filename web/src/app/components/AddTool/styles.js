import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    
    label {
      margin-bottom: 4px;
    }

    input,
    textarea {
      border: 1px solid var(--color-border);
      background-color: var(--color-secondary-bg);
      display: block;
      font-size: 1rem;
      padding: 0.8rem;
      margin-bottom: 24px;
      border-radius: 0.4rem;
      transition: all 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: var(--color-primary-bg);
    background-color: var(--color-secondary-bg);
    box-shadow: 0 0 0 3px var(--color-input-hover), 
                0 0 0 4px var(--color-secondary-bg);
  }
    }

    textarea {
      resize: none;
      height: 100px;
    }
  }
  
`;