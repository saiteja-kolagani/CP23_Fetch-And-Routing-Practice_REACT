// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const formatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogItemDetails: formatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogItemDetails} = this.state
    const {title, imageUrl, avatarUrl, author, content, topic} = blogItemDetails

    return (
      <div className="blog-info">
        <h2 className="blog-title">{title}</h2>
        <div className="author-container">
          <img src={avatarUrl} alt={author} className="blog-author-image" />
          <p className="blog-author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-image-individual" />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="Tailspin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
