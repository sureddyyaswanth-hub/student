import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import GradesChart from './components/GradesChart';
import ActivityTable from './components/ActivityTable';
import StudentForm from './components/StudentForm';
import studentData from './data/studentData';

function App() {
  const [student, setStudent] = useState(studentData.student);
  const [formValues, setFormValues] = useState(studentData.student);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setStudent(formValues);
  };

  const handleFormReset = () => {
    setFormValues(student);
  };

  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Header student={student} />
        <section className="dashboard-grid">
          <SummaryCards stats={studentData.stats} />
          <GradesChart grades={studentData.grades} />
          <ActivityTable activities={studentData.activities} />
          <StudentForm
            student={formValues}
            onChange={handleFormChange}
            onSubmit={handleFormSubmit}
            onReset={handleFormReset}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
