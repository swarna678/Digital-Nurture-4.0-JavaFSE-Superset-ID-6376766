
import React from 'react'; 

class Posts extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      posts: [],       
      error: null,    
      isLoading: true  
    };

    this.loadPosts = this.loadPosts.bind(this);
  }


  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); 
      })
      .then(data => {
        this.setState({
          posts: data,       
          isLoading: false   
        });
      })
      .catch(error => {
       
        console.error("Error fetching posts:", error);
        this.setState({
          error: error,      
          isLoading: false   
        });
        
      });
  }


  componentDidMount() {
    console.log("Posts component has mounted. Fetching data...");
    this.loadPosts(); 
  }


  render() {
  
    const { posts, error, isLoading } = this.state;


    if (isLoading) {
      return (
        <div style={{ textAlign: 'center', padding: '20px', fontSize: '20px' }}>
          Loading posts... Please wait.
        </div>
      );
    }

    if (error) {

      return (
        <div style={{ textAlign: 'center', padding: '20px', color: 'red', fontSize: '20px', border: '1px solid red' }}>
          Error: {error.message || "Something went wrong while fetching posts."}
        </div>
      );
    }

    
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Blog Posts</h1>
        {posts.map(post => ( 
          <div key={post.id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            margin: '15px auto', 
            padding: '15px',
            maxWidth: '600px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h2>{post.title}</h2> 
            <p style={{ lineHeight: '1.6' }}>{post.body}</p>  
          </div>
        ))}
      </div>
    );
    
  }

  
  componentDidCatch(error, info) {
    console.error("Caught an error in componentDidCatch:", error, info);
    this.setState({
      error: error 
    });
   
  }
}

export default Posts; 