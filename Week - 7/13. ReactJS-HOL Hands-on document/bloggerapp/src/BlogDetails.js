
import './App.css'; 

function BlogDetails({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return null;
  }

  let blogListContent;
  if (blogs.length > 0) {
    blogListContent = (
      <ul className="list">
        {blogs.map((blog) => (
          <li key={blog.id} className="list-item">
            <h3 className="item-title">{blog.title}</h3>
           
            <p className="item-content">{blog.content}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    blogListContent = (
      <p className="no-data-message">No blog posts available.</p>
    );
  }

  return (
    <div className="card">
      <h2 className="card-title">Blog Details</h2>
      {blogListContent}
    </div>
  );
}

export default BlogDetails;
