
import './App.css'; 

function CourseDetails({ courses }) {
  return (
    <div className="card">
      <h2 className="card-title">Course Details</h2>
      {courses && courses.length > 0 ? (
        <ul className="list">
          {courses.map((course) => (
            <li key={course.id} className="list-item">
              <h3 className="item-title">{course.name}</h3>
              {course.date ? (
                <p className="item-text">Date: {course.date}</p>
              ) : (
                <p className="item-text-italic">Date not specified</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-data-message">No course details available.</p>
      )}
      
    </div>
  );
}

export default CourseDetails;
