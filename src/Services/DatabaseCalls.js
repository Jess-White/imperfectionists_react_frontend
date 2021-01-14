import axios from 'axios';

export const createBlogPost = ({title, blurb, artist, image_url, wordcount, like_count, genre, year}) => {
  return axios
    .post('/api/blog_posts', {title, blurb, artist, image_url, wordcount, like_count, genre, year})
    .then(response => response.data)
}

export const getBlogPosts = () => {
  return axios
    .get('/api/blog_posts')
    .then(response => response.data)
    .catch(errors => {
      console.log(errors);
  })
}

handleSubmit = (event) => {
  event.preventDefault() 
    castNewVote({title, blurb, artist, image_url, wordcount, like_count, genre, year
    })
    .then(() => {
      this.props.handleVote({email: this.state.email, framework: this.state.selectedFramework})
      this.setState({
        email: "",
        selectedFramework: "",
      })
      this.myFormRef.reset()
    })
    .catch(() => {
      this.myFormRef.reset()
    })
    .then(() => {
      console.log(this.state.hasError)
    })
}