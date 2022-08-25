import { Link, Outlet, useParams } from "@remix-run/react";

export default function Index() {
  const { blog } = useParams();

  return (
    <>
      <div>👋 I'm blog {blog}</div>
      <div>
        <Link to="nested">Try my nested route</Link>
      </div>
      <Outlet />
      <Link to="edit">Edit me</Link>
    </>
  );
}
