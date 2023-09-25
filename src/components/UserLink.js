import { Link } from "react-router-dom";

export const UserLink = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>
        <Link
          to={{
            pathname: `/users/${user.id}`,
          }}
          className="link"
        >
          {user.name}
        </Link>
      </td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
  );
};
