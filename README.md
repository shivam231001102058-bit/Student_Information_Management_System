# Student Information Management System

## Assignment 2 Objective
This project demonstrates a React-based student dashboard that uses Props to pass data from the parent component to child components. It is designed as a beginner-friendly college practical assignment and is built with Vite and React.

## Technologies Used
- React.js
- JavaScript
- JSX
- Vite
- CSS

## React Props Explanation
The data flow follows the required structure:

App → StudentList → StudentCard

- App contains the main student array.
- StudentList receives the array through props.
- StudentList maps over the students and passes each student object to StudentCard.
- StudentCard receives the student object through props and renders the student information.

This demonstrates proper reusable component design and React Props usage without any backend or database.

## Component Structure
src/
├── components/
│   ├── Header.jsx
│   ├── StudentList.jsx
│   ├── StudentCard.jsx
│   └── Footer.jsx
├── assets/
│   └── students/
│       ├── shivam.jpg
│       ├── rahul.jpg
│       ├── shubham.jpg
│       └── ankit.jpg
├── App.jsx
├── App.css
├── index.css
└── main.jsx

## Student Information
The following four students are displayed in the dashboard:

1. Shivam Kumar Tiwari — Roll Number: 231001102058 — BCA — 4th Year — 7th Semester — CGPA: 7.38
2. Rahul Kumar — Roll Number: 231001102053 — BCA — 4th Year — 7th Semester — CGPA: 7.62
3. Shubham Kumar — Roll Number: 231001102036 — BCA — 4th Year — 7th Semester — CGPA: 7.21
4. Ankit Kumar — Roll Number: 231001102001 — BCA — 4th Year — 7th Semester — CGPA: 7.51

## Student Photo Implementation
Each student object includes a photo imported from the assets folder. The photo is passed into the card component through props and rendered with alt text for accessibility.

## CGPA Sorting Functionality
The project includes a sorting dropdown that allows students to be sorted by CGPA in either:
- High to Low
- Low to High

Sorting is handled with React state and JavaScript array sorting. A copied array is used so the original data is not mutated.

## Responsive Design
The layout is designed to adapt across desktop, laptop, tablet, and mobile screens. The responsive grid, readable typography, and flexible card layout ensure there is no horizontal scrolling or clipping on smaller devices.

## Accessibility
The project includes:
- Semantic HTML
- Meaningful image alt text
- Proper form label association
- Good contrast and focus states
- Reduced-motion support for accessibility

## Visual Effects
The design uses subtle hover states, soft shadows, and simple transitions to improve usability without distraction.

## How to Install Dependencies
```bash
npm install
```

## How to Run the Project
```bash
npm run dev
```

## How to Create a Production Build
```bash
npm run build
```
