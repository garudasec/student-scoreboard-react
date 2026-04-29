function StudentRow({ student, updateScore }) {
  const { id, name, score } = student;

  // check pass or fail
  let status = "Fail";
  if (score >= 40) {
    status = "Pass";
  }

  function handleChange(e) {
    updateScore(id, e.target.value);
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{score}</td>

      <td className={status === "Pass" ? "pass" : "fail"}>
        {status}
      </td>

      <td>
        <input
          type="number"
          value={score}
          onChange={(e) => handleChange(e)}
        />
      </td>
    </tr>
  );
}

export default StudentRow;