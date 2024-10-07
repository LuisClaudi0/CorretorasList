import React from 'react';

function CorretoraDetails({ corretora }) {
  if (!corretora) return null; // Renderiza apenas se houver uma corretora selecionada

  // Função para formatar valores monetários
  const formatCurrency = (value) => {
    if (!value) return 'N/A'; // Retorna 'N/A' se o valor não estiver definido
    return `R$ ${parseFloat(value).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  };

  // Função para formatar telefone
  const formatPhone = (phone) => {
    if (!phone) return 'N/A';
    const cleaned = phone.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`; // Formato (xx)xxxx-xxxx
    } else if (cleaned.length === 8) {
      return `${cleaned.slice(0, 4)}-${cleaned.slice(4)}`; // Formato xxxx-xxxx
    }
    return phone;
  };

  // Função para formatar CEP
  const formatCEP = (cep) => {
    if (!cep) return 'N/A';
    const cleaned = cep.replace(/\D/g, '');
    if (cleaned.length === 8) {
      return `${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
    }
    return cep;
  };

  // Função para formatar CNPJ
  const formatCNPJ = (cnpj) => {
    if (!cnpj) return 'N/A';
    const cleaned = cnpj.replace(/\D/g, '');
    if (cleaned.length === 14) {
      return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5, 8)}/${cleaned.slice(8, 12)}-${cleaned.slice(12)}`;
    }
    return cnpj;
  };

  return (
    <div id="detalhesCorretora">
      <p><strong>Nome da Empresa:</strong> {corretora.nome_comercial || 'N/A'}</p>
      <p><strong>CNPJ:</strong> {formatCNPJ(corretora.cnpj) || 'N/A'}</p> {/* Chama a função de formatação */}
      <p><strong>Endereço:</strong> {corretora.logradouro || 'N/A'}</p>
      <p><strong>Bairro:</strong> {corretora.bairro || 'N/A'}</p>
      <p><strong>Cidade/Estado:</strong> {corretora.municipio} - {corretora.uf}</p>
      <p><strong>CEP:</strong> {formatCEP(corretora.cep) || 'N/A'}</p> {/* Chama a função de formatação */}
      <p><strong>Status:</strong> {corretora.status}</p>
      <p><strong>Telefone:</strong> {formatPhone(corretora.telefone) || 'N/A'}</p> {/* Chama a função de formatação */}
      <p><strong>Patrimônio:</strong> {formatCurrency(corretora.valor_patrimonio_liquido)}</p> {/* Chama a função de formatação */}
    </div>
  );
}

export default CorretoraDetails;
