import React from 'react';

import { ToolContext } from '../../context/ToolContext';
import { FiX } from 'react-icons/fi';
import { Container } from './styles';

const Tool = ({id, title, link, description, tags}) => {
  const { removeTool } = React.useContext(ToolContext)

  function handleRemoveTool(id) {  
    const remove = window.confirm(`Are you sure you want to remove ${title}`);

    if(remove) {
      removeTool(id); 
    }
  }

  return (
    <Container>
      <div className='tool-card-top'>    
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {title}
        </a>
        <span onClick={() => handleRemoveTool(id)} className='remove-tool'>
          <FiX /> <span>remove</span> 
        </span>
      </div>

      <div className='description'>
        <p>{description}</p>
      </div>

      <div className='tags'>
        {tags.map((tag, index) => tag.length > 0 && <span key={index}>{`#${tag}`}</span> 
        )}
      </div>
    </Container>
  )
}

export default Tool;
