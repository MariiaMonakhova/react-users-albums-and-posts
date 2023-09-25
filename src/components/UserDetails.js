import { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PostsContent } from "./PostsContent";
import { AlbumsContent } from "./AlbumsContent";

const tabOption = [
  {id: "posts", content: "Posts"},
  {id: "albums", content: "Albums"},
];

export const UserDetailsPage = () => {
  const { userId } = useParams();
  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <Container className="users_details_page">
      <h1>{activeTab} of user {userId}</h1>

      <Nav
        variant="tabs"
        activeKey={activeTab}
        className="nav_links"
      >
      {tabOption.map(tab => (
        <Nav.Item key={tab.content}>
          <Nav.Link
          eventKey={tab.content}
            to={`../${tab.id}`}
            onClick={() => setActiveTab(tab.content)}
          >
            {tab.content}
          </Nav.Link>
        </Nav.Item>
      ))}
      </Nav>

      {activeTab === "Posts" ? (
        <PostsContent />
      ) : activeTab === "Albums" ? (
        <AlbumsContent />
      ) : null}
    </Container>
  );
};
