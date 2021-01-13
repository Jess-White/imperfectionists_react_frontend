import axios from 'axios';

// export const createBlogPost = ({stuff}) => {
//   return axios
//     .post('/api/blog_posts', {stuff})
//     .then(response => response.data)
// }

export const getBlogPosts = () => {
  return axios
    .get('/api/blog_posts')
    .then(response => response.data)
    .catch(errors => {
      console.log(errors);
  })
}