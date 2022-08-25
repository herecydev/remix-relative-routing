import { Link, useParams } from "@remix-run/react";

export default function Index() {
  const { blog } = useParams();

  return (
    <>
      <hr />
      <div>👋 I'm nested blog {blog}</div>
      <div>
        <Link to="../">Go back to blog page</Link>
      </div>
      <hr />
    </>
  );
}
