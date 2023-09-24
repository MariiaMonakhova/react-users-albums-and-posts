import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { getSearchWith } from "../utils/searchHelper";

export const UsersFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const handleQueryChange = (event) => {
    const newQuery = event.target.value.trim() || null;

    const search = getSearchWith(searchParams, { query: newQuery });

    setSearchParams(search);
  };

  return (
    <>
      <Form.Control
        type="text"
        value={query}
        placeholder="Search"
        onChange={handleQueryChange}
        className="search"
      />
    </>
  );
};
