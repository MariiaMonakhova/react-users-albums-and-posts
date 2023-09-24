import { client } from '../utils/fetchClient';

export const getPostsComments = (postId) => {
  return client.get(`/posts/${postId}/comments`);
};

