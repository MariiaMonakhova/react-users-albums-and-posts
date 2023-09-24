import { client } from '../utils/fetchClient';

export const getUserPosts = (userId) => {
  return client.get(`/posts?userId=${userId}`);
};

export const getPosts = () => {
  return client.get('/posts');
};
