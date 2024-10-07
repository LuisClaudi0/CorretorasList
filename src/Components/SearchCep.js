import React, { useState } from 'react';

function SearchCep({ corretoras, setSelectedCorretora, onTabChange }) {
  const [cep, setCep] = useState('');

  const searchByCep = () => {
    const corretoraEncontrada = corretoras.find((corretora) => corretora.cep === cep);
    if (corretoraEncontrada) {
      setSelectedCorretora(corretoraEncontrada);
      onTabChange('Detalhes'); // Change to Tab 'Detalhes' - basically, CorretorasDetails.js
    } else {
      alert('Nenhuma corretora encontrada para o CEP informado.');
      setSelectedCorretora(null); // Clear the selection if the CEP is not found
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP da corretora"
      />
      <button onClick={searchByCep}>Procurar CEP</button>
    </div>
  );
}

export default SearchCep;
