import './ActivityTable.css';

const ActivityTable = ({ activities }) => {
  return (
    <section className="activity-table" id="activities">
      <h2>Recent Activity</h2>
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.name}</td>
              <td>{activity.date}</td>
              <td>{activity.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ActivityTable;
