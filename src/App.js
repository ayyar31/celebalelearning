import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const coursesData = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the basics of ReactJS.',
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    description: 'Learn the fundamentals of JavaScript.',
  },
  {
    id: 3,
    title: 'HTML and CSS',
    description: 'Introduction to HTML and CSS.',
  },
];

const CourseList = () => {
  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {coursesData.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CourseDetails = () => {
  const courseId = useParams()
  console.log(courseId.id)
  console.log(coursesData)
  const course = coursesData.find((Course) => Course.id == courseId.id);
  console.log(course)
  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <Link to="/">Back to Course List</Link>
    </div>
  );
};

const NotFound = () => {
  return <div>Page not found</div>;
};

const App = () => {
  return (
    <Router>
      <div>
        <h1>eLearning App</h1>
        <Routes>
          <Route path="/" element={<CourseList coursesData={coursesData}/>} />
          <Route path="/course/:id" element={<CourseDetails/>} />
          <Route component={NotFound} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;