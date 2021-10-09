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
  posts: (id) => `${baseUrl}/users/${id}/posts`,
  comments: (id) => `${baseUrl}/posts/${id}/comments`,
  album: (id) => `${baseUrl}/users/${id}/albums`,
  photos: (id) => `${baseUrl}/albums/${id}/photos`,
};

export default api;
