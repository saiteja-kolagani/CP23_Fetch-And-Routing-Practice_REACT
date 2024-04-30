// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  return (
    <Link to={`/blogs/${eachBlog.id}`} className="link-decoration">
      <li className="list-container">
        <div>
          <img
            src={eachBlog.imageUrl}
            alt={eachBlog.title}
            className="blog-image"
          />
        </div>
        <div className="list-content-sub-contianer">
          <p className="list-topic-text">{eachBlog.topic}</p>
          <h1 className="list-title-text">{eachBlog.title}</h1>
          <div className="author-container">
            <img
              src={eachBlog.avatarUrl}
              alt={eachBlog.author}
              className="avatar-image"
            />
            <p className="author-text">{eachBlog.author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
