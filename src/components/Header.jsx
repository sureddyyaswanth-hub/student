import './Header.css';

const Header = ({ student }) => {
  return (
    <header className="dashboard-header">
      <div>
        <h1>Welcome back, {student.name}</h1>
        <p>Here is your progress for this semester.</p>
        <div className="student-details">
          <span>ID: {student.studentId}</span>
          <span>Email: {student.email}</span>
          <span>Advisor: {student.advisor}</span>
          <span>Major: {student.major}</span>
        </div>
      </div>
      <div className="student-card">
        <span>{student.gradeLevel}</span>
        <strong>{student.gpa} GPA</strong>
        <p>Attendance: {student.attendance}</p>
      </div>
    </header>
  );
};

export default Header;
