import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Tool from '../../components/Tool';
import Modal from '../../components/Modal';
import AddTool from '../../components/AddTool';
import { ToolContext } from '../../context/ToolContext';
import { Container } from './styles';

const Home = () => {
  const { 
    tools, 
    searchTerm, 
    setSearchTerm,
    setQuantityTools,
    searchTool
  } = React.useContext(ToolContext)

  const [inputSearch, setInputSearch] = React.useState('');
  const [searchOnlyTags, setSearchOnlyTags] = React.useState(false);
  const [modalName, setModalName] = React.useState('');
  const [modal, setModal] = React.useState(false);
  const modalRef = React.useRef(null);

  function handleSearchTool(event) {
    event.preventDefault();
    
    let url;
    const checkBoxTag = document.querySelector('#tag')   
 
    if(inputSearch.length === 0) {
      checkBoxTag.checked = false
      setSearchTerm(false);
    }

    if(checkBoxTag.checked) {
      url = `?tags_like=${inputSearch}`
      setSearchOnlyTags(true);

    } else {
      url = `?q=${inputSearch}`
      setSearchOnlyTags(false);
    }

    searchTool(url, inputSearch);
    checkBoxTag.checked = false;
    setInputSearch('');
  }

  function handleOpenModalAddTool(event) {
    setModalName('modalAddTool')
    setModal(true);
    document.body.classList.add('modal-active');
    document.body.addEventListener("click", handleCloseModalAddTool);
  }

  function handleCloseModalAddTool(event) {
    event.stopPropagation();
    const insidemodal = modalRef.current.contains(event.target);

    if (!insidemodal || event.target.nodeName === 'BUTTON') {
      setTimeout(() => {
        setModal(false);
        document.body.classList.remove('modal-active');
        document.body.removeEventListener("click", handleCloseModalAddTool);
      }, 100);
    }
  };

  return (
    <Container className='content'>
      <div>
        <div className='search-tool'>
          <form onSubmit={handleSearchTool}>
            <Input 
              className='input-search'
              type='search' 
              name='search'
              value={inputSearch}
              onChange={({target}) => setInputSearch(target.value)}
              placeholder=' '
            />
            
            <div>
              <Input
                type='checkbox' 
                name='tag' 
                id='tag'
                disabled={inputSearch.length === 0 ? true : false}
              />
              <label htmlFor="tag">search in tags only</label>
            </div>
            
          </form>

          <div className='add-tool'>
            <Button onClick={(event) => handleOpenModalAddTool(event)}>add tool</Button>
          </div>
        </div>

        {searchTerm 
          ? 
          <>
            <p className='search-term'>Searched word: {searchTerm}</p>
            {searchOnlyTags && <span>Search using tags</span>}   
          </>
          : <p className='search-term'>No terms, full search</p>
        }

        {tools.length > 0 && tools.map(tool => (
          <Tool 
            key={tool.id}
            id={tool.id}
            title={tool.title}
            link={tool.link}
            description={tool.description} 
            tags={tool.tags}
            setQuantityTools={setQuantityTools}
          />
        ))}
      </div>

      {modal && 
        <Modal modalRef={modalRef} modalName={modalName}>
          <AddTool />
        </Modal>
      }
    </Container>
  )
}

export default Home;
