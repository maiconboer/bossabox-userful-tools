import styled from 'styled-components';

export const InputElement = styled.input`
  border: 1px solid var(--color-border);
  background-color: var(--color-secondary-bg);
  display: block;
  font-size: 1rem;
  padding: 0.8rem;
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
`;


export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;