import { useContext, useEffect } from 'react';
import '../../App.css';
// import { BlogContext } from '../../pages/HomePage';

export default function DisplayBlogs(props) {
  console.log(props);

  return (
    <div className="blog-container">
      {props.blogs.map((blog) => (
        <div key={blog._id} className="blog-card">
          <img
            src="https://via.placeholder.com/200"
            height={500}
            width={800} // Placeholder image for blog
            alt="Blog"
          />
          <div className="blog-details">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            {/* You can replace the following placeholders with actual data */}
            <p>Rating: 4/5</p>
            {/* <p>Date: {new Date(blog.createdAt).toLocaleDateString()}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}
