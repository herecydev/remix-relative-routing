import { Link, useParams } from "@remix-run/react";

export default function Index() {
  const { blog } = useParams();

  return (
    <>
      <div>📝 blog {blog}</div>
      <Link to="..">Go back to blog</Link>
    </>
  );
}
