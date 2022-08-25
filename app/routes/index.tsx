import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <ul>
      <li>
        <Link to="/blogs/1">Blog 1</Link>
      </li>
      <li>
        <Link to="/blogs/2">Blog 2</Link>
      </li>
    </ul>
  );
}
