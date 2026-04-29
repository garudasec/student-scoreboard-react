function StudentRow({ student, updateScore }) {
  const { id, name, score } = student;

  let status = "Fail";
  if (score >= 40) {
    status = "Pass";
  }

  function handleChange(e) {
    const value = e.target.value;
    if (value === "") {
      updateScore(id, "");
      return;
    }

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
          min="0"
          max="100"
          value={score}
          onChange={handleChange}
        />
      </td>
    </tr>
  );
}

export default StudentRow;