import { Link, useSearchParams } from "react-router-dom";
import { UserLink } from "./UserLink";
import { Table } from "react-bootstrap";
import { getSearchWith } from "../utils/searchHelper";

const sortOptions = [
  { title: 'Id', value: 'id' },
  { title: 'Name', value: 'name' },
  { title: 'Username', value: 'username' },
  { title: 'Email', value: 'email' },
];

export const UserTable = ({ users }) => {
  const [searchParams] = useSearchParams();
  const order = searchParams.get('order') || '';
  const sort = searchParams.get('sort') || '';

  const sortBy = (newSortType) => {
    let sortParams = {};
    const firstClick = newSortType !== sort;
    const secondClick = newSortType === sort && order !== 'desc';
    const thirdClick = newSortType === sort && order === 'desc';

    if (firstClick) {
      sortParams = {
        sort: newSortType,
      };
    }

    if (secondClick) {
      sortParams = {
        order: 'desc',
      };
    }

    if (thirdClick) {
      sortParams = {
        sort: null, order: null,
      };
    }

    return getSearchWith(searchParams, sortParams);
  };

  if (users.length === 0) {
    return <p>There are no people matching the current search criteria</p>;
  }

  return (
    <Table striped bordered hover>
      <thead className="table">
        <tr>
          {sortOptions.map(option => (
            <th key={option.value}>
              <span>
                {option.title}
                <Link
                  to={{
                    search: sortBy(option.value),
                  }}
                >
                  <span className="icon">
                    {sort !== option.value ? (
                      <i className="fas fa-sort" />
                    ) : order === 'desc' && sort === option.value ? (
                      <i className="fas fa-sort-down" />
                    ) : (
                      <i className="fas fa-sort-up" />
                    )}
                  </span>
                </Link>
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserLink key={user.id} user={user} />
        ))}
      </tbody>
    </Table>
  );
};
