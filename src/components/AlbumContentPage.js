import { Card, Container, Row } from 'react-bootstrap';
import { getAlbumsPhotos } from '../api/photos';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from './Loader';

export const AlbumContentPage = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getAlbumsPhotos(albumId)
      .then(setPhotos)
      .catch(() => setShowError(true))
      .finally(() => setLoading(false));
  }, [albumId]);

  console.log(photos);

  if (showError) {
    return <p>Something went wrong</p>;
  }

  return (
    <Container className="album_content_page">
      <h1>Photos for album {albumId}</h1>
      {loading ? (
        <Loader />
      ) : (
        <Row xs={1} md={2} className="g-4 photo-cards">
          {photos.map((photo) => (
            <Card style={{ width: '18rem' }} className='photo-card' key={photo.id}>
              <Card.Img className="photo-photo" alt={photo.title} variant="top" src={photo.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{photo.title}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Row>
      )}
    </Container>
  );
};
