import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Ishaan", score: 32 },
    { id: 4, name: "Sanya", score: 89 }
  ]);

  function addStudent(name, score) {
    console.log("adding student...");

    const newStudent = {
      id: students.length + 1,
      name: name,
      score: Number(score)
    };

    setStudents([...students, newStudent]);
  }

  function updateScore(id, newScore) {
    console.log("updating score...");

    let updated = [];

    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        updated.push({
          ...students[i],
          score: Number(newScore)
        });
      } else {
        updated.push(students[i]);
      }
    }

    setStudents(updated);
  }

  let totalMarks = 0;
  for (let i = 0; i < students.length; i++) {
    totalMarks = totalMarks + students[i].score;
  }

  let avg = 0;
  if (students.length > 0) {
    avg = totalMarks / students.length;
    avg = avg.toFixed(1);
  }

  let passed = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 40) {
      passed++;
    }
  }

  return (
    <div className="container">
      <Header />

      <div className="main">
        <div className="left">
          <AddStudentForm addStudent={addStudent} />
        </div>

        <div className="right">
          <StudentTable
            students={students}
            updateScore={updateScore}
            total={students.length}
            passed={passed}
            avg={avg}
          />
        </div>
      </div>
    </div>
  );
}

export default App;