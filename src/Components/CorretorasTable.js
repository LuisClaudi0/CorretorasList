import React from 'react';

function CorretorasTable({ corretoras, setSelectedCorretora, onTabChange }) {
  return (
    <div id="Corretoras" className="tabcontent" style={{ display: 'block' }}>
      <table id="corretorasTable">
        <thead>
          <tr>
            <th>Nome Comercial</th>
            <th>Cidade</th>
            <th>CNPJ</th>
          </tr>
        </thead>
        <tbody>
          {corretoras.map((corretora, index) => (
            <tr 
              key={`${corretora.cnpj}-${index}`} 
              onClick={() => {
                setSelectedCorretora(corretora);
                onTabChange('Detalhes'); // Change tabs
              }} 
              style={{ cursor: 'pointer' }}
            >
              <td>{corretora.nome_comercial || 'NOME NÃO DISPONÍVEL'}</td>
              <td>{corretora.municipio || 'N/A'}</td>
              <td>{corretora.cnpj || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CorretorasTable;
