const baseUrl = 'https://jsonplaceholder.typicode.com';

const axiosOptions = ({ method, url, data }) => ({
  method,
  url,
  data,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  axiosOptions,
  users: `${baseUrl}/users`,
  user: (id) => `${baseUrl}/users/${id}`,
  posts: `${baseUrl}/posts`,
  postById: (id) => `${baseUrl}/posts/${id}`,
  postsByUser: (id) => `${baseUrl}/users/${id}/posts`,
  commentsByPost: (id) => `${baseUrl}/posts/${id}/comments`,
  comments: `${baseUrl}/comments`,
  commentById: (id) => `${baseUrl}/comments/${id}`,
  albums: (id) => `${baseUrl}/users/${id}/albums`,
  photos: (id) => `${baseUrl}/albums/${id}/photos`,
};

export default api;
