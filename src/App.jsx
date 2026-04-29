import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Ishaan", score: 32 },
    { id: 4, name: "Sanya", score: 89 }
  ]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name: name,
      score: score === "" ? "" : Number(score)
    };

    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((s) =>
        s.id === id
          ? {
              ...s,
              score: newScore === "" ? "" : Number(newScore)
            }
          : s
      )
    );
  };

  const total = students.length;

  const passed = students.filter(
    (s) => s.score !== "" && s.score >= 40
  ).length;

  const avg =
    total > 0
      ? (
          students.reduce(
            (acc, s) => acc + (s.score === "" ? 0 : s.score),
            0
          ) / total
        ).toFixed(1)
      : 0;

  return (
    <div className="container">
      <Header title="Student Scoreboard" />

      <div className="main-content">
        <div className="left-panel">
          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-label">Total Students</span>
              <span className="stat-value">{total}</span>
            </div>

            <div className="stat-box">
              <span className="stat-label">Passed</span>
              <span
                className="stat-value"
                style={{ color: "var(--pass)" }}
              >
                {passed}
              </span>
            </div>

            <div className="stat-box">
              <span className="stat-label">Average</span>
              <span className="stat-value">{avg}</span>
            </div>
          </div>

          <AddStudentForm addStudent={addStudent} />
        </div>

        <div className="right-panel">
          <StudentTable
            students={students}
            updateScore={updateScore}
          />
        </div>
      </div>
    </div>
  );
}

export default App;