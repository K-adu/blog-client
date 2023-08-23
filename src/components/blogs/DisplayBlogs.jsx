import '../../App.css';

export default function DisplayBlogs() {
  return (
    <div className="blog-card">
      <img
        src="https://via.placeholder.com/200" // Placeholder image for blog
        alt="Blog"
      />
      <div className="blog-details">
        <h2>Blog Title</h2>
        <p>Short description of the blog...</p>
        <p>Posted by: Manish Baral</p>
        <p>Rating: 4/5</p>
        <p>Date: August 22, 2023</p>
      </div>
    </div>
  );
}
