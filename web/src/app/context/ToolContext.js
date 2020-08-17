import React, { createContext } from 'react'

import api from '../services/api';

export const ToolContext = createContext();

export const Tools = ({ children }) => {
  const [tools, setTools] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [quantityTools, setQuantityTools] = React.useState(0);
 
  React.useEffect(() => {
    async function gelAllTools() {
      try {
        const response = await api.get('/');
        setTools((tools) => response.data);
        setSearchTerm('No terms, full search');

      } catch (error) {
        console.log(error);
      }
    }

    setQuantityTools(0)
    
    gelAllTools();
  },[quantityTools])

  async function removeTool(id) {
    try {
      const response = await api.delete(`/${id}`)
        if(response.status === 200) {
          setQuantityTools(-1)
        }
    } catch (error) {
      console.log(error)
    }
  }

  async function addTool(newTool) {
    try {
      const response = await api.post('/', newTool)  
      if(response.status === 201) {
        setTools([...tools, response.data])
      }

    } catch (error) {
      console.log(error)
    }
  }

  async function searchTool(url, inputSearch) {
    try {   
      const response = await api.get(url);
      setTools(response.data);
      setSearchTerm(inputSearch);
     
    } catch (error) {
      console.log(error);
    }
  }

  return (
   <ToolContext.Provider value={{ 
     tools, 
     setTools,
     searchTerm,
     setSearchTerm,
     quantityTools,
     setQuantityTools,
     removeTool,
     addTool,
     searchTool
    }}>
     {children}
   </ToolContext.Provider>
  )
}

