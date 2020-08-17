import React from 'react';

import { Container } from './styles';

const Modal = ({modalRef, modalName, children}) => { 
  return (
    <Container >
      <div 
        className={modalName} 
        ref={modalRef} 
      >
        {children}
      </div>
    </Container>
  )
}

export default Modal;
