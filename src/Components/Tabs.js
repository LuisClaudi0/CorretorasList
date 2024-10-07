function Tabs({ activeTab, onTabChange }) {
  return (
    <div className="tab">
      <button
        className={`tablink ${activeTab === 'Corretoras' ? 'active' : ''}`}
        onClick={() => onTabChange('Corretoras')}
      >
        Lista de Corretoras
      </button>
      <button
        className={`tablink ${activeTab === 'Detalhes' ? 'active' : ''}`}
        onClick={() => onTabChange('Detalhes')}
      >
        Detalhes da Corretora
      </button>
    </div>
  );
}

export default Tabs;