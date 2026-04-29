import React, { useState } from 'react';

function AddStudentForm({ onAdd }) {
  // Local state for the input fields
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation to make sure fields aren't empty
    if (name.trim() === '' || score === '') {
      alert("Please enter both name and score");
      return;
    }

    // Calling the parent function to add the student
    onAdd(name, score);

    // Requirement: Clear form after submission
    setName('');
    setScore('');
  };

  return (
    <div className="add-form">
      <h3>Add New Student</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Student Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Score" 
          value={score} 
          onChange={(e) => setScore(e.target.value)} 
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;