import { client } from '../utils/fetchClient';

export const getAlbumsPhotos = (albumId) => {
  return client.get(`/albums/${albumId}/photos`);
};
