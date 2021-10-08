const baseUrl = 'https://jsonplaceholder.typicode.com';

const api = {
  posts: (id) => `${baseUrl}/users/${id}/posts`,
  comments: (id) => `${baseUrl}/posts/${id}/comments`,
  album: (id) => `${baseUrl}/users/${id}/albums`,
  photos: (id) => `${baseUrl}/albums/${id}/photos`,
}

export default api;
