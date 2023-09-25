import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { UsersPage } from "./components/UsersPage";
import "./App.css";
import { UserDetailsPage } from "./components/UserDetails";
import { PostCommentsPage } from "./components/PostCommentsPage";
import { PageNotFound } from "./components/PageNotFound";
import { AlbumContentPage } from "./components/AlbumContentPage";

export const App = () => (
  <Container className="App">
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/users/:userId" element={<UserDetailsPage />} />

      <Route
        path="/users/:userId/posts/:postId"
        element={<PostCommentsPage />}
      />
      <Route
        path="/users/:userId/albums/:albumId"
        element={<AlbumContentPage />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Container>
);
