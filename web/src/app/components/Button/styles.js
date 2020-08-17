import styled from 'styled-components';

export const ButtonElement = styled.button`
  border-radius: 0.4rem;
  border: none;
  background-color: var(--color-primary-button);
  color: var(--color-secondary-text);
  padding: 0.8rem 1.2rem;
  min-width: 8rem;
  transition: all 0.1s;
  outline: none;

  &:hover {
   background-color: var(--color-primary-button-hover);
  }

  &:disabled {
    opacity: 0.5;
  }
`;