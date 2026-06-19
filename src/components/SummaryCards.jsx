import './SummaryCards.css';

const SummaryCards = ({ stats }) => {
  return (
    <div className="summary-cards">
      {stats.map((item) => (
        <div key={item.label} className="card">
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
