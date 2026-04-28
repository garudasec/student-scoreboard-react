import React, { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Ishaan", score: 32 },
    { id: 4, name: "Sanya", score: 89 },
  ]);

  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const avg = total > 0 ? Math.round(students.reduce((acc, s) => acc + s.score, 0) / total) : 0;

  const addStudent = (name, score) => {
    setStudents([...students, { id: Date.now(), name, score: parseInt(score) || 0 }]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map(s => s.id === id ? { ...s, score: parseInt(newScore) || 0 } : s));
  };

  return (
    <div className="terminal-app">
      <Header />
      <div className="main-content">

        <aside className="sidebar">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-label">Total</div>
              <div className="stat-value">{total}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Passed</div>
              <div className="stat-value">{passed}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Avg</div>
              <div className="stat-value">{avg}</div>
            </div>
          </div>

          <div className="panel add-form-panel">
            <div className="panel-header">
              <div className="panel-header-icon"></div>
              <span className="panel-title">Add Student</span>
            </div>
            <div style={{ padding: '16px' }}>
              <AddStudentForm onAdd={addStudent} />
            </div>
          </div>
        </aside>

        <div className="content-area">
          <div className="panel table-panel">
            <div className="panel-header">
              <div className="panel-header-icon"></div>
              <span className="panel-title">Student Records</span>
            </div>
            <StudentTable students={students} onUpdateScore={updateScore} />
            <div className="footer-bar">
              <span>{total} record{total !== 1 ? 's' : ''} loaded</span>
              <span>{passed} / {total} passed</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;