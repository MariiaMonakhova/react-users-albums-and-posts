import { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import { PostsContent } from "./PostsContent";
import { AlbumsContent } from "./AlbumsContent";
import { getSearchWith } from "../utils/searchHelper";

const tabOption = [
  {id: "posts", content: "Posts"},
  {id: "albums", content: "Albums"},
];

export const UserDetailsPage = () => {
  const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("posts");

  useEffect(() => {
    const contentParam = searchParams.get("content");
    if (contentParam) {
      setActiveTab(contentParam || activeTab);
    }
  }, [searchParams, activeTab]);

  function handleTabChange(tabId) {
    setActiveTab(tabId);

    const tab = getSearchWith(searchParams, { content: tabId });

    setSearchParams(tab);
  }

  return (
    <Container className="users_details_page">
      <h1>{activeTab === "albums" ? "Albums" : "Posts"} of user {userId}</h1>

      <Nav
        variant="tabs"
        activeKey={activeTab}
        className="nav_links"
      >
      {tabOption.map(tab => (
        <Nav.Item key={tab.id}>
          <Nav.Link
            eventKey={tab.id}
            to={`../${tab.id}`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.content}
          </Nav.Link>
        </Nav.Item>
      ))}
      </Nav>

      {activeTab === "posts" ? (
        <PostsContent />
      ) : activeTab === "albums" ? (
        <AlbumsContent />
      ) : null}
    </Container>
  );
};
