import React from 'react';

import Input from '../Input';
import Button from '../Button';
import { ToolContext } from '../../context/ToolContext';
import { Container } from './styles';

const AddTool = () => {
  const { addTool } = React.useContext(ToolContext)
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [disabledButton, setDisabledButton] = React.useState(true);

  React.useEffect(() => {
    function checkFields() {
      if(title.length === 0 || link.length === 0 || description.length === 0) {
        setDisabledButton(true)

      } else {
        setDisabledButton(false)
      }
    }
    checkFields();
  },[description.length, link.length, title])

  function handleAddTool(event) {
    event.preventDefault();

    const newTool = {
      title,
      link,
      description,
      tags: tags.split(' ')
    }
    addTool(newTool);
  }

  return (
    <Container>
      <form onSubmit={handleAddTool}>
        <Input 
          label='Tool Name'    
          type='text' 
          name='title'
          value={title}
          onChange={({target}) => setTitle(target.value)}
          required
        />

        <Input 
          label='Tool Link'    
          type='text' 
          name='link'
          value={link}
          onChange={({target}) => setLink(target.value)}
          required
        />

        <label htmlFor="description">Tool Description</label>
        <textarea 
          name="description" 
          id="description" 
          value={description}
          onChange={({target}) => setDescription(target.value)}
          required
        >
        </textarea>

        <Input 
          label='Tags'    
          type='text' 
          name='tags'
          value={tags}
          onChange={({target}) => setTags(target.value)}
          placeholder='Separate tags by spaces...'
        />

        <Button disabled={disabledButton}>
          Add Tool
        </Button>
      </form>
    </Container>
  )
}

export default AddTool;
