import { Card, Container } from 'react-bootstrap';
import { getPostsComments } from '../api/comments';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from './Loader';

export const PostCommentsPage = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getPostsComments(postId)
      .then(setComments)
      .catch(() => setShowError(true))
      .finally(() => setLoading(false));
  }, [postId]);

  if (showError) {
    return <p>Something went wrong</p>;
  }

  return (
    <Container className="post_comments_page">
      <h1>Comments for post {postId}</h1>

      {loading ? (
        <Loader />
      ) : (
      comments.map((comment) => (
        <Card key={comment.id} className="comment-card">
          <Card.Header>{comment.email}</Card.Header>
          <Card.Body>
            <Card.Title>{comment.name}</Card.Title>
            <Card.Text>
              {comment.body}
            </Card.Text>
          </Card.Body>
        </Card>
      )
      ))}
    </Container>
  );
};
