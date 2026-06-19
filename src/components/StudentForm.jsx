import './StudentForm.css';

const StudentForm = ({ student, onChange, onSubmit, onReset }) => {
  return (
    <section className="student-form-card">
      <h2>Fill Your Details</h2>
      <form onSubmit={onSubmit}>
        <div className="form-grid">
          <label>
            Name
            <input type="text" name="name" value={student.name} onChange={onChange} />
          </label>
          <label>
            Grade Level
            <input type="text" name="gradeLevel" value={student.gradeLevel} onChange={onChange} />
          </label>
          <label>
            GPA
            <input type="text" name="gpa" value={student.gpa} onChange={onChange} />
          </label>
          <label>
            Student ID
            <input type="text" name="studentId" value={student.studentId} onChange={onChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" value={student.email} onChange={onChange} />
          </label>
          <label>
            Advisor
            <input type="text" name="advisor" value={student.advisor} onChange={onChange} />
          </label>
          <label>
            Major
            <input type="text" name="major" value={student.major} onChange={onChange} />
          </label>
          <label>
            Attendance
            <input type="text" name="attendance" value={student.attendance} onChange={onChange} />
          </label>
        </div>
        <div className="form-actions">
          <button type="submit">Save Details</button>
          <button type="button" className="secondary" onClick={onReset}>
            Reset
          </button>
        </div>
        <p className="form-note">Enter your details and click Save to update the dashboard.</p>
      </form>
    </section>
  );
};

export default StudentForm;
