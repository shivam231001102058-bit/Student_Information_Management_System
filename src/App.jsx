import { useMemo, useState } from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';
import Footer from './components/Footer';
import './App.css';

import shivamPhoto from './assets/students/shivam.jpg';
import rahulPhoto from './assets/students/rahul.jpg';
import shubhamPhoto from './assets/students/shubham.jpg';
import ankitPhoto from './assets/students/ankit.jpg';

const students = [
  {
    name: 'Shivam Kumar Tiwari',
    rollNumber: '231001102058',
    department: 'BCA',
    year: '4th Year',
    semester: '7th Semester',
    cgpa: 7.38,
    photo: shivamPhoto,
  },
  {
    name: 'Rahul Kumar',
    rollNumber: '231001102053',
    department: 'BCA',
    year: '4th Year',
    semester: '7th Semester',
    cgpa: 7.62,
    photo: rahulPhoto,
  },
  {
    name: 'Shubham Kumar',
    rollNumber: '231001102036',
    department: 'BCA',
    year: '4th Year',
    semester: '7th Semester',
    cgpa: 7.21,
    photo: shubhamPhoto,
  },
  {
    name: 'Ankit Kumar',
    rollNumber: '231001102001',
    department: 'BCA',
    year: '4th Year',
    semester: '7th Semester',
    cgpa: 7.51,
    photo: ankitPhoto,
  },
];

function App() {
  const [sortOption, setSortOption] = useState('high-to-low');

  const sortedStudents = useMemo(() => {
    const studentCopy = [...students];

    studentCopy.sort((firstStudent, secondStudent) => {
      if (sortOption === 'low-to-high') {
        return firstStudent.cgpa - secondStudent.cgpa;
      }

      return secondStudent.cgpa - firstStudent.cgpa;
    });

    return studentCopy;
  }, [sortOption]);

  return (
    <div className="app-shell">
      <Header />

      <main className="dashboard" aria-label="Student dashboard">
        <div className="dashboard-header">
          <div>
            <p className="eyebrow">Student Information</p>
            <h1>Student Information</h1>
          </div>

          <div className="sort-control">
            <label htmlFor="cgpa-sort">Sort by CGPA</label>
            <select
              id="cgpa-sort"
              value={sortOption}
              onChange={(event) => setSortOption(event.target.value)}
              aria-label="Sort students by CGPA"
            >
              <option value="high-to-low">CGPA — High to Low</option>
              <option value="low-to-high">CGPA — Low to High</option>
            </select>
          </div>
        </div>

        <p className="dashboard-description">
          Manage and view student academic information using reusable React components and Props.
        </p>

        <StudentList students={sortedStudents} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
