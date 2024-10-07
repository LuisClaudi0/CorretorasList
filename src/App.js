import React, { useState, useEffect } from 'react';
import Tabs from './Components/Tabs';
import CorretorasTable from './Components/CorretorasTable';
import CorretoraDetails from './Components/CorretorasDetails';
import SearchCep from './Components/SearchCep';
import './styles.css'

function App() {
  const [corretoras, setCorretoras] = useState([]);
  const [selectedCorretora, setSelectedCorretora] = useState(null);
  const [activeTab, setActiveTab] = useState('Corretoras');

  useEffect(() => {
    const fetchCorretoras = async () => {
      try {
        const response = await fetch('https://brasilapi.com.br/api/cvm/corretoras/v1');
        const data = await response.json();
        setCorretoras(data);
      } catch (error) {
        console.error('Erro ao buscar as corretoras:', error);
      }
    };

    fetchCorretoras();
  }, []);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container">
      <h1>Lista de Corretoras</h1>
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />

      <SearchCep 
        corretoras={corretoras} 
        setSelectedCorretora={setSelectedCorretora} 
        onTabChange={handleTabChange} 
      />
      
      {activeTab === 'Corretoras' && ( // Renders only the CorretorasTable if its active
        <CorretorasTable 
          corretoras={corretoras} 
          setSelectedCorretora={setSelectedCorretora} 
          onTabChange={handleTabChange} 
        />
      )}

      {activeTab === 'Detalhes' ? (
        selectedCorretora ? (
          <CorretoraDetails corretora={selectedCorretora} />
        ) : (
          <div className="alert">
            Para visualizar os Detalhes da Corretora, por favor selecione uma Corretora na aba "Lista de Corretoras" ou Busque pelo CEP no botão acima.
          </div>
        )
      ) : null}
    </div>
  );
}

export default App;
