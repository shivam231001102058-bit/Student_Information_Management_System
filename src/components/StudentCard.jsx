function StudentCard({ student }) {
  const { name, rollNumber, department, year, semester, cgpa, photo } = student;

  return (
    <article className="student-card">
      <img src={photo} alt={`${name} profile`} className="student-photo" />

      <div className="student-details">
        <h2>{name}</h2>

        <dl className="student-meta">
          <div className="meta-row">
            <dt>Roll Number</dt>
            <dd>{rollNumber}</dd>
          </div>

          <div className="meta-row">
            <dt>Department</dt>
            <dd>{department}</dd>
          </div>

          <div className="meta-row">
            <dt>Year</dt>
            <dd>{year}</dd>
          </div>

          <div className="meta-row">
            <dt>Semester</dt>
            <dd>{semester}</dd>
          </div>

          <div className="meta-row">
            <dt>CGPA</dt>
            <dd>{cgpa.toFixed(2)}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default StudentCard;
