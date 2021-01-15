import axios from 'axios';

export const createBlogPost = ({title, blurb, artist, image_url}) => {
  return axios
    .post('/api/blog_posts', {title, blurb, artist, image_url})
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