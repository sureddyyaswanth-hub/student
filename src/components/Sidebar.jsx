import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand">Student Dashboard</div>
      <nav>
        <a className="active" href="#overview">Overview</a>
        <a href="#grades">Grades</a>
        <a href="#schedule">Schedule</a>
        <a href="#activities">Activities</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
