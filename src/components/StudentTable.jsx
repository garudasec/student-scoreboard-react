import React from 'react';
import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdateScore }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-dim)', letterSpacing: '0.15em', fontSize: '0.75rem' }}>
                NO RECORDS FOUND
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <StudentRow
                key={student.id}
                student={student}
                onUpdateScore={onUpdateScore}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
