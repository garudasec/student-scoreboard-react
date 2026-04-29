import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore, total, passed, avg }) {
  return (
    <div>
      {/* Stats Section */}
      <div className="stats">
        <div className="stat-box">
          <p>TOTAL</p>
          <h2>{total}</h2>
        </div>

        <div className="stat-box">
          <p>PASSED</p>
          <h2>{passed}</h2>
        </div>

        <div className="stat-box">
          <p>AVG</p>
          <h2>{avg}</h2>
        </div>
      </div>

      {/* Table Section */}
      <div className="card">
        <h3>Student Records</h3>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <StudentRow
                key={s.id}
                student={s}
                updateScore={updateScore}
              />
            ))}
          </tbody>
        </table>

        <p className="small-text">
          {students.length} records loaded
        </p>
      </div>
    </div>
  );
}

export default StudentTable;