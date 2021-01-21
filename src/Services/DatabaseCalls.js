import axios from 'axios';

export const getBlogPosts = () => {
  return axios
    .get('/api/blog_posts')
    .then(response => response.data)
    .catch(errors => {
      console.log(errors);
  })
}

export const createBlogPost = ({title, blurb, artist, image_url}) => {
  return axios
    .post('/api/blog_posts', {title, blurb, artist, image_url})
    .then(response => response.data)
}

export const updateBlogPost = ({title, blurb, artist, image_url}) => {
  return axios
    .patch('/api/blog_posts', {title, blurb, artist, image_url})
    .then(response => response.data)
}

export const getUsers = () => {
  return axios
    .get('/api/users')
    .then(response => response.data)
    .catch(errors => {
      console.log(errors);
  })
}

export const createUser = ({user_name, email, admin, password, password_confirmation}) => {
  return axios
    .post('/api/users', {user_name, email, admin, password, password_confirmation})
    .then(response => response.data)
}

export const updateUser = ({user_name, email, admin, password, password_confirmation}) => {
  return axios
    .patch('/api/blog_posts', {user_name, email, admin, password, password_confirmation})
    .then(response => response.data)
}

export const createSession = ({email, password}) => {
  return axios
    .post('/api/sessions', {email, password})
    .then(response => response.data)
}