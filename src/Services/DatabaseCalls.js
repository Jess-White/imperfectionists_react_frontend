import axios from 'axios';
import create from 'zustand'

export const useBlogPostIndexStore = create(set => ({
  blogPosts: [],
  searchResults: [],
  errors: [],
  loading: false,
  axiosIndexRequest: async () => {
    try {
      set({
        loading: true
      })
      const blogPosts = await getBlogPosts()
      set({
        blogPosts: blogPosts,
        loading: false
      })
    } catch(error) {
      const errors = await getBlogPosts()
      set({
        errors: errors,
        loading: false
      })
    }
  },
  axiosSearchRequest: async (searchParams) => {
    try {
      set({
        loading: true
      })
      const searchResults = await searchBlogPosts(searchParams)
      set({
        searchResults: searchResults,
        loading: false
      })
    } catch(error) {
      const errors = await searchBlogPosts(searchParams)
      set({
        errors: errors,
        loading: false
      })
    }
  }
}))

export const getBlogPosts = () => {
  return axios
    .get('/api/blog_posts')
    .then(response => response.data)
}

export const useBlogPostShowStore = create(set => ({
  blogPost: {},
  errors: [],
  loading: false,
  axiosRequest: async (id) => {
    try {
      set({
        loading: true
      })
      const blogPost = await getBlogPost(id)
      set({
        blogPost: blogPost,
        loading: false
      })
    } catch(error) {
      const errors = await getBlogPost(id)
      set({
        errors: errors,
        loading: false
      })
    }
  }  
}))


export const getBlogPost = (id) => {
  return axios
    .get(`/api/blog_posts/${id}`)
    .then(response => {
      return response.data
    })
}

export const searchBlogPosts = (searchParams) => {
  return axios 
  .get(`/api/blog_posts/`)
  .then(response => {
    return response.data.filter(blogPost => {
      return blogPost.title.toLowerCase().includes(searchParams.toLowerCase())
    })
  })
}

// export const useBlogPostCreateStore = create(set => ({
//   newBlogPost: {},
//   errors: [],
//   loading: false,
//   axiosRequest: async () => {
//     try {
//       set({
//         loading: true
//       })
//       const newBlogPost = await createBlogPost()
//       set({
//         newBlogPost: newBlogPost,
//         loading: false
//       })
//     } catch(error) {
//       const errors = await createBlogPost()
//       set({
//         errors: errors,
//         loading: false
//       })
//     }
//   }  
// }))

export const createBlogPost = ({title, blurb, artist, image_url}) => {
  return axios
    .post('/api/blog_posts', {title, blurb, artist, image_url})
    .then(response => response.data)
    .catch(errors => {
      console.log(errors);
    })
}

export const updateBlogPost = ({id, title, blurb, artist, image_url}) => {
  return axios
    .patch(`/api/blog_posts/${id}`, {title, blurb, artist, image_url})
    .then(response => response.data)
    .catch(errors => {
      console.log(errors);
    })
}

export const getUsers = () => {
  return axios
    .get('/api/users')
    .then(response => response.data)
}

export const useUserIndexStore = create(set => ({
  users: [],
  errors: [],
  loading: false,
  axiosRequest: async () => {
    try {
      set({
        loading: true
      })
      const users = await getUsers()
      set({
        users: users,
        loading: false
      })
    } catch(error) {
      const errors = await getUsers()
      set({
        errors: errors,
        loading: false
      })
    }
  }  
}))

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