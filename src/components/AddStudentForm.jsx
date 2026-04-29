import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "" || score === "") {
      alert("Please enter valid data");
      return;
    }

    if (score < 0 || score > 100) {
      alert("Score should be between 0 and 100");
      return;
    }

    console.log("student added"); 

    addStudent(name, score);

    setName("");
    setScore("");
  }

  return (
    <div className="card">
      <h3>Add Student</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="enter score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudentForm;