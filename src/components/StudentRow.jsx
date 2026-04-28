import React, { useState } from 'react';

const StudentRow = ({ student, onUpdateScore }) => {
  const [tempScore, setTempScore] = useState(student.score);
  const isPass = student.score >= 40;

  return (
    <tr>
      <td className="name-cell">{student.name}</td>
      <td><span className="score-highlight">{student.score}</span></td>
      <td>
        <span className={isPass ? 'badge-pass' : 'badge-fail'}>
          <span className="badge-dot"></span>
          {isPass ? 'PASS' : 'FAIL'}
        </span>
      </td>
      <td>
        <div className="update-cell">
          <input
            type="number"
            value={tempScore}
            min="0"
            max="100"
            onChange={(e) => setTempScore(e.target.value)}
          />
          <button
            className="btn-save"
            onClick={() => onUpdateScore(student.id, tempScore)}
          >
            Save
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;
