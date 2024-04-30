// Write your JS code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogList: formatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Tailspin" color="#00BFFF" width={50} height={50} />
          </div>
        ) : (
          <ul className="unordered-list-container">
            {blogList.map(each => (
              <BlogItem eachBlog={each} key={uuidv4()} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
