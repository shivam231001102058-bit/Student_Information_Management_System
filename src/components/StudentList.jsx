import StudentCard from './StudentCard';

function StudentList({ students }) {
  return (
    <section className="student-list" aria-label="Student list">
      {students.map((student) => (
        <StudentCard key={student.rollNumber} student={student} />
      ))}
    </section>
  );
}

export default StudentList;
