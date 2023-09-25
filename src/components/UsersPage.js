import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getUsers } from "../api/users";
import { Loader } from "./Loader";
import { Container } from "react-bootstrap";
import { filterUsers } from "../utils/filterUsers";
import { UserTable } from "./UsersTable";
import { UsersFilter } from "./UsersFilter";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const order = searchParams.get("order") || "";
  const sort = searchParams.get("sort") || "";

  useEffect(() => {
    setLoading(true);

    getUsers()
      .then(setUsers)
      .catch(() => setShowError(true))
      .finally(() => setLoading(false));
  }, []);

  const filteredUsers = useMemo(() => {
    return filterUsers(users, {
      query,
      order,
      sort,
    });
  }, [users, query, sort, order]);

  if (showError) {
    return <p>Something went wrong</p>;
  }

  return (
    <Container className="users_page">
      <h1>Users page</h1>
      {loading ? (
        <Loader />
      ) : (
        <Container className="users_list">
          <UsersFilter />
          <UserTable users={filteredUsers} />
        </Container>
      )}
    </Container>
  );
};
