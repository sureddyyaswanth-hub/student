import './GradesChart.css';

const GradesChart = ({ grades }) => {
  return (
    <section className="grades-chart" id="grades">
      <h2>Grade Overview</h2>
      <div className="grades-grid">
        {grades.map((item) => (
          <div key={item.subject} className="grade-card">
            <span>{item.subject}</span>
            <strong>{item.score}%</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GradesChart;
