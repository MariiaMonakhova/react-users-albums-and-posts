import { ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { useEffect, useState } from "react";
import { getUserPosts } from "../api/posts";

export function PostsContent() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getUserPosts(userId)
      .then(setPosts)
      .catch(() => setShowError(true))
      .finally(() => setLoading(false));
  }, [userId]);

  if (showError) {
    return <p>Something went wrong</p>;
  }

  if (loading) {
    return <Loader />
  }

  return (
    <ListGroup className="posts_list">
      {posts.map((post) => (
        <Link key={post.id} to={`posts/${post.id}`} className="link">
          <ListGroup.Item className="posts-item">{post.title}</ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  );
}