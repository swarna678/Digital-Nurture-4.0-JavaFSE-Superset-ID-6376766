
import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import { books, blogs, courses } from './data';
import './App.css'; 

function App() {
  const [activeSection, setActiveSection] = useState('all');

  let contentToRender;

  if (activeSection === 'books') {
    contentToRender = (
      <div className="section-wrapper">
        <BookDetails books={books} />
      </div>
    );
  } else if (activeSection === 'blogs') {
    contentToRender = (
      <div className="section-wrapper">
        <BlogDetails blogs={blogs} />
      </div>
    );
  } else if (activeSection === 'courses') {
    contentToRender = (
      <div className="section-wrapper">
        <CourseDetails courses={courses} />
      </div>
    );
  } else { 
    contentToRender = (
      <>
        <div className="section-wrapper border-right">
          <CourseDetails courses={courses} />
        </div>
        <div className="section-wrapper border-right">
          <BookDetails books={books} />
        </div>
        <div className="section-wrapper">
          <BlogDetails blogs={blogs} />
        </div>
      </>
    );
  }

  return (
    <div className="app-container">
      <h1 className="main-title">Blogger App</h1>

      <nav className="nav-buttons">
        <button
          onClick={() => setActiveSection('all')}
          className={`nav-button ${activeSection === 'all' ? 'nav-button-active' : ''}`}
        >
          Show All
        </button>
        <button
          onClick={() => setActiveSection('books')}
          className={`nav-button ${activeSection === 'books' ? 'nav-button-active' : ''}`}
        >
          Show Books
        </button>
        <button
          onClick={() => setActiveSection('blogs')}
          className={`nav-button ${activeSection === 'blogs' ? 'nav-button-active' : ''}`}
        >
          Show Blogs
        </button>
        <button
          onClick={() => setActiveSection('courses')}
          className={`nav-button ${activeSection === 'courses' ? 'nav-button-active' : ''}`}
        >
          Show Courses
        </button>
      </nav>

      <div className="content-display">
        {contentToRender}
      </div>
    </div>
  );
}

export default App;
