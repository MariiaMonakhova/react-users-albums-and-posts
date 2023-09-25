import { ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { useEffect, useState } from "react";
import { getUserAlbums } from "../api/albums";

export const AlbumsContent = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getUserAlbums(userId)
      .then(setAlbums)
      .catch(() => setShowError(true))
      .finally(() => setLoading(false));
  }, [userId]);

  if (showError) {
    return <p>Something went wrong</p>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <ListGroup className="album_list">
      {albums.map((album) => (
        <Link key={album.id} to={`albums/${album.id}`} className="link">
          <ListGroup.Item className="album-item">{album.title}</ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  );
};
