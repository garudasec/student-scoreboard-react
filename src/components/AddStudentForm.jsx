import React, { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || score === '') return;
    onAdd(name, score);
    setName('');
    setScore('');
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label className="input-label">Student Name</label>
        <input
          type="text"
          placeholder="e.g. Priya Sharma"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label className="input-label">Score (0–100)</label>
        <input
          type="number"
          placeholder="e.g. 76"
          value={score}
          min="0"
          max="100"
          onChange={(e) => setScore(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-primary">
        <span>+ Add Student</span>
      </button>
    </form>
  );
};

export default AddStudentForm;
